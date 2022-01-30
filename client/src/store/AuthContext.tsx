import { createContext, useContext, useState } from 'react';

class AuthTokens {
  constructor(public accessToken = '', public refreshToken = '') {}
}

// ProviderProps
const authProps = (
  tokens = new AuthTokens(),
  handleSetTokens = (accessToken = '', refreshToken = '') => {}
) => {
  const hasToken = () => tokens.accessToken !== '';

  return { tokens, handleSetTokens, hasToken };
};
export type AuthProps = ReturnType<typeof authProps>;

// Context
let AuthContext = createContext(authProps());

// Provider
export const AuthProvider = ({ children }: any) => {
  /*
    @note
      ・状態の変更で再描画が発生することを考えると
      　同じタイミングで更新するものは1つのStateにしたほうがいいと考えられる
      ・useStateを使わない場合、トークンが書き換わっても再描画されない
      　（例えば意図的に空にした場合でも、画面が表示され続けてしまう）
  */
  const [tokens, setTokens] = useState(new AuthTokens());
  const handleSetTokens = (accessToken = '', refreshToken = '') => {
    setTokens({ ...tokens, ...new AuthTokens(accessToken, refreshToken) });
  };
  const props = authProps(tokens, handleSetTokens);

  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>;
};

// Consumer
export const useAuthContext = () => useContext(AuthContext);
