import React from "react";
import { Text } from "react-native";
import { WebView } from "react-native-webview";

import * as S from "./styles";

export default function OurPages() {
  return (
    <S.container>
      <WebView
        source={{ uri: "https://keepo.io/idevangelho/" }}
        style={{ flex: 1 }}
      />
    </S.container>
  );
}
