import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.ScrollView`
  width: 100%;
`;

export const boxContent = styled.View`
  width: 100%;
  gap: 5px;
`;

export const scroll = styled.ScrollView`
  max-height: ${Dimensions.get("window").height * 0.2}px;
  min-height: ${Dimensions.get("window").height * 0.2}px;
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: row;
`;

export const title = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.white};
`;

export const content = styled.TouchableOpacity`
  width: ${Dimensions.get("window").width * 0.42}px;
  max-height: ${Dimensions.get("window").height * 0.2}px;
  min-height: ${Dimensions.get("window").height * 0.2}px;
  margin-right: ${RFPercentage(0.9)}px;
  gap: ${RFPercentage(0.5)}px;
`;

export const imgContent = styled.Image`
  width: 100%;
  height: 55%;
  background-color: ${color.interface.backgroundColor2};
  border-radius: 5px;
`;

export const titleContent = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.white};
`;

export const subTitleContent = styled.Text`
  font-size: ${RFPercentage(1.4)}px;
  font-family: ${fontsName.text};
  color: ${color.interface.white};
`;
