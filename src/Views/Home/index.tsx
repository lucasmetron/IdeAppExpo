/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import { stacksMain } from "Router/routes";

import * as S from "./styles";

export default function Home() {
  const navigation: any = useNavigation();

  return (
    <S.container>
      <Text>Home</Text>
      <Button
        title="teste dentro da tab"
        onPress={() => navigation.navigate("stacksHome-test")}
      />

      <Button
        title="teste fora das tabs"
        onPress={() => navigation.navigate("stacksMain-test")}
      />

      <Button
        title="login"
        onPress={() => navigation.navigate(stacksMain.login)}
      />
    </S.container>
  );
}
