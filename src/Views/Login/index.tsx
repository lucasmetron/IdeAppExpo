import React, { useState } from "react";
import { Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

export default function Login() {
  const [dataForm, setDataForm] = useState({ email: "", password: "" });

  const navigation = useNavigation();
  return (
    <S.container
      source={require("../../assets/loginImage.png")}
      resizeMode="cover"
    >
      <S.logoBox>
        <S.image source={require("../../assets/logoBranca.png")} />

        <S.titleChurch>Igreja do Evangelho</S.titleChurch>
      </S.logoBox>

      <S.input
        placeholder="E-mail"
        value={dataForm.email}
        keyboardType="email-address"
        autoFocus
        onChangeText={(text) => {
          setDataForm((obj) => ({ ...obj, email: text }));
        }}
      />

      <S.input
        placeholder="Senha"
        secureTextEntry
        value={dataForm.password}
        onChangeText={(text) => {
          setDataForm((obj) => ({ ...obj, password: text }));
        }}
      />
      <Button title="voltar" onPress={() => navigation.goBack()} />
    </S.container>
  );
}
