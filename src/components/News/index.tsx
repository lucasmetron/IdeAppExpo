import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import * as S from "./styles";
import { NewProps } from "types/NewProps";
import { faker } from "@faker-js/faker";

export default function News() {
  const [news, setNews] = useState<NewProps[]>([]);

  useEffect(() => {
    const newList: NewProps[] = [];

    for (let i = 0; i < 0; i++) {
      newList.push({
        id: Math.random() * 1000,
        img: faker.image.url(),
        subtitle: faker.person.fullName(),
        title: faker.person.firstName(),
        webviewUrl: "https://idevangelho.com/quemsomos.php",
      });
    }

    setNews(newList);
  }, []);

  return news.length > 0 ? (
    <S.container>
      <S.title>News</S.title>
      <Text>teste</Text>
    </S.container>
  ) : (
    <S.emptyListBox>
      <S.title>News</S.title>
      <S.emptyListText>Não há noticias</S.emptyListText>
    </S.emptyListBox>
  );
}
