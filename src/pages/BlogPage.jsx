import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "./../api/axiosInstance";
import HeroSection from "../components/BlogHero";

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
    <>
      {/* ===== Hero Section ===== */}
      <HeroSection />
      {/* ===== Blog Posts Grid ===== */}
      <section className="py-16 px-6 md:px-12 lg:px-20 text-white">
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
                className="bg-[#10172A] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-500"
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
    </>
  );
};

export default BlogPage;