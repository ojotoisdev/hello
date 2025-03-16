import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.username} ({user.role})</span>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>

          {/* Only show Settings if user is an Admin */}
          {user.role === "Admin" && <Link to="/settings">Settings</Link>}

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;