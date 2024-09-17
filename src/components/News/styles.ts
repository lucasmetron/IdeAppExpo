import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  width: 100%;
  gap: 10px;
  height: ${Dimensions.get("window").height * 0.35}px;
`;

export const title = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.white};
`;

export const emptyListBox = styled.View`
  width: 100%;
  gap: 10px;
  padding-bottom: 20px;
`;

export const emptyListText = styled.Text`
  width: 100%;
  text-align: center;
  font-size: ${RFPercentage(1.8)}px;
  opacity: 0.6;
  font-family: ${fontsName.title};
  color: ${color.interface.white};
`;
