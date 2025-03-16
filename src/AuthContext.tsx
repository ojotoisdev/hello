import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  username: string;
  role: "Admin" | "Editor" | "Viewer";
}

interface AuthContextType {
  user: User | null;
  login: (username: string, role: User["role"]) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, role: User["role"]) => {
    console.log("User logged in:", { username, role });
    setUser({ username, role });
  };
  
  const logout = () => {
    console.log("User logged out");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
