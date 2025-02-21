import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { store } from "@/redux/store";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const res = useSelector(
    (state: ReturnType<typeof store.getState>) => state?.auth,
  );
  const token = res?.token;

  if (!token) {
    navigate("/login", { replace: true });
  }

  return children;
}

export default ProtectedRoute;
