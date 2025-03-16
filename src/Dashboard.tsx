import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}! You are logged in as a <strong>{user.role}</strong>.</p>

      {user.role === "Admin" && (
        <div>
          <h3>Admin Controls</h3>
          <p>Manage users, settings, and site configurations.</p>
        </div>
      )}

      {user.role === "Editor" && (
        <div>
          <h3>Editor Panel</h3>
          <p>Edit and manage content.</p>
        </div>
      )}

      {user.role === "Viewer" && (
        <div>
          <h3>Read-Only Reports</h3>
          <p>View reports and analytics.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;