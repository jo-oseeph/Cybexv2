import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { Edit, Trash2, PlusCircle, FileText, Activity } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalPosts: 0,
    latestPosts: [],
    postsThisWeek: 0,
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
    }
  };

  const fetchPosts = async () => {
    try {
      const { data } = await axiosInstance.get("/posts/admin/dashboard/posts");
      setPosts(data.posts);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    fetchPosts();
  }, []);

  // Top cards: Create Post, Total Posts, Posts This Week
  const topCards = [
    {
      title: "Create Post",
      value: "",
      icon: <PlusCircle className="w-8 h-8" />,
      onClick: () => navigate("/admin/create-post"),
      border: "border-blue-500",
      clickable: true,
    },
    {
      title: "Total Posts",
      value: stats.totalPosts,
      icon: <FileText className="w-8 h-8" />,
      border: "border-cyan-500",
    },
    {
      title: "Posts This Week",
      value: stats.postsThisWeek,
      icon: <Activity className="w-8 h-8" />,
      border: "border-purple-500",
    },
  ];

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
                {card.value && <h2 className="text-2xl font-bold">{card.value}</h2>}
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
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-gray-800 border-2 border-gray-700 rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              {post.featuredImage && (
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-cyan-400">{post.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {post.content[0]?.value || "No content available."}
                  </p>
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm">
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  <button className="flex items-center gap-1 bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
