import React, { useLayoutEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

import * as S from "./styles";
import PersonOnListChat from "components/PersonOnListChat";
import { chatMessages } from "./fakeList";

export default function FakeWhatsApp() {
  const [listPersons, setListPersons] = useState(chatMessages);

  const [valueToSearch, setValueToSearch] = useState("");

  function filterList() {
    return chatMessages.filter((item) =>
      item.name.toLowerCase().includes(valueToSearch.toLowerCase())
    );
  }

  useLayoutEffect(() => {
    if (valueToSearch === "") {
      setListPersons(chatMessages);
    } else {
      setListPersons(filterList());
    }
  }, [valueToSearch]);

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
        <S.researchInput
          value={valueToSearch}
          onChangeText={setValueToSearch}
          placeholder="Pesquise"
          placeholderTextColor="#e0e0e0"
        />
      </S.researchChat>

      <FlatList
        data={listPersons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PersonOnListChat person={item} />}
        style={{ width: "100%" }}
      />
    </S.container>
  );
}
