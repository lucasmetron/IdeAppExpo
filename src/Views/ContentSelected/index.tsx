import React, { useContext, useEffect } from "react";

import * as S from "./styles";
import ContentContext from "context/ContentContext";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ContentSelected() {
  const { setContentSelected, contentSelected } = useContext(ContentContext);

  useEffect(() => {
    return () => {
      // setContentSelected(null);
    };
  }, []);
  return (
    <S.container>
      <S.img source={{ uri: contentSelected?.img }} resizeMode="stretch" />
      <S.contentBox>
        <S.iconAndText>
          <MaterialCommunityIcons
            name="format-title"
            size={20}
            color={"white"}
          />
          <S.titleContent numberOfLines={1}>
            {contentSelected?.title}
          </S.titleContent>
        </S.iconAndText>

        <S.iconAndText>
          <FontAwesome name="user" size={20} color={"white"} />
          <S.creator>Criador: {contentSelected?.creator}</S.creator>
        </S.iconAndText>

        <S.line />

        <S.contentText>{contentSelected?.content}</S.contentText>
      </S.contentBox>
    </S.container>
  );
}
