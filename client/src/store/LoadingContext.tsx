import { Spin } from 'antd';
import { createContext, useContext, useState } from 'react';

// ProviderProps
const loadingProps = (
  isLoading = false,
  loading = async (process: Function) => {}
) => {
  return { isLoading, loading };
};

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

  const props = loadingProps(isLoading, loading);

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
