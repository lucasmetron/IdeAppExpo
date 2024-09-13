import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  /* background-color: ${color.interface.backgroundColor}; */
`;

export const title = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.white};
`;

export const content = styled.TouchableOpacity`
  flex: 1;
  height: 200px;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${color.interface.backgroundColor};
  border-radius: 5px;
`;

export const imgContent = styled.View`
  flex: 1;
  width: 100%;
  height: 70%;
  background-color: ${color.interface.backgroundColor2};
  border-radius: 5px;
`;

export const img = styled.Image`
  width: 100%;
  height: 100%;
  background-color: ${color.interface.backgroundColor2};
  border-radius: 5px;
`;

export const textsCard = styled.View`
  padding: ${RFPercentage(1.5)}px;
  width: 100%;
`;

export const titleContent = styled.Text`
  font-size: ${RFPercentage(3.5)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.white};
`;

export const subTitleContent = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.text};
  color: ${color.interface.white};
`;
