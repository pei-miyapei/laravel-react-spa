import PKCE from 'js-pkce';
import { useAuthContext } from '../../store/auth';

export const AuthGuard = ({ children }: any) => {
  const auth = useAuthContext();

  if (!auth.hasToken()) {
    const pkce = new PKCE({
      client_id: '1',
      redirect_uri: location.origin + '/auth/callback',
      authorization_endpoint: 'http://localhost/server/oauth/authorize',
      requested_scopes: '*',
    });
    location.replace(pkce.authorizeUrl());
  } else {
    return <>{children}</>;
  }
  return <></>;
};
