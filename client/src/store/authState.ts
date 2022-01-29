import React, { useContext } from 'react';

const authState = () => {
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

export type authState = ReturnType<typeof authState>;
const AuthContext = React.createContext(authState());
export const useAuthContext = (): authState => useContext(AuthContext);
