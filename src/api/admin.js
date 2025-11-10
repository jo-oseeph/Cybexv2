import axiosInstance from "./axiosInstance";

// Get all posts created by the logged-in admin (with pagination)
export const fetchAdminPosts = async (page = 1, limit = 10) => {
  const res = await axiosInstance.get(`/posts/admin/dashboard/posts?page=${page}&limit=${limit}`);
  return res.data;
};

// Get admin dashboard stats (total posts, latest posts)
export const fetchAdminStats = async () => {
  const res = await axiosInstance.get("/posts/admin/dashboard/stats");
  return res.data;
};

// Delete a post
export const deleteAdminPost = async (postId) => {
  const res = await axiosInstance.delete(`/posts/admin/posts/${postId}`);
  return res.data;
};
