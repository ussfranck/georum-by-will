import { log } from 'console';
import React, { createContext, useContext, useState, ReactNode, createRef } from 'react';

interface SearchContextProps {
  foundItem: string | null;
  retraceFileFound: ( tem: string | null ) => void;
  updateTableRef: ( tableRef: React.RefObject<HTMLTableElement> ) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
};

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [foundItem, setFoundItem] = useState<string | null>(null);
  const [tableRef, setTableRef] = useState<React.RefObject<HTMLTableElement>>(createRef()); // init ref tab.

  const retraceFileFound = (item: string | null) => {
    setFoundItem(item);
    if (item && tableRef.current) {
      console.log(tableRef.current);
      const foundElement = tableRef.current;
      console.log("elementor: " + foundElement);
      if (foundElement) {
        foundElement.scrollIntoView({behavior: "smooth", block: "center"});
      }
    }
  };

  const updateTableRef = (newTableRef: React.RefObject<HTMLTableElement>) => {
    setTableRef(newTableRef);
  }

  const context : SearchContextProps = {
    foundItem,
    retraceFileFound,
    updateTableRef
  };

  return (
    <SearchContext.Provider value={context}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};