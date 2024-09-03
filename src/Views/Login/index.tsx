import React from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

export default function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <S.container>
        <Text>Login</Text>
        <Button title="voltar" onPress={() => navigation.goBack()} />
      </S.container>
    </SafeAreaView>
  );
}
