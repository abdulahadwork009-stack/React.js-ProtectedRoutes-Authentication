import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

const AUTH_KEY = 'isAuthenticated';
const DEMO_CREDENTIALS = {
  email: 'admin@example.com',
  password: 'admin123',
};

const readStoredAuth = () => localStorage.getItem(AUTH_KEY) === 'true';

export function AuthProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(readStoredAuth);

  useEffect(() => {
    const syncAuth = (event) => {
      if (event.key === AUTH_KEY || event.key === null) {
        setIsAuthenticated(readStoredAuth());
      }
    };

    window.addEventListener('storage', syncAuth);
    return () => window.removeEventListener('storage', syncAuth);
  }, []);

  const login = (email, password) => {
    const isValid =
      email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password;

    if (isValid) {
      localStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
    }
    return isValid;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside <AuthProvider>');
  }
  return context;
}