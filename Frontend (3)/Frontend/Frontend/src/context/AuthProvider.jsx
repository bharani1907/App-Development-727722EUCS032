// src/AuthProvider.js
import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(() => {
    // Check if there's an authenticated user in localStorage
    const user = localStorage.getItem("Users");
    return user ? JSON.parse(user) : null;
  });

  useEffect(() => {
    // If there's no user, clear the authentication state
    if (!authUser) {
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  const login = (user) => {
    localStorage.setItem("Users", JSON.stringify(user));
    setAuthUser(user);
  };

  const logout = () => {
    localStorage.removeItem("Users");
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
