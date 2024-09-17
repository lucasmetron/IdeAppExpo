import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import {
  Switch,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import * as S from "./styles";
import { color } from "styles/pallete";
import { FormAskPorPrayProps } from "types/FormAskPorPrayProps";
import SelectInput, { itemPicker } from "components/SelectInput";
import { typesPray } from "./obj";

const initialStateDataForm: FormAskPorPrayProps = {
  name: "",
  tel: "",
  email: "",
  goal: "",
  canContactByWpp: false,
  type: 99999,
};

export default function AskForPray() {
  const [dataForm, setDataForm] = useState(initialStateDataForm);
  const [typeAsk, setTypeAsk] = useState<itemPicker>({ id: 999, value: "" });

  function canSave() {
    if (
      dataForm.name !== "" &&
      dataForm.tel !== "" &&
      dataForm.email !== "" &&
      dataForm.goal !== "" &&
      typeAsk.value !== ""
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
    if (typeAsk.value !== "") {
      setDataForm((itens) => ({ ...itens, type: typeAsk.id }));
    }
  }, [typeAsk]);

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
          <S.inputs>
            <SelectInput data={typesPray} getOptionPicked={setTypeAsk} />
            <S.textInput
              value={dataForm.name}
              onChangeText={(newText) => {
                setDataForm((item) => ({ ...item, name: newText }));
              }}
              keyboardType="default"
              placeholder="Nome completo"
              placeholderTextColor="white"
              returnKeyType="done"
            />

            <S.textInput
              value={dataForm.tel}
              onChangeText={(newText) => {
                setDataForm((item) => ({ ...item, tel: newText }));
              }}
              keyboardType="numeric"
              placeholder="Telefone"
              placeholderTextColor="white"
              returnKeyType="done"
            />

            <S.textInput
              value={dataForm.email}
              onChangeText={(newText) => {
                setDataForm((item) => ({ ...item, email: newText }));
              }}
              keyboardType="default"
              placeholder="Email"
              placeholderTextColor="white"
              returnKeyType="done"
            />

            <S.textArea
              value={dataForm.goal}
              onChangeText={(newText) => {
                setDataForm((item) => ({ ...item, goal: newText }));
              }}
              keyboardType="default"
              placeholder="Motivo da oração"
              placeholderTextColor="white"
              returnKeyType="done"
              multiline={true}
              numberOfLines={4}
            />

            <S.toggleWpp>
              <Switch
                style={styles.switch}
                trackColor={{
                  false: color.interface.backgroundColor,
                  true: color.system.success,
                }}
                thumbColor={
                  dataForm.canContactByWpp
                    ? color.interface.white
                    : color.interface.white
                }
                ios_backgroundColor={color.interface.backgroundColor}
                onValueChange={() => {
                  setDataForm((obj) => ({
                    ...obj,
                    canContactByWpp: !obj.canContactByWpp,
                  }));
                }}
                value={dataForm.canContactByWpp}
              />
              <S.toggleText>Permitir contato via Whatsapp</S.toggleText>
            </S.toggleWpp>
          </S.inputs>

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

const styles = StyleSheet.create({
  switch: {
    transform: [
      { scaleX: Platform.OS === "ios" ? 0.8 : 1.3 },
      { scaleY: Platform.OS === "ios" ? 0.8 : 1.3 },
    ], // Ajusta o tamanho do Switch
  },
});
