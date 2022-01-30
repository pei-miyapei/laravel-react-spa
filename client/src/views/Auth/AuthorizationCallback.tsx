import PKCE from 'js-pkce';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../store/AuthContext';

export const AuthorizationCallback = () => {
  const pkce = new PKCE({
    client_id: '1',
    redirect_uri: location.origin + '/auth/callback',
    token_endpoint: 'http://localhost/server/oauth/token',
  });
  const { handleSetTokens } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    pkce.exchangeForAccessToken(document.location.href).then((response) => {
      handleSetTokens(response.access_token, response.refresh_token);
      // 認証後に遷移するページへ
      navigate('/', { replace: true });
    });
  }, []);

  return <></>;
};
