import React, { SetStateAction } from "react";
import { Modal, SafeAreaView, View, Text, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RFPercentage } from "react-native-responsive-fontsize";

import * as S from "./styles";
// import { Container } from './styles';

interface ModalComp {
  children: any;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  title?: string;
  animation?: "slide" | "fade" | "none";
  transparent?: boolean;
}

function ModalComp({
  isOpen,
  setIsOpen,
  title = "",
  animation = "slide",
  transparent = false,
  children,
}: ModalComp) {
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={isOpen} animationType={animation} transparent={transparent}>
      <S.container
        style={{ paddingTop: Platform.OS === "android" ? 0 : insets.top }}
      >
        <S.btnClose onPress={() => setIsOpen(false)}>
          <AntDesign name="close" size={RFPercentage(4)} color={"white"} />
        </S.btnClose>

        {title !== "" && <S.title>{title}</S.title>}
        <S.containerChild>{children}</S.containerChild>
      </S.container>
    </Modal>
  );
}

export default ModalComp;
