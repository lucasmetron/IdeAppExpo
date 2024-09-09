/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { FlatList } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { color } from "styles/pallete";
import { list } from "./listFake";
import { ItemListProps } from "types/ItemMoreProps";

export default function More() {
  const navigator: any = useNavigation();

  function returnItem(value: ItemListProps) {
    return (
      <S.itemMore
        onPress={() => {
          navigator.navigate(value.route);
        }}
      >
        {value.name === "Pedidos de Oração" ? (
          <Ionicons
            name={value.icon}
            size={RFPercentage(2.5)}
            color={color.interface.darkgray3}
          />
        ) : (
          <MaterialIcons
            name={value.icon}
            size={RFPercentage(2.5)}
            color={color.interface.darkgray3}
          />
        )}

        <S.title numberOfLines={1}>{value.name}</S.title>
        <AntDesign
          name="arrowright"
          size={RFPercentage(2.5)}
          color={color.interface.darkgray3}
        />
      </S.itemMore>
    );
  }

  return (
    <S.container>
      <FlatList
        data={list}
        renderItem={({ item }) => returnItem(item)}
        keyExtractor={(i) => i.id}
      />
    </S.container>
  );
}
