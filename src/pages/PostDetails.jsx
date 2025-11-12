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
            `/posts?category=${res.data.post.category}&limit=3`
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
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 text-lg">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 text-lg">Post not found.</p>
      </div>
    );
  }

  return (
    <section className=" bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div
className="relative w-full bg-black flex items-end overflow-hidden"
        style={{
          backgroundImage: `url(${post.featuredImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="relative p-5 sm:p-16 text-white z-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm sm:text-base text-gray-300">
            By{" "}
            <span className="text-red-500 font-semibold">
              {post.author.name}
            </span>{" "}
            • {new Date(post.createdAt).toLocaleDateString()} • 6 min read
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        {/* Tags & Share */}
        <div className="flex flex-wrap justify-between items-center mt-10 border-t border-gray-300 pt-6">
          <div className="flex gap-3 flex-wrap">
            {post.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 items-center text-gray-600 mt-4 sm:mt-0">
            <button className="hover:text-red-500 transition">Share</button>
            <button className="hover:text-red-500 transition">Copy Link</button>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">
              Related Posts
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost._id}
                  to={`/blog/${relPost.slug}`}
                  className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img
                    src={
                      relPost.featuredImage ||
                      `https://source.unsplash.com/400x250/?tech,${relPost._id}`
                    }
                    alt={relPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {relPost.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {relPost.content?.[0]?.value?.slice(0, 60)}...
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PostDetails;