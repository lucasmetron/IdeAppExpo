import { useContext, useEffect } from "react";
import { Text } from "react-native";

import * as S from "./styles";
import CoursesCollegeContext from "context/CoursesCollege";

export default function RegistrationCollege() {
  const { courseSelected, setCourseSelected } = useContext(
    CoursesCollegeContext
  );

  useEffect(() => {
    return () => {
      setCourseSelected(null);
    };
  }, []);
  return (
    <S.container>
      <Text>{courseSelected?.nome_curso}</Text>
    </S.container>
  );
}
