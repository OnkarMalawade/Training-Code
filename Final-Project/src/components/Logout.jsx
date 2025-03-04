import { useNavigate } from "react-router-dom";
import useAuthStore from "../auth/authStore";

const LogoutButton = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
