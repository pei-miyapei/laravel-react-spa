import { Spin } from 'antd';
import { createContext, useContext, useState } from 'react';

// ProviderProps
export class LoadingProps {
  constructor(public loading = async (process: Function) => {}) {}
}

// Context
const LoadingContext = createContext(new LoadingProps());

// Provider
export const LoadingProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const loading = async (process: Function) => {
    setIsLoading(true);
    await process();
    setIsLoading(false);
  };

  const loadingProps = new LoadingProps(loading);

  return (
    <LoadingContext.Provider value={loadingProps}>
      <Spin spinning={isLoading} size='large'>
        {children}
      </Spin>
    </LoadingContext.Provider>
  );
};

// Consumer
export const useLoadingContext = () => useContext(LoadingContext);
