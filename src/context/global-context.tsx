"use client";
import React, { useState } from 'react';

interface IGlobalContextProps {
  quotesJSON: {};
  setQuotesJSON: (quotes: {}) => void;

}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  quotesJSON: {},
  setQuotesJSON: () => {},
  
});

export const GlobalContextProvider = ( { children, initialQuotes = {}}: { children: React.ReactNode, initialQuotes?:{}  }) => {
  const [quotesJSON, setQuotesJSON] = useState(initialQuotes);

  return (
    <GlobalContext.Provider
      value={{
        quotesJSON: quotesJSON,
        setQuotesJSON: setQuotesJSON,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};