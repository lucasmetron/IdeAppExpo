import { useContext, useEffect } from "react";
import { Text, Image } from "react-native";

import * as S from "./styles";
import CoursesCollegeContext from "context/CoursesCollege";
import { ScrollView } from "react-native-gesture-handler";

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
      <S.Scroll>
        <S.imgCourseContainer>
          <S.imgCourse source={{ uri: courseSelected?.imgUrl || "" }} />
        </S.imgCourseContainer>

        <S.infosContainer>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
          <Text>{courseSelected?.nome_curso || "Nome do curso"}</Text>
        </S.infosContainer>
      </S.Scroll>

      <S.containerBtn>
        <S.btnRegister>
          <S.btnText>Matricular</S.btnText>
        </S.btnRegister>
      </S.containerBtn>
    </S.container>
  );
}
