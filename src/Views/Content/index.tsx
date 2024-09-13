import React, { useContext } from "react";

import * as S from "./styles";
import VitrineContents from "components/VitrineContents";
import MainContent from "components/MainContent";
import { data, data2, data3, data4 } from "./objsFake";
import ContentContext from "context/ContentContext";
import LoadScreen from "components/LoadScreen";

export default function Content() {
  const { isLoadContent } = useContext(ContentContext);
  return isLoadContent ? (
    <S.loadContainer>
      <LoadScreen text="Carregando Contéudo" />
    </S.loadContainer>
  ) : (
    <>
      <S.container>
        <MainContent data={data} />
        <VitrineContents title="Adicionados recentemente" data={data2} />
        <VitrineContents title="Células" data={data3} />
        <VitrineContents title="Sermões de domingo" data={data4} />
      </S.container>
    </>
  );
}
