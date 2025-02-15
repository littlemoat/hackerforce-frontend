import { createContext, useContext, useEffect, useState } from "react";

// Define the context type
interface AuthContextType {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;

  isAcceptedCookies: boolean;
  acceptCookie: () => void;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isAcceptedCookies, setAcceptedCookies] = useState<boolean>(false);

  // Load login state from localStorage when the app starts
  useEffect(() => {
    const storedLoginState = localStorage.getItem("logged") === "true";
    const storedCookieState = localStorage.getItem("cookie") === "true";
    setAcceptedCookies(storedCookieState);
    setLoggedIn(storedLoginState);
  }, []);

  // Function to log in
  const login = () => {
    localStorage.setItem("logged", "true");
    setLoggedIn(true);
  };

  // Function to log out
  const logout = () => {
    localStorage.removeItem("logged");
    setLoggedIn(false);
  };

  // Function to log out
  const acceptCookie = () => {
    localStorage.setItem("cookie", "true");
    setAcceptedCookies(true);
  };

  return (
    <AuthContext.Provider
      value={{ loggedIn, login, logout, isAcceptedCookies, acceptCookie }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
