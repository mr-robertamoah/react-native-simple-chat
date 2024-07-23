import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(false);
    }, 3000);
  });

  async function login({ email, password }) {
    try {
        
    } catch (error) {
        
    }
  }

  async function logout() {
    try {
        
    } catch (error) {
        
    }
  }

  async function register({ email, password, username, profileUrl }) {
    try {
        
    } catch (error) {
        
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, register, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const values = useContext(AuthContext);

  if (!values)
    throw Error("useContext must be wrapped inside a AuthContextProvider");

  return values;
};
