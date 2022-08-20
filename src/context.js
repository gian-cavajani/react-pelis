import React, { useState, useContext, useEffect } from 'react';
// make sure to use https
import useFetch from './useFetch';
export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=970a3edc`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman');
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
