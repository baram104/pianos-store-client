import { Navigate } from "react-router-dom";
const Protector = ({ isLoggedIn, children, isAlreadyLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protector;
