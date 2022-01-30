import PKCE from 'js-pkce';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../store/Auth';

export const AuthorizationCallback = () => {
  const pkce = new PKCE({
    client_id: '1',
    redirect_uri: location.origin + '/auth/callback',
    token_endpoint: 'http://localhost/server/oauth/token',
  });
  const { handleSetAuth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    pkce.exchangeForAccessToken(document.location.href).then((response) => {
      handleSetAuth({
        accessToken: response.access_token,
        refreshToken: response.refresh_token,
      });
      // 認証後に遷移するページへ
      navigate('/', { replace: true });
    });
  }, []);

  return <></>;
};
