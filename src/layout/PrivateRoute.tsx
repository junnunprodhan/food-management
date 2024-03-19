import { ReactNode } from "react";
import { currentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(currentUser);
  if (!user) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
