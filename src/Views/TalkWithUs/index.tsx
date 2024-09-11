import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import Toast from "react-native-toast-message";

import * as S from "./styles";
import { FormTalkWithUsProps } from "types/FormTalkWithUs";

const initialStateDataForm: FormTalkWithUsProps = {
  subject: "",
  message: "",
};

export default function TalkWithUs() {
  const [dataForm, setDataForm] = useState(initialStateDataForm);

  function canSave() {
    if (dataForm.subject !== "" && dataForm.message !== "") {
      return true;
    } else {
      return false;
    }
  }

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "Atenção",
      text2: "Preenchar todos os campos.",
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Define o comportamento para iOS e Android
      keyboardVerticalOffset={Platform.OS === "ios" ? 130 : 0}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
      >
        <S.container>
          <S.textInput
            value={dataForm.subject}
            onChangeText={(newText) => {
              setDataForm((item) => ({ ...item, subject: newText }));
            }}
            placeholder="Nome"
            placeholderTextColor="white"
            returnKeyType="done"
          />

          <S.textArea
            value={dataForm.message}
            onChangeText={(newText) => {
              setDataForm((item) => ({ ...item, message: newText }));
            }}
            placeholder="Mensagem"
            placeholderTextColor="white"
            returnKeyType="done"
            multiline={true} // Permite múltiplas linhas
            numberOfLines={4} // Número inicial de linhas visíveis
          />

          <S.btnContainer>
            <S.containerBtn>
              <S.btnRegister
                canSave={canSave()}
                onPress={() => {
                  if (canSave()) {
                    console.warn("salvando");
                  } else {
                    showToast();
                  }
                }}
              >
                <S.btnText>Confirmar</S.btnText>
              </S.btnRegister>
            </S.containerBtn>
          </S.btnContainer>
        </S.container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
