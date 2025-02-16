import { store } from '@/redux/store';
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

function ProtectedRoute ({ children }: ProtectedRouteProps) {
  const { token } = useSelector((state: ReturnType<typeof store.getState>) => state?.auth);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;