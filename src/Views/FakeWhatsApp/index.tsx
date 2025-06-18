import React from "react";
import { Button, Text } from "react-native";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function FakeWhatsApp() {
  const navigation = useNavigation();

  return (
    <S.container>
      <Text>FakeWhatsApp</Text>
      <Button title="voltar" onPress={() => navigation.goBack()} />
    </S.container>
  );
}
