import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import {
  Edit,
  Trash2,
  PlusCircle,
  FileText,
  Activity,
  Calendar,
} from "lucide-react";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalPosts: 0,
    latestPosts: [],
    postsThisWeek: 0,
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch dashboard statistics
  const fetchStats = async () => {
    try {
      const { data } = await axiosInstance.get("/posts/admin/dashboard/stats");
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      const postsThisWeek = data.latestPosts.filter(
        (p) => new Date(p.createdAt) >= oneWeekAgo
      ).length;

      setStats({ ...data, postsThisWeek });
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch dashboard stats");
    }
  };

  // Fetch admin posts
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get("/posts/admin/dashboard/posts");
      setPosts(data.posts || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    fetchPosts();
  }, []);

  // Top cards data
  const topCards = [
    {
      title: "Create Post",
      value: "",
      icon: <PlusCircle className="w-8 h-8 text-blue-400" />,
      onClick: () => navigate("/admin/create-post"),
      border: "border-blue-500",
      clickable: true,
    },
    {
      title: "Total Posts",
      value: stats.totalPosts,
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      border: "border-cyan-500",
    },
    {
      title: "Posts This Week",
      value: stats.postsThisWeek,
      icon: <Activity className="w-8 h-8 text-purple-400" />,
      border: "border-purple-500",
    },
  ];

  // Edit post
  const handleEdit = (postId) => {
    navigate(`/admin/edit-post/${postId}`);
  };

  // Delete post
  const handleDelete = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await axiosInstance.delete(`/posts/admin/posts/${postId}`);
      setPosts(posts.filter((p) => p._id !== postId));
      toast.success("Post deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to delete post");
    }
  };

  return (
    <div className="p-6 pt-24 bg-gray-900 min-h-screen text-white">
      {/* ================= Top Stats + Create Post Cards ================= */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {topCards.map((card, idx) => (
          <div
            key={idx}
            onClick={card.clickable ? card.onClick : undefined}
            className={`bg-gray-800 rounded-xl p-6 shadow flex flex-col justify-between cursor-pointer hover:bg-gray-700 transition border-l-4 ${card.border} w-64`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">{card.title}</p>
                {card.value !== "" && (
                  <h2 className="text-2xl font-bold">{card.value}</h2>
                )}
              </div>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* ================= Blog Cards ================= */}
      <h2 className="text-xl font-bold mb-4">Your Posts</h2>
      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-400">No posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const snippet = post.content?.[0]?.value
              ? post.content[0].value.split(" ").slice(0, 20).join(" ") + "..."
              : "No content available.";

            const formattedDate = new Date(post.createdAt).toLocaleDateString(
              "en-US",
              { year: "numeric", month: "short", day: "numeric" }
            );

            return (
              <div
                key={post._id}
                className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-cyan-700/30 transition"
              >
                {post.featuredImage && (
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                  />
                )}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-cyan-400 line-clamp-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                      {snippet}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Calendar className="w-4 h-4" />
                      <span>{formattedDate}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      onClick={() => handleEdit(post._id)}
                      className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm"
                    >
                      <Edit className="w-4 h-4" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="flex items-center gap-1 bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm"
                    >
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
