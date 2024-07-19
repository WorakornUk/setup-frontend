import React, { createContext, useState, useEffect } from 'react';
import authApi from '../apis/auth'; 
import { setAccessToken, getAccessToken, removeAccessToken } from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const res = await authApi.getProfile();
            // console.log(res)
          setUser(res.data.user);
            // console.log(user)
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

    const login = async credentials => {
    const res = await authApi.login(credentials);

    setAccessToken(res.data.accessToken);

    const profile = await authApi.getProfile();

    setUser(profile.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, user, loading }} >
      {children}
    </AuthContext.Provider>
  );
}
