import { Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import styled from "styled-components/native";
import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const titleChurch = styled.Text`
  color: ${color.interface.white};
  font-size: ${RFPercentage(1.7)}px;
  font-family: ${fontsName.title};
`;

export const image = styled.Image`
  width: ${Dimensions.get("window").width * 0.08}px;
  height: ${Dimensions.get("window").width * 0.08}px;
`;

export const btnLogin = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  border-radius: 35px;
  padding-top: ${RFPercentage(0.5)}px;
  padding-bottom: ${RFPercentage(0.5)}px;
  padding-right: ${RFPercentage(2)}px;
  padding-left: ${RFPercentage(2)}px;
  border: 1px solid ${color.interface.lightGray};
`;

export const textBtnLogin = styled.Text`
  color: ${color.interface.lightGray};
  font-family: ${fontsName.text};
`;
