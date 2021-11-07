import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";

export const RequireAuth = ({ children }) => {
  let location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
