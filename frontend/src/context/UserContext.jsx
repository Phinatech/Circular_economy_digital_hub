import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import api from '../utils/api'; // Your API utility

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get(`/users/${currentUser.uid}`);
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser) fetchProfile();
  }, [currentUser]);

  const updateProfile = async (data) => {
    try {
      const response = await api.put(`/users/${currentUser.uid}`, data);
      setUserProfile(response.data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Update failed' };
    }
  };

  const updateAvatar = async (avatarBlob) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatarBlob);
      
      const response = await api.post(`/users/${currentUser.uid}/avatar`, formData);
      setUserProfile(prev => ({ ...prev, avatar: response.data.avatarUrl }));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Avatar upload failed' };
    }
  };

  return (
    <UserContext.Provider value={{ userProfile, loading, updateProfile, updateAvatar }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};