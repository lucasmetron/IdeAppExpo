import { useContext } from "react";
import { Image, StyleSheet, FlatList, RefreshControl } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import * as S from "./styles";
import CoursesCollegeContext from "context/CoursesCollege";
import { formatDate } from "utils/functions";
import { CoursesCollegeProps } from "types/CoursesCollegeProps";
import { useNavigation } from "@react-navigation/native";
import { stacksCollege } from "Router/routes";
import { getCourses } from "Views/College/req";

export default function CoursesCollegeAvaliable() {
  const {
    courserCollege,
    setCourseSelected,
    isLoadCourses,
    setIsLoadCourses,
    setCoursesCollege,
  } = useContext(CoursesCollegeContext);

  const navigation: any = useNavigation();

  function returnCourse(course: CoursesCollegeProps) {
    return (
      <S.conteinerItemCourseCollege
        onPress={() => {
          navigation.navigate(stacksCollege.registrationCollege);
          setCourseSelected(course);
        }}
      >
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

  async function refreshList() {
    setIsLoadCourses(true);
    await getCourses(setCoursesCollege);
    setIsLoadCourses(false);
  }

  return (
    <S.container>
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
            refreshControl={
              <RefreshControl
                refreshing={isLoadCourses}
                onRefresh={refreshList}
              />
            }
          />
        </>
      )}
    </S.container>
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
