import React from "react";

import * as S from "./styles";
import VitrineContents from "components/VitrineContents";
import MainContent from "components/MainContent";
import { data, data2, data3, data4 } from "./objsFake";

export default function Content() {
  return (
    <S.container>
      <MainContent data={data} />
      <VitrineContents title="Adicionados recentemente" data={data2} />
      <VitrineContents title="Células" data={data3} />
      <VitrineContents title="Sermões de domingo" data={data4} />
    </S.container>
  );
}
