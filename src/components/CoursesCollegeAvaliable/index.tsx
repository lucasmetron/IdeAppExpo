import { useContext } from "react";
import { Text } from "react-native";

import * as S from "./styles";
import CoursesCollegeContext from "context/CoursesCollege";

export default function CoursesCollegeAvaliable() {
  const { courserCollege } = useContext(CoursesCollegeContext);

  return (
    <S.loadContainer>
      {courserCollege.length === 0 ? (
        <S.noCoursesConteiner>
          <S.noCoursesText>Não há cursos disponíveis</S.noCoursesText>
        </S.noCoursesConteiner>
      ) : (
        <>
          <S.titleCourses>Cursos disponíveis</S.titleCourses>
        </>
      )}
    </S.loadContainer>
  );
}
