import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Toast from "react-native-toast-message";

import * as S from "./styles";
import { FormRegistrationCollegeProps } from "types/FormRegistrationCollegeProps";

const initialStateDataForm: FormRegistrationCollegeProps = {
  name: "",
  cel: "",
  cpf: "",
  email: "",
  id_curso: 99999,
};

export default function FormRegistrationCollege() {
  const [dataForm, setDataForm] =
    useState<FormRegistrationCollegeProps>(initialStateDataForm);

  function canSave() {
    if (
      dataForm.name !== "" &&
      dataForm.cel !== "" &&
      dataForm.cpf !== "" &&
      dataForm.email !== ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "Atenção",
      text2:
        "Para efetivar a matrícula, preencha todos os campos do formulário.",
    });
  };

  useEffect(() => {
    return () => {
      setDataForm(initialStateDataForm);
    };
  }, []);

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
        {/* Scrollview para tornar o conteúdo rolável */}
        <S.container>
          <S.containerInputs>
            <S.textInput
              value={dataForm.name}
              onChangeText={(newText) => {
                setDataForm((item) => ({ ...item, name: newText }));
              }}
              keyboardType="default"
              placeholder="Nome"
              placeholderTextColor="white"
              returnKeyType="done"
            />

            <S.textInput
              value={dataForm.email}
              onChangeText={(newText) => {
                setDataForm((item) => ({ ...item, email: newText }));
              }}
              keyboardType="email-address"
              placeholder="E-mail"
              placeholderTextColor="white"
              returnKeyType="done"
            />

            <S.textInput
              value={dataForm.cel}
              onChangeText={(newText) => {
                setDataForm((item) => ({ ...item, cel: newText }));
              }}
              keyboardType="numeric"
              placeholder="Celular DD + Número. Ex:61984675545"
              placeholderTextColor="white"
              returnKeyType="done"
            />

            <S.textInput
              value={dataForm.cpf}
              onChangeText={(newText) => {
                setDataForm((item) => ({ ...item, cpf: newText }));
              }}
              keyboardType="numeric"
              placeholder="CPF somente números. Ex:0123456789"
              placeholderTextColor="white"
              returnKeyType="done"
            />
          </S.containerInputs>

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

          <Toast position="bottom" bottomOffset={70} />
        </S.container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
