import React from "react";
import { View, Text } from "react-native";

import * as S from "./styles";
import { ChatMessageProps } from "types/ChatMessageProps";

interface PersonOnListProps {
  person: ChatMessageProps;
}

export default function PersonOnListChat({ person }: PersonOnListProps) {
  function returnHour(date: string) {
    return date.split(" ")[1] || "erro";
  }

  function cutString(text: string, qtd: number) {
    if (text.length > qtd) {
      return text.substring(0, 25) + "...";
    }
    return text;
  }

  return (
    <S.container>
      <S.photo src={person.urlAvatar} />
      <S.dataAboutUser>
        <S.name>{person.name}</S.name>
        <S.message>{cutString(person.message, 25)}</S.message>

        <S.time>{returnHour(person.sent)}</S.time>
      </S.dataAboutUser>
    </S.container>
  );
}
