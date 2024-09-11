import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Platform } from "react-native";

import * as S from "./styles";
import ModalComp from "components/ModalComp";
import { color } from "styles/pallete";

interface itemPicker {
  id: number;
  value: string;
}

interface SelectInputProps {
  data: itemPicker[];
}

export default function SelectInput({ data }: SelectInputProps) {
  const [modalIosOpen, setModalIosOpen] = useState(false);
  const [valueSelected, setValueSelected] = useState({ id: 999, value: "" });

  return (
    <S.container>
      {Platform.OS === "ios" && (
        <S.boxIOS>
          <S.textInput
            value={valueSelected.value}
            keyboardType="default"
            placeholder="Área de oração"
            placeholderTextColor="white"
            returnKeyType="done"
            onTouchStart={() => setModalIosOpen(true)}
            editable={false}
          />

          <ModalComp isOpen={modalIosOpen} setIsOpen={setModalIosOpen}>
            <Picker
              selectedValue={valueSelected.value}
              onValueChange={(itemValue, itemIndex) => {
                const itemSelected = data.filter(
                  (item) => item.id === itemIndex
                );
                if (itemSelected.length > 0) {
                  setValueSelected(itemSelected[0]);
                }
              }}
            >
              {data.map((item) => (
                <Picker.Item
                  key={item.id}
                  label={item.value}
                  value={item.value}
                  color={color.interface.white}
                />
              ))}
            </Picker>

            <S.btnConfirm onPress={() => setModalIosOpen(false)}>
              <S.btnText>Confirmar</S.btnText>
            </S.btnConfirm>
          </ModalComp>
        </S.boxIOS>
      )}

      {Platform.OS === "android" && (
        <S.pickerAndroid>
          <Picker
            selectedValue={valueSelected.value}
            onValueChange={(itemValue, itemIndex) => {
              const itemSelected = data.filter((item) => item.id === itemIndex);
              if (itemSelected.length > 0) {
                setValueSelected(itemSelected[0]);
              }
            }}
            style={{ color: color.interface.white }}
            dropdownIconColor={"white"}
          >
            {data.map((item) => (
              <Picker.Item
                key={item.id}
                label={item.value}
                value={item.value}
              />
            ))}
          </Picker>
        </S.pickerAndroid>
      )}
    </S.container>
  );
}
