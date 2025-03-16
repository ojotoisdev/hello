import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"Admin" | "Editor" | "Viewer" | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !role) {
      alert("Please enter your name and select a role.");
      return;
    }
    login(username, role);
    navigate("/dashboard"); // Redirect to Dashboard after login
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Select Role:
          <select value={role} onChange={(e) => setRole(e.target.value as "Admin" | "Editor" | "Viewer")} required>
            <option value="">-- Choose Role --</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;