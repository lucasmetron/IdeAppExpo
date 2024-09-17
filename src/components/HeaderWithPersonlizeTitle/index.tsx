import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIconsfrom from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { RFPercentage } from "react-native-responsive-fontsize";

import * as S from "./styles";
import { color } from "styles/pallete";

interface HeaderWithPersonlizeTitleProps {
  title?: string;
}

export default function HeaderWithPersonlizeTitle({
  title = "IDE",
}: HeaderWithPersonlizeTitleProps) {
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

      <S.title numberOfLines={1}>{title}</S.title>
    </S.container>
  );
}
