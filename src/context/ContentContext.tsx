import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { ContentProps } from "types/ContentProps";

interface ContentContextType {
  contentList: ContentProps[];
  setContentList: Dispatch<SetStateAction<ContentProps[]>>;
  isLoadContent: boolean;
  setIsLoadContent: Dispatch<SetStateAction<boolean>>;
  contentSelected: ContentProps | null;
  setContentSelected: Dispatch<SetStateAction<ContentProps | null>>;
}

const initialContentList: ContentProps[] = [];

const ContentContext = createContext<ContentContextType>({
  contentList: initialContentList,
  setContentList: () => {},
  isLoadContent: false,
  setIsLoadContent: () => {},
  contentSelected: null,
  setContentSelected: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function ContentProvider({ children }: ContextProps) {
  const [contentList, setContentList] =
    useState<ContentProps[]>(initialContentList);
  const [contentSelected, setContentSelected] = useState<null | ContentProps>(
    null
  );
  const [isLoadContent, setIsLoadContent] = useState(false);

  return (
    <ContentContext.Provider
      value={{
        contentList,
        setContentList,
        contentSelected,
        isLoadContent,
        setContentSelected,
        setIsLoadContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export default ContentContext;
