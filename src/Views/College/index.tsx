/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect } from "react";
import { Text, Button } from "react-native";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { getCourses } from "./req";
import CoursesCollegeContext from "context/CoursesCollege";
import LoadScreen from "components/LoadScreen";

export default function College() {
  const navigation: any = useNavigation();

  const { courserCollege, setCoursesCollege, isLoadCourses, setIsLoadCourses } =
    useContext(CoursesCollegeContext);
  console.log("isLoadCourses: ", isLoadCourses);
  console.log("courserCollege: ", courserCollege);

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
        <LoadScreen />
      ) : (
        <>
          <Text>College teste</Text>
          <Button
            title="teste"
            onPress={() => navigation.navigate("stacksCollege-test")}
          />
        </>
      )}
    </S.container>
  );
}
