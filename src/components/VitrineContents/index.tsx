import React from "react";

import * as S from "./styles";
import { Text } from "react-native";

interface VitrineContentsProps {
  title: string;
}

export default function VitrineContents({ title }: VitrineContentsProps) {
  const linkImg =
    "https://igrejadacidade.net/wp-content/uploads/2024/09/CAPA-GERA%C3%87%C3%83O-DOPAMINA-1000-X-1000.jpg";
  return (
    <S.container>
      <S.boxContent>
        <S.title numberOfLines={1}>{title}</S.title>
        <S.scroll horizontal showsHorizontalScrollIndicator={false}>
          <S.content>
            <S.imgContent>
              <S.img source={{ uri: linkImg }} />
            </S.imgContent>
            <S.titleContent numberOfLines={2}>Geracao dopamina</S.titleContent>
            <S.subTitleContent numberOfLines={1}>
              Viciados no prazer!
            </S.subTitleContent>
          </S.content>

          <S.content>
            <S.imgContent>
              <S.img source={{ uri: linkImg }} />
            </S.imgContent>
            <S.titleContent numberOfLines={2}>
              Quem voce esta seguindo?
            </S.titleContent>
            <S.subTitleContent numberOfLines={1}>bla bla bla</S.subTitleContent>
          </S.content>

          <S.content>
            <S.imgContent>
              <S.img source={{ uri: linkImg }} />
            </S.imgContent>
            <S.titleContent numberOfLines={2}>
              Quando menos e mais
            </S.titleContent>
            <S.subTitleContent numberOfLines={1}>
              Por que complicar quando podemos simplificar?
            </S.subTitleContent>
          </S.content>
        </S.scroll>
      </S.boxContent>
    </S.container>
  );
}
