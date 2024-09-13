import React, { useContext, useEffect } from "react";
import { Text } from "react-native";

import * as S from "./styles";
import ContentContext from "context/ContentContext";

export default function ContentSelected() {
  const { setContentSelected, contentSelected } = useContext(ContentContext);

  useEffect(() => {
    return () => {
      setContentSelected(null);
    };
  }, []);
  return (
    <S.container>
      <Text>{contentSelected?.content}</Text>
    </S.container>
  );
}
