import { ApiConnection1Repository } from './apiConnection1Repository';
import type { AxiosRequestConfig } from 'axios';
import { AuthState } from '../store/authState';

export abstract class AuthApiConnection1Repository extends ApiConnection1Repository {
  constructor(authState: AuthState) {
    super();
    this.client.interceptors.request.use((config: AxiosRequestConfig) => {
      if (!config.headers) config.headers = {};
      config.headers.Authorization = `Bearer ${authState.auth.accessToken}`;
      return config;
    });
  }
}
