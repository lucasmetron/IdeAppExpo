import { useContext } from "react";
import { Image, StyleSheet, FlatList } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import * as S from "./styles";
import CoursesCollegeContext from "context/CoursesCollege";
import { formatDate } from "utils/functions";
import { CoursesCollegeProps } from "types/CoursesCollegeProps";

export default function CoursesCollegeAvaliable() {
  const { courserCollege } = useContext(CoursesCollegeContext);

  function returnCourse(course: CoursesCollegeProps) {
    return (
      <S.conteinerItemCourseCollege>
        <S.imgBox>
          <Image source={{ uri: course.imgUrl }} style={styles.img} />
        </S.imgBox>

        <S.infos>
          <S.initialDate numberOfLines={1}>
            {formatDate(course?.data_inicio)}
          </S.initialDate>
          <S.nameCourse numberOfLines={3}>{course?.nome_curso}</S.nameCourse>
        </S.infos>
      </S.conteinerItemCourseCollege>
    );
  }

  return (
    <S.loadContainer>
      {courserCollege.length === 0 ? (
        <S.noCoursesConteiner>
          <S.noCoursesText>Não há cursos disponíveis</S.noCoursesText>
        </S.noCoursesConteiner>
      ) : (
        <>
          <S.titleCourses>Cursos disponíveis</S.titleCourses>

          <FlatList
            style={styles.list}
            data={courserCollege}
            renderItem={({ item }) => returnCourse(item)}
            keyExtractor={(i) => i.id_curso.toString()}
          />
        </>
      )}
    </S.loadContainer>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: RFPercentage(13),
    borderRadius: 5,
  },

  list: {
    width: "100%",
  },
});
