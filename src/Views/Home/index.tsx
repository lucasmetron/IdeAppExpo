/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Modal, SafeAreaView, Text } from "react-native";
import { stacksMain } from "Router/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import * as S from "./styles";

export default function Home() {
  const navigation: any = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const insets = useSafeAreaInsets();
  console.log("insets: ", insets);

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

      <Button title="OpenModal" onPress={() => setIsOpen(true)} />

      <Modal visible={isOpen} animationType="slide">
        <SafeAreaView style={{ marginTop: insets.top }}>
          <Text>teste</Text>
          <Button title="fechar" onPress={() => setIsOpen(false)} />
        </SafeAreaView>
      </Modal>
    </S.container>
  );
}
