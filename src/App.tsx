import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";  // Import Navbar
import Login from "./Login";
import "./index.css";

import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";
import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    
    <AuthProvider>
      <Router>
        <Navbar /> {/* ✅ Add Navbar here */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;