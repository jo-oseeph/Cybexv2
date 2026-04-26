import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const PostDetails = () => {
  const { slugOrId } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axiosInstance.get(`/posts/${slugOrId}`);
        setPost(res.data.post);

        if (res.data.post.category) {
          const relatedRes = await axiosInstance.get(
            `/posts?category=${res.data.post.category}&limit=4`
          );
          setRelatedPosts(
            relatedRes.data.posts.filter((p) => p._id !== res.data.post._id)
          );
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slugOrId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-500 text-lg animate-pulse">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-500 text-lg">Post not found.</p>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 text-gray-900">
      {/* Hero Image — 80vh, no overlay text */}
      <div
        className="w-full overflow-hidden"
        style={{ height: "80vh" }}
      >
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Two-column layout wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── LEFT: Title + Article content ── */}
          <main className="lg:w-2/3">
            {/* Post Title & Meta — sits just above the article */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight text-primary mb-3">
                {post.title}
              </h1>
              <p className="text-sm text-gray-500">
                By{" "}
                <span className="text-red-500 font-semibold">
                  {post.author?.name}
                </span>{" "}
                • {new Date(post.createdAt).toLocaleDateString()} • 6 min read
              </p>
            </div>

            {/* Article Body */}
            <article className="prose lg:prose-lg max-w-none text-gray-800">
              {post.content &&
                post.content.map((block, idx) => {
                  if (block.type === "text")
                    return (
                      <p key={idx} className="mb-4 leading-relaxed">
                        {block.value}
                      </p>
                    );

                  if (block.type === "subheading" || block.type === "heading")
                    return (
                      <h2
                        key={idx}
                        className="text-2xl font-bold mt-8 mb-4 text-gray-900"
                      >
                        {block.value}
                      </h2>
                    );

                  if (block.type === "image")
                    return (
                      <img
                        key={idx}
                        src={block.value}
                        alt={block.alt || "Post image"}
                        className="w-full rounded-lg shadow-md my-6"
                      />
                    );

                  if (block.type === "list")
                    return (
                      <ul key={idx} className="list-disc pl-6 mb-4">
                        {(block.items || block.value || []).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );

                  return null;
                })}
            </article>

            {/* Share Row (bottom of article on mobile/tablet) */}
            <div className="flex gap-4 items-center text-gray-500 mt-10 pt-6 border-t border-gray-300 lg:hidden">
              <button className="hover:text-red-500 transition text-sm">Share</button>
              <button className="hover:text-red-500 transition text-sm">Copy Link</button>
            </div>
          </main>

          {/* ── RIGHT: Sidebar ── */}
          <aside className="lg:w-1/3 flex flex-col gap-8">

            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share (sidebar — desktop only) */}
            <div className="hidden lg:block bg-white rounded-xl shadow-sm p-5">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Share
              </h3>
              <div className="flex gap-3">
                <button className="flex-1 border border-gray-200 rounded-lg py-2 text-sm text-gray-600 hover:border-red-400 hover:text-red-500 transition">
                  Share Post
                </button>
                <button className="flex-1 border border-gray-200 rounded-lg py-2 text-sm text-gray-600 hover:border-red-400 hover:text-red-500 transition">
                  Copy Link
                </button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  Related Posts
                </h3>
                <div className="flex flex-col gap-4">
                  {relatedPosts.slice(0, 3).map((relPost) => (
                    <Link
                      key={relPost._id}
                      to={`/blog/${relPost.slug}`}
                      className="flex gap-3 group"
                    >
                      <img
                        src={
                          relPost.featuredImage ||
                          `https://source.unsplash.com/80x80/?tech,${relPost._id}`
                        }
                        alt={relPost.title}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex flex-col justify-center">
                        <h4 className="text-sm font-semibold text-gray-800 group-hover:text-red-500 transition leading-snug line-clamp-2">
                          {relPost.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(relPost.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </aside>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;