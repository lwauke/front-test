import { useState } from "react";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

function ProtectedRoute ({ children }: ProtectedRouteProps) {
  const [user] = useState(null)

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;