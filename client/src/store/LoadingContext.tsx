import { Spin } from 'antd';
import { createContext, useContext, useState } from 'react';

// ProviderProps
const loadingProps = (loading = async (process: Function) => {}) => {
  return { loading };
};
export type LoadingProps = ReturnType<typeof loadingProps>;

// Context
const LoadingContext = createContext(loadingProps());

// Provider
export const LoadingProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const loading = async (process: Function) => {
    setIsLoading(true);
    await process();
    setIsLoading(false);
  };

  const props = loadingProps(loading);

  return (
    <LoadingContext.Provider value={props}>
      <Spin spinning={isLoading} size='large'>
        {children}
      </Spin>
    </LoadingContext.Provider>
  );
};

// Consumer
export const useLoadingContext = () => useContext(LoadingContext);
