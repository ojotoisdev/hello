import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    login("AdminUser", "Admin"); // Log in as Admin
    navigate("/settings"); // Reload Settings page
  };

  if (!user || user.role !== "Admin") {
    return (
      <div>
        <h2>Access Denied</h2>
        <p>Only Admins can access this page.</p>
        <button onClick={handleAdminLogin}>Login as Admin</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Settings</h2>
      <p>Welcome, {user.username}. You have admin access.</p>
    </div>
  );
};

export default Settings;