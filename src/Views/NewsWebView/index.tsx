import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import { WebView } from "react-native-webview";

import * as S from "./styles";
import NewsContextContext from "context/NewsContext";

export default function NewsWebView() {
  const { data, setData } = useContext(NewsContextContext);

  useEffect(() => {
    return () => {
      setData(null);
    };
  }, []);

  return (
    <S.container>
      <WebView
        source={{ uri: data?.webviewUrl || "www.google.com.br" }}
        style={{ flex: 1 }}
      />
    </S.container>
  );
}
