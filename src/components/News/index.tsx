import React, { useEffect, useState, useContext } from "react";
import { Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { faker } from "@faker-js/faker";

import * as S from "./styles";
import { NewProps } from "types/NewProps";
import { TouchableOpacity } from "react-native-gesture-handler";
import { stacksHome } from "Router/routes";
import NewsContextContext from "context/NewsContext";

export default function News() {
  const { setData } = useContext(NewsContextContext);
  const navigation: any = useNavigation();
  const [news, setNews] = useState<NewProps[]>([]);

  useEffect(() => {
    const newList: NewProps[] = [];

    for (let i = 0; i < 10; i++) {
      newList.push({
        id: Math.random() * 1000,
        img: faker.image.url(),
        subtitle: faker.airline.airport().name,
        title: faker.person.fullName(),
        webviewUrl: "https://idevangelho.com/quemsomos.php",
      });
    }

    setNews(newList);
  }, []);

  return news.length > 0 ? (
    <S.container>
      <S.title>News</S.title>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {news.map((item, i) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              navigation.navigate(stacksHome.newsWebview);
              setData(item);
            }}
          >
            <S.itemNew>
              <S.img source={{ uri: item.img }} resizeMethod="auto" />
              <S.info>
                <S.titleAndSubTitle>
                  <S.infoTitle numberOfLines={2}>{item.title}</S.infoTitle>
                  <S.infoSubTitle numberOfLines={2}>
                    {item.subtitle}
                  </S.infoSubTitle>
                </S.titleAndSubTitle>
                <S.readMore>Ler Mais</S.readMore>
              </S.info>
            </S.itemNew>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </S.container>
  ) : (
    <S.emptyListBox>
      <S.title>News</S.title>
      <S.emptyListText>Não há noticias</S.emptyListText>
    </S.emptyListBox>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
    minWidth: "100%",
    display: "flex",
    height: Dimensions.get("window").height * 0.3,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
