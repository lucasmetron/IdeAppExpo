import React, { createContext, useState, ReactNode } from "react";
import { NewProps } from "types/NewProps";

interface NewsContextProviderProps {
  data: NewProps | null;
  setData: React.Dispatch<React.SetStateAction<NewProps | null>>;
}

const NewsContextContext = createContext<NewsContextProviderProps>({
  data: null,
  setData: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function NewsContextProvider({ children }: ContextProps) {
  const [data, setData] = useState<NewProps | null>(null);

  return (
    <NewsContextContext.Provider value={{ data, setData }}>
      {children}
    </NewsContextContext.Provider>
  );
}

export default NewsContextContext;
