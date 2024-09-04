import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { CoursesCollegeProps } from "types/CoursesCollegeProps";

interface CoursesCollegeContextType {
  courserCollege: CoursesCollegeProps[];
  setCoursesCollege: Dispatch<SetStateAction<CoursesCollegeProps[]>>;
  isLoadCourses: boolean;
  setIsLoadCourses: Dispatch<SetStateAction<boolean>>;
}

const initialState: CoursesCollegeProps[] = [];

const CoursesCollegeContext = createContext<CoursesCollegeContextType>({
  courserCollege: initialState,
  setCoursesCollege: () => {},
  isLoadCourses: false,
  setIsLoadCourses: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function CoursesCollegeProvider({ children }: ContextProps) {
  const [courserCollege, setCoursesCollege] =
    useState<CoursesCollegeProps[]>(initialState);

  const [isLoadCourses, setIsLoadCourses] = useState(false);

  return (
    <CoursesCollegeContext.Provider
      value={{
        courserCollege,
        setCoursesCollege,
        setIsLoadCourses,
        isLoadCourses,
      }}
    >
      {children}
    </CoursesCollegeContext.Provider>
  );
}

export default CoursesCollegeContext;
