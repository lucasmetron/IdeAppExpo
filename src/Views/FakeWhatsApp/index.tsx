import React from "react";
import { Button, FlatList, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { RFPercentage } from "react-native-responsive-fontsize";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import PersonOnListChat from "components/PersonOnListChat";
import { chatMessages } from "./fakeList";

export default function FakeWhatsApp() {
  const navigation = useNavigation();

  return (
    <S.container>
      <S.header>
        <S.title>ChatApp</S.title>

        <S.icons>
          <TouchableOpacity>
            <Feather name="camera" size={RFPercentage(2.5)} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather
              name="more-vertical"
              size={RFPercentage(2.5)}
              color={"white"}
            />
          </TouchableOpacity>
        </S.icons>
      </S.header>

      <S.researchChat>
        <Entypo
          name="magnifying-glass"
          size={RFPercentage(2.5)}
          color={"#e0e0e0"}
        />
        <S.researchText>Pergunte à Meta AI ou pesquise</S.researchText>
      </S.researchChat>

      <FlatList
        data={chatMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PersonOnListChat person={item} />}
        style={{ width: "100%" }}
      />

      <Button title="voltar" onPress={() => navigation.goBack()} />
    </S.container>
  );
}
