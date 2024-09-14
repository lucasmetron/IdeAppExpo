import React, { useContext } from "react";

import * as S from "./styles";
import VitrineContents from "components/VitrineContents";
import MainContent from "components/MainContent";
import { data, data2, data3, data4 } from "./objsFake";
import ContentContext from "context/ContentContext";
import LoadScreen from "components/LoadScreen";
import { stacksContent } from "Router/routes";

export default function Content() {
  const { isLoadContent, setContentSelected } = useContext(ContentContext);
  return isLoadContent ? (
    <S.loadContainer>
      <LoadScreen text="Carregando Contéudo" />
    </S.loadContainer>
  ) : (
    <>
      <S.container>
        <MainContent data={data} />
        <VitrineContents
          selectFunction={setContentSelected}
          navigateTo={stacksContent.contentSelected}
          title="Adicionados recentemente"
          data={data2}
        />
        <VitrineContents
          selectFunction={setContentSelected}
          navigateTo={stacksContent.contentSelected}
          title="Células"
          data={data3}
        />
        <VitrineContents
          selectFunction={setContentSelected}
          navigateTo={stacksContent.contentSelected}
          title="Sermões de domingo"
          data={data4}
        />
      </S.container>
    </>
  );
}
