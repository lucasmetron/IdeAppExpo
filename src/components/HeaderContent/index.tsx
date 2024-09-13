import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIconsfrom from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { RFPercentage } from "react-native-responsive-fontsize";

import * as S from "./styles";
import ContentContext from "context/ContentContext";
import { color } from "styles/pallete";

export default function HeaderContent() {
  const { contentSelected } = useContext(ContentContext);
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

      <S.title numberOfLines={1}>
        {contentSelected?.title || "Contéudo"}
      </S.title>
    </S.container>
  );
}
