import { Navigate } from "react-router-dom";
import { useAuth } from "../lib/useAuth";

export default function RequireAuth({ children }) {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-sm font-body text-charcoal">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
