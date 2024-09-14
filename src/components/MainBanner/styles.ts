import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.ImageBackground`
  width: 100%;
  height: ${Dimensions.get("window").height * 0.35}px;
  align-items: center;
  justify-content: flex-end;
`;

export const boxInfo = styled.View`
  width: 90%;
  padding: ${RFPercentage(1)}px;
  background-color: "rgba(0,0,0,0.5)";
  border-radius: 5px;
  margin-bottom: ${RFPercentage(3)}px;
`;

export const title = styled.Text`
  width: 100%;
  color: ${color.interface.white};
  font-size: ${RFPercentage(2.5)}px;
  font-family: ${fontsName.title};
`;

export const author = styled.Text`
  width: 100%;
  color: ${color.interface.white};
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.text};
`;
