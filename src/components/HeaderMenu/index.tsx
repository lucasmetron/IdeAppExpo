/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity } from "react-native";

import * as S from "./styles";
import { RouteProps } from "types/RouteProps";
interface HeaderMenuProps {
  route: RouteProps;
}

export default function HeaderMenu({ route }: HeaderMenuProps) {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  console.log("✌️route --->", route);
  return (
    <S.container>
      <S.image source={require("../../assets/logoBranca.png")} />
      <S.titleChurch>Igreja do Evangelho</S.titleChurch>

      <S.btnLogin
        onPress={() => {
          setIsOpenModalLogin((value) => !value);
        }}
      >
        <S.textBtnLogin>LOGIN</S.textBtnLogin>
      </S.btnLogin>

      <Modal visible={isOpenModalLogin} animationType="slide">
        <Text>Teste</Text>
        <TouchableOpacity
          onPress={() => {
            setIsOpenModalLogin(false);
          }}
        >
          <Text>fechar</Text>
        </TouchableOpacity>
      </Modal>
    </S.container>
  );
}
