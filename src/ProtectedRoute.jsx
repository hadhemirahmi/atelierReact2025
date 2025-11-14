import { useNavigate } from "react-router";
function ProtectedRoute({ isAuthenticated, children }) {
    const navigate = useNavigate();
    if (!isAuthenticated) {
        navigate("/login");
    }
    return children;
}
export default ProtectedRoute;