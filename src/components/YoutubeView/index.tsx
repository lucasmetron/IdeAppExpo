import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

import * as S from "./styles";
import { color } from "styles/pallete";

export default function YoutubeView() {
  return (
    <S.container>
      <S.title>Destaques</S.title>

      <WebView
        source={{
          uri: "https://www.youtube.com/embed/s9Y1ZBChASI?si=1PTUx743GozeY7WZ",
        }}
        style={styles.webview}
      />
    </S.container>
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: color.interface.backgroundColor,
    borderRadius: 5,
  },
});
