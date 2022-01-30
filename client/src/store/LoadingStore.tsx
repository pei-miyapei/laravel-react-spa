import { Spin } from 'antd';
import { createContext, useContext, useState } from 'react';

export class LoadingState {
  constructor(public loading = async (process: Function) => {}) {}
}
const LoadingContext = createContext(new LoadingState());

export const LoadingProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const loadingState = () => {
    const loading = async (process: Function) => {
      setIsLoading(true);
      await process();
      setIsLoading(false);
    };

    return new LoadingState(loading);
  };

  return (
    <LoadingContext.Provider value={loadingState()}>
      <Spin spinning={isLoading} size='large'>
        {children}
      </Spin>
    </LoadingContext.Provider>
  );
};

// Consumer
export const useLoadingContext = (): LoadingState => useContext(LoadingContext);
