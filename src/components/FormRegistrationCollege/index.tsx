import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    return () => {
      setDataForm(initialStateDataForm);
    };
  }, []);

  return (
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
          keyboardType="name-phone-pad"
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
        <S.btnRegister onPress={() => {}}>
          <S.btnText>Confirmar</S.btnText>
        </S.btnRegister>
      </S.containerBtn>
    </S.container>
  );
}
