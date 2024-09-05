import React, { useContext, useEffect } from "react";

import * as S from "./styles";
import { getCourses } from "./req";
import CoursesCollegeContext from "context/CoursesCollege";
import LoadScreen from "components/LoadScreen";
import CoursesCollegeAvaliable from "components/CoursesCollegeAvaliable";

export default function College() {
  const { setCoursesCollege, isLoadCourses, setIsLoadCourses } = useContext(
    CoursesCollegeContext
  );

  useEffect(() => {
    (async () => {
      setIsLoadCourses(true);
      await getCourses(setCoursesCollege);
      setIsLoadCourses(false);
    })();
  }, []);

  return (
    <S.container>
      {isLoadCourses ? (
        <LoadScreen text="Carregando cursos" />
      ) : (
        <>
          <CoursesCollegeAvaliable />
        </>
      )}
    </S.container>
  );
}
