import React, { useState, useContext } from 'react'
import useFetch from './useFetch';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [query, setQuery] = useState('batman');
  const { data: movies, isLoading, error } = useFetch(`&s=${query}`)

  return <AppContext.Provider
    value={
      {
        movies,
        error,
        isLoading,
        query,
        setQuery
      }
    }>
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
