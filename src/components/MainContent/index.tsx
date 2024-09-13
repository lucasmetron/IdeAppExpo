import React from "react";
import { Text, View, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import * as S from "./styles";

export default function MainContent() {
  const width = Dimensions.get("window").width;
  return (
    <S.container>
      <S.title numberOfLines={1}>Em destaque</S.title>
      <View style={{ flex: 1 }}>
        <Carousel
          mode="parallax"
          loop
          width={width}
          height={width / 2}
          autoPlay={false}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
            </View>
          )}
        />
      </View>
    </S.container>
  );
}
