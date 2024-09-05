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
  courseSelected: CoursesCollegeProps | null;
  setCourseSelected: Dispatch<SetStateAction<CoursesCollegeProps | null>>;
}

const initialState: CoursesCollegeProps[] = [];

const CoursesCollegeContext = createContext<CoursesCollegeContextType>({
  courserCollege: initialState,
  setCoursesCollege: () => {},
  isLoadCourses: false,
  setIsLoadCourses: () => {},
  courseSelected: null,
  setCourseSelected: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function CoursesCollegeProvider({ children }: ContextProps) {
  const [courserCollege, setCoursesCollege] =
    useState<CoursesCollegeProps[]>(initialState);
  const [courseSelected, setCourseSelected] =
    useState<null | CoursesCollegeProps>(null);
  const [isLoadCourses, setIsLoadCourses] = useState(false);

  return (
    <CoursesCollegeContext.Provider
      value={{
        courserCollege,
        setCoursesCollege,
        setIsLoadCourses,
        isLoadCourses,
        courseSelected,
        setCourseSelected,
      }}
    >
      {children}
    </CoursesCollegeContext.Provider>
  );
}

export default CoursesCollegeContext;
