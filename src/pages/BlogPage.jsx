import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "./../api/axiosInstance";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosInstance.get("/posts");
        if (data.success) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* ===== Hero Section ===== */}
      <section
  className="relative min-h-screen sm:min-h-[70vh] md:min-h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80')",
  }}
>
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-[#0A0F1C]/90"></div>
  <div className="relative z-10 text-center px-6 md:px-8 max-w-4xl mx-auto py-20 animate-fadeIn">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl leading-tight animate-slideDown">
      Insights & Articles
    </h1>
    <p className="max-w-2xl mx-auto text-gray-100 text-lg md:text-xl leading-relaxed px-4 drop-shadow-lg animate-slideUp">
      Stay informed on the latest trends in cybersecurity, threat
      intelligence, and digital defense.
    </p>
  </div>
      </section>

      {/* ===== Blog Posts Grid ===== */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        {loading ? (
          <div className="text-center text-gray-400 text-lg">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-400 text-lg">
            No posts available yet.
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-[#10172A] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={
                    post.featuredImage ||
                    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=900&q=80"
                  }
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    {post.category && (
                      <p className="text-sm text-red-400 font-medium mb-2">
                        {post.category}
                      </p>
                    )}
                    <h2 className="text-xl font-semibold mb-3 hover:text-red-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.content[0]?.value?.slice(0, 120)}...
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                    <Link
                      to={`/blog/${post.slug || post._id}`}
                      className="text-red-400 hover:text-red-500 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out 0.2s backwards;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;