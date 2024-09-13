import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIconsfrom from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { RFPercentage } from "react-native-responsive-fontsize";

import * as S from "./styles";
import CoursesCollegeContext from "context/CoursesCollege";
import { RouteProps } from "types/RouteProps";
import { color } from "styles/pallete";

export default function HeaderRegistrationCollege() {
  const { courseSelected } = useContext(CoursesCollegeContext);
  const navigator = useNavigation();

  return (
    <S.container>
      <S.btnGoBack onPress={() => navigator.goBack()}>
        <MaterialIconsfrom
          name="arrow-back-ios"
          color={color.interface.white}
          size={RFPercentage(2.5)}
        />
      </S.btnGoBack>

      <S.title>{courseSelected?.nome_curso || "Curso college"}</S.title>

      <S.btnShare>
        <EvilIcons
          name="share-google"
          color={color.interface.white}
          size={RFPercentage(4)}
        />
      </S.btnShare>
    </S.container>
  );
}
