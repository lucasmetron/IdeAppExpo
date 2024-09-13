import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { Dimensions } from "react-native";
import { fontsName } from "styles/fonts";

export const container = styled.ScrollView`
  flex: 1;
  background-color: ${color.interface.backgroundColor2};
`;

export const img = styled.Image`
  width: 100%;
  height: ${Dimensions.get("window").height * 0.4}px;
  background-color: ${color.interface.backgroundColor};
  margin-bottom: ${RFPercentage(1)}px;
`;

export const contentBox = styled.View`
  padding-left: ${RFPercentage(1.5)}px;
  padding-right: ${RFPercentage(1.5)}px;
`;

export const iconAndText = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;

export const titleContent = styled.Text`
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: ${RFPercentage(3)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.white};
  margin-bottom: 5px;
  opacity: 0.7;
`;

export const creator = styled.Text`
  flex: 1;
  width: 100%;
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.text};
  color: ${color.interface.white};
  opacity: 0.7;
  padding-left: 8px;
`;

export const line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${color.interface.white};
  margin-top: 10px;
  margin-bottom: 10px;
  opacity: 0.7;
`;

export const contentText = styled.Text`
  font-size: ${RFPercentage(1.8)}px;
  font-family: ${fontsName.text};
  color: ${color.interface.white};
  text-align: justify;
  margin-bottom: 5px;
  opacity: 0.7;
`;
