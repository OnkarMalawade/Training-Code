import useAuthStore from "./authStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
    const { token } = useAuthStore();
    return token ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
