import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import {
  Upload,
  Save,
  PlusCircle,
  Type,
  Image as ImageIcon,
  List,
  Trash2,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

/**
 * CreatePost page
 * - Content blocks: text, subheading, list, image
 * - Featured image upload + preview
 * - Upload a content image via backend /upload endpoint (returns URL)
 * - Submit to POST /posts/admin/posts with FormData
 *
 * Notes:
 * - Schema expects content blocks with types: "text", "subheading", "list", "image"
 * - list.value should be an array of strings
 * - image.value should be a URL string
 */

const emptyBlock = (type) => {
  if (type === "list") return { id: Date.now() + Math.random(), type, value: [] };
  if (type === "image") return { id: Date.now() + Math.random(), type, value: "" , caption: ""};
  return { id: Date.now() + Math.random(), type, value: "" }; // text / subheading
};

export default function CreatePost() {
  const navigate = useNavigate();
  const fileRef = useRef(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");
  const [featuredFile, setFeaturedFile] = useState(null);
  const [featuredPreview, setFeaturedPreview] = useState(null);

  // content: array of blocks {id, type, value}
  const [content, setContent] = useState([emptyBlock("text")]);

  const [loading, setLoading] = useState(false);
  const [uploadingImageId, setUploadingImageId] = useState(null);
  const [error, setError] = useState("");

  // -------- helpers --------
  const addBlock = (type) => {
    setContent((s) => [...s, emptyBlock(type)]);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const updateBlock = (id, patch) => {
    setContent((s) => s.map((b) => (b.id === id ? { ...b, ...patch } : b)));
  };

  const removeBlock = (id) => {
    setContent((s) => s.filter((b) => b.id !== id));
  };

  const moveBlock = (id, dir) => {
    setContent((s) => {
      const idx = s.findIndex((b) => b.id === id);
      if (idx === -1) return s;
      const copy = [...s];
      const to = dir === "up" ? idx - 1 : idx + 1;
      if (to < 0 || to >= copy.length) return s;
      [copy[idx], copy[to]] = [copy[to], copy[idx]];
      return copy;
    });
  };

  // List helpers
  const addListItem = (blockId) => {
    updateBlock(blockId, {
      value: [...(content.find((b) => b.id === blockId).value || []), ""],
    });
  };
  const updateListItem = (blockId, idx, val) => {
    const block = content.find((b) => b.id === blockId);
    if (!block) return;
    const newItems = [...(block.value || [])];
    newItems[idx] = val;
    updateBlock(blockId, { value: newItems });
  };
  const removeListItem = (blockId, idx) => {
    const block = content.find((b) => b.id === blockId);
    if (!block) return;
    const newItems = (block.value || []).filter((_, i) => i !== idx);
    updateBlock(blockId, { value: newItems });
  };

  // Featured image selection
  const onFeaturedSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFeaturedFile(file);
    setFeaturedPreview(URL.createObjectURL(file));
  };

  // Upload image for a content image block using backend /upload endpoint
  // returns URL (string) or throws
  const uploadImageForBlock = async (file, blockId) => {
    try {
      setUploadingImageId(blockId);
      const f = new FormData();
      f.append("image", file); // matches upload.single("image") backend
      const res = await axiosInstance.post("/upload", f, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploadingImageId(null);
      return res.data.url || res.data.secure_url || res.data?.result?.secure_url;
    } catch (err) {
      setUploadingImageId(null);
      throw err;
    }
  };

  const onContentImageSelect = async (e, blockId) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await uploadImageForBlock(file, blockId);
      updateBlock(blockId, { value: url });
    } catch (err) {
      console.error("Upload failed", err);
      setError(err.response?.data?.message || "Image upload failed");
    }
  };

  // Validate blocks before submit: convert paragraph/header types if necessary
  const normalizedContent = () =>
    content.map((b) => {
      // map RN types to schema types if any; here our blocks already use web schema types
      // ensure list.value is array and text/subheading/value are strings
      if (b.type === "list") {
        return { type: "list", value: Array.isArray(b.value) ? b.value : [] };
      }
      if (b.type === "image") {
        return { type: "image", value: b.value || "" , caption: b.caption || ""};
      }
      // text or subheading
      return { type: b.type, value: String(b.value || "") };
    });

  // Submit
  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    setError("");

    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    const normalized = normalizedContent();
    const hasContent = normalized.some((b) => {
      if (b.type === "list") return Array.isArray(b.value) && b.value.length > 0;
      return String(b.value || "").trim().length > 0;
    });
    if (!hasContent) {
      setError("Please add at least one content block with content");
      return;
    }

    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("title", title.trim());
      fd.append("category", category.trim());
      fd.append("content", JSON.stringify(normalized));

      // featured image -> backend expects upload.array("images", 5)
      if (featuredFile) {
        fd.append("images", featuredFile);
      }

      const res = await axiosInstance.post("/posts/admin/posts", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data?.success) {
        navigate("/admin/dashboard");
      } else {
        throw new Error(res.data?.message || "Unknown error");
      }
    } catch (err) {
      console.error("Create post error:", err);
      setError(err.response?.data?.message || err.message || "Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  // small helpers for UI
  const blockLabel = (type) => {
    if (type === "text") return "Paragraph";
    if (type === "subheading") return "Subheading";
    if (type === "list") return "List";
    if (type === "image") return "Image";
    return type;
  };

  // ---------- Render ----------
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 pt-24">
      <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-cyan-400">Create Post</h1>
          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded"
            >
              <Save className="w-4 h-4" /> {loading ? "Publishing..." : "Publish"}
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-3 py-2 rounded border border-gray-600 hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-900 text-red-200 p-3 rounded mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category (e.g. Security)"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Featured image</label>
            <div className="flex items-center gap-4">
              <label
                className="inline-flex items-center gap-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded cursor-pointer hover:bg-gray-800"
              >
                <Upload className="w-4 h-4 text-cyan-400" /> Choose image
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={onFeaturedSelect}
                  className="hidden"
                />
              </label>

              {featuredPreview ? (
                <img
                  src={featuredPreview}
                  alt="preview"
                  className="w-24 h-16 object-cover rounded border border-gray-700"
                />
              ) : (
                <div className="w-24 h-16 rounded border border-dashed border-gray-700 flex items-center justify-center text-sm text-gray-400">
                  No image
                </div>
              )}
            </div>
          </div>

          {/* block toolbar */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => addBlock("text")}
              className="flex items-center gap-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded hover:bg-gray-800"
            >
              <Type className="w-4 h-4" /> Text
            </button>
            <button
              type="button"
              onClick={() => addBlock("subheading")}
              className="flex items-center gap-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded hover:bg-gray-800"
            >
              <PlusCircle className="w-4 h-4" /> Subheading
            </button>
            <button
              type="button"
              onClick={() => addBlock("list")}
              className="flex items-center gap-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded hover:bg-gray-800"
            >
              <List className="w-4 h-4" /> List
            </button>
            <button
              type="button"
              onClick={() => addBlock("image")}
              className="flex items-center gap-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded hover:bg-gray-800"
            >
              <ImageIcon className="w-4 h-4" /> Image
            </button>
          </div>

          {/* blocks */}
          <div className="space-y-4 mt-3">
            {content.map((block, i) => (
              <div key={block.id} className="bg-gray-900 border border-gray-700 rounded p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm text-gray-300 font-medium">
                      {blockLabel(block.type)}
                    </div>
                    <div className="text-xs text-gray-500">{`Block ${i + 1}`}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => moveBlock(block.id, "up")}
                      className="p-1 rounded hover:bg-gray-800"
                      title="Move up"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveBlock(block.id, "down")}
                      className="p-1 rounded hover:bg-gray-800"
                      title="Move down"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeBlock(block.id)}
                      className="p-1 rounded hover:bg-red-800"
                      title="Delete block"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>

                <div className="mt-3">
                  {/* text / subheading */}
                  {(block.type === "text" || block.type === "subheading") && (
                    <textarea
                      rows={block.type === "text" ? 6 : 2}
                      value={block.value}
                      onChange={(e) => updateBlock(block.id, { value: e.target.value })}
                      placeholder={block.type === "text" ? "Write paragraph..." : "Subheading..."}
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  )}

                  {/* list */}
                  {block.type === "list" && (
                    <div className="space-y-2">
                      {(block.value || []).map((item, idx) => (
                        <div key={idx} className="flex gap-2 items-center">
                          <input
                            value={item}
                            onChange={(e) => updateListItem(block.id, idx, e.target.value)}
                            placeholder={`Item ${idx + 1}`}
                            className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded"
                          />
                          <button
                            type="button"
                            onClick={() => removeListItem(block.id, idx)}
                            className="p-2 rounded hover:bg-red-800"
                          >
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      ))}
                      <div>
                        <button
                          type="button"
                          onClick={() => addListItem(block.id)}
                          className="mt-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded hover:bg-gray-800"
                        >
                          Add item
                        </button>
                      </div>
                    </div>
                  )}

                  {/* image block */}
                  {block.type === "image" && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <label className="inline-flex items-center gap-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded cursor-pointer hover:bg-gray-800">
                          <Upload className="w-4 h-4 text-cyan-400" />
                          Upload image
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => onContentImageSelect(e, block.id)}
                            className="hidden"
                          />
                        </label>

                        <input
                          type="text"
                          value={block.value}
                          onChange={(e) => updateBlock(block.id, { value: e.target.value })}
                          placeholder="Or paste image URL"
                          className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded"
                        />
                      </div>

                      <input
                        type="text"
                        value={block.caption || ""}
                        onChange={(e) => updateBlock(block.id, { caption: e.target.value })}
                        placeholder="Caption (optional)"
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded mt-2"
                      />

                      {uploadingImageId === block.id && (
                        <div className="text-sm text-gray-400 mt-2">Uploading image...</div>
                      )}

                      {block.value && (
                        <img
                          src={block.value}
                          alt="block"
                          className="w-full max-h-56 object-cover rounded mt-2 border border-gray-700"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* submit controls at bottom */}
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              {content.length} block{content.length !== 1 ? "s" : ""}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setContent([emptyBlock("text")]);
                  setTitle("");
                  setCategory("General");
                  setFeaturedFile(null);
                  setFeaturedPreview(null);
                }}
                className="px-3 py-2 rounded border border-gray-700 hover:bg-gray-800"
              >
                Reset
              </button>

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded"
              >
                <Save className="w-4 h-4" /> {loading ? "Publishing..." : "Publish Post"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
