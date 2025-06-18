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

  return (
    <S.container>
      <S.photo src={person.urlAvatar} />
      <S.dataAboutUser>
        <S.name>{person.name}</S.name>
        <S.message>{person.message}</S.message>

        <S.time>{returnHour(person.sent)}</S.time>
      </S.dataAboutUser>
    </S.container>
  );
}
