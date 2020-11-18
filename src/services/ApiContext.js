import { createContext, useContext } from 'react';

const ApiContext = createContext();

export const useApi = () => {
  return useContext(ApiContext);
}

const ApiProvider = ({ api, children }) => {
  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiProvider;