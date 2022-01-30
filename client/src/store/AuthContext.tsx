import { createContext, useContext, useState } from 'react';

export class AuthTokens {
  constructor(public accessToken = '', public refreshToken = '') {}
}

// ProviderProps
export class AuthProps {
  constructor(
    public tokens = new AuthTokens(),
    public handleSetTokens = (value: AuthTokens) => {}
  ) {}

  public hasToken = () => this.tokens.accessToken !== '';
}

// Context
let AuthContext = createContext(new AuthProps());

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
  const handleSetTokens = (value: AuthTokens) => {
    setTokens({ ...tokens, ...value });
  };
  const authProps = new AuthProps(tokens, handleSetTokens);

  return (
    <AuthContext.Provider value={authProps}>{children}</AuthContext.Provider>
  );
};

// Consumer
export const useAuthContext = () => useContext(AuthContext);
