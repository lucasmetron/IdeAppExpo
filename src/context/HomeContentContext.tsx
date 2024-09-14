import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { ContentProps } from "types/ContentProps";

interface HomeContentContextType {
  isLoadContent: boolean;
  setIsLoadContent: Dispatch<SetStateAction<boolean>>;
  contentSelected: ContentProps | null;
  setContentSelected: Dispatch<SetStateAction<ContentProps | null>>;
}

const initialContentList: ContentProps[] = [];

const HomeContentContext = createContext<HomeContentContextType>({
  isLoadContent: false,
  setIsLoadContent: () => {},
  contentSelected: null,
  setContentSelected: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function HomeContentProvider({ children }: ContextProps) {
  const [contentList, setContentList] =
    useState<ContentProps[]>(initialContentList);
  const [contentSelected, setContentSelected] = useState<null | ContentProps>(
    null
  );
  const [isLoadContent, setIsLoadContent] = useState(false);

  return (
    <HomeContentContext.Provider
      value={{
        contentSelected,
        isLoadContent,
        setContentSelected,
        setIsLoadContent,
      }}
    >
      {children}
    </HomeContentContext.Provider>
  );
}

export default HomeContentContext;
