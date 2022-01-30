import { createContext, useContext, useState } from 'react';

export class AuthState {
  constructor(
    public auth = { accessToken: '', refreshToken: '' },
    public handleSetAuth = (value: object) => {},
    public hasToken = (): boolean => false
  ) {}
}
const AuthContext = createContext(new AuthState());

export const AuthProvider = ({ children }: any) => {
  const authState = () => {
    // @note 状態の変更で再描画が発生することを考えると
    // 同じタイミングで更新するものは1つのStateにしたほうがいいと考えられる
    const [auth, setAuth] = useState({
      accessToken: '',
      refreshToken: '',
    });
    const handleSetAuth = (value: object) => {
      setAuth({ ...auth, ...value });
    };
    const hasToken = () => auth.accessToken !== '';

    return new AuthState(auth, handleSetAuth, hasToken);
  };

  return (
    <AuthContext.Provider value={authState()}>{children}</AuthContext.Provider>
  );
};

// Consumer
export const useAuthContext = (): AuthState => useContext(AuthContext);
