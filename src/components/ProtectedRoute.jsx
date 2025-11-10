import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) return <p>Loading...</p>; // optional spinner

  if (!user || !isAdmin) {
    // Not logged in or not admin
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
