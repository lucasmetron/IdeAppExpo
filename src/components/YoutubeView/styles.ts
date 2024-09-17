import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  width: 100%;
  height: ${Dimensions.get("window").height * 0.35}px;
  gap: 10px;
`;

export const title = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.white};
`;
