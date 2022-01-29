import React, { useContext } from 'react';

const authState = () => {
  let accessToken = '';
  let refreshToken = '';

  const getAccessToken = () => accessToken;
  const hasToken = () => accessToken !== '';

  const setAccessToken = (newAccessToken: string) => {
    accessToken = newAccessToken;
  };
  const setRefreshToken = (newRefreshToken: string) => {
    refreshToken = newRefreshToken;
  };

  return {
    getAccessToken,
    hasToken,
    setAccessToken,
    setRefreshToken,
  };
};

export type authState = ReturnType<typeof authState>;
const AuthContext = React.createContext(authState());
export const useAuthContext = (): authState => useContext(AuthContext);
