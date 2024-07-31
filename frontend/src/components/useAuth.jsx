import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password, role) => {
    try {
      const response = await axios.post('https://educore.onrender.com/login', { email, password, role });
      if (response.data.status) {
        setUser(response.data.user);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const register = async (name, email, password, role) => {
    try {
      const response = await axios.post('https://educore.onrender.com/register', { name, email, password, role });
      if (response.data.status) {
        setUser(response.data.user);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
