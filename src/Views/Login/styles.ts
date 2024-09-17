import { Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import styled from "styled-components/native";
import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.ImageBackground`
  position: relative;
  flex: 1;
  height: ${Dimensions.get("window").height}px;
  align-items: center;
  justify-content: center;
  background-color: ${color.interface.backgroundColor};
`;

export const input = styled.TextInput`
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  background-color: ${color.interface.white};
  margin-bottom: 10px;
`;

export const titleChurch = styled.Text`
  color: ${color.interface.white};
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.title};
`;

export const image = styled.Image`
  width: ${RFPercentage(8)}px;
  height: ${RFPercentage(8)}px;
  margin-bottom: 5px;
`;

export const logoBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
