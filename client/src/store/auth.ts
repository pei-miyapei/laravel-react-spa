import React, { useContext } from 'react';

const authStore = () => {
  let accessToken = '';
  let refreshToken = '';

  const getAccessToken = () => accessToken;
  const hasToken = () => accessToken !== '';

  const setToken = (newAccessToken: string, newRefreshToken: string) => {
    accessToken = newAccessToken;
    refreshToken = newRefreshToken;
  };

  return {
    getAccessToken,
    hasToken,
    setToken,
  };
};

export const AuthContext = React.createContext(authStore());
export const useAuthContext = () => useContext(AuthContext);
