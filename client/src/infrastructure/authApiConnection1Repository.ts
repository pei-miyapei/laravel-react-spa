import { ApiConnection1Repository } from './apiConnection1Repository';
import type { AxiosRequestConfig } from 'axios';
import type { AuthProps } from '../store/AuthContext';

export abstract class AuthApiConnection1Repository extends ApiConnection1Repository {
  constructor(authProps: AuthProps) {
    super();
    this.client.interceptors.request.use((config: AxiosRequestConfig) => {
      if (!config.headers) config.headers = {};
      config.headers.Authorization = `Bearer ${authProps.tokens.accessToken}`;
      return config;
    });
  }
}
