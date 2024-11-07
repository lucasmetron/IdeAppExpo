import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

import * as S from "./styles";
import { color } from "styles/pallete";

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

      <S.enterBtn backColor={color.interface.darkgray3}>
        <S.txtBtns colorTxt={color.interface.white}>Entrar</S.txtBtns>
      </S.enterBtn>

      <S.enterBtn backColor="transparent">
        <S.txtBtns colorTxt={color.interface.white}>Esqueci a senha</S.txtBtns>
      </S.enterBtn>

      <S.enterBtn backColor={color.interface.white}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <AntDesign name="apple1" color={color.interface.black} size={15} />
          <S.txtBtns colorTxt={color.interface.black}>
            Continuar com a Apple
          </S.txtBtns>
        </View>
      </S.enterBtn>

      <S.backBtn onPress={() => navigation.goBack()}>
        <AntDesign name="close" color={color.interface.white} size={25} />
      </S.backBtn>

      <S.notYetRegister>
        <S.notYetRegisterTxt>
          Ainda não tem cadastro? Cadastre-se
        </S.notYetRegisterTxt>
      </S.notYetRegister>
    </S.container>
  );
}
