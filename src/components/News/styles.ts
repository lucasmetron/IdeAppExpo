import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  width: 100%;
  gap: 10px;
  margin-bottom: 10px;
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

export const itemNew = styled.View`
  width: ${Dimensions.get("window").width * 0.38}px;
  height: 100%;
  background-color: ${color.interface.backgroundColor};
  margin-right: ${RFPercentage(1)}px;
  border-radius: 5px;
  overflow: hidden;
  gap: ${RFPercentage(1)}px;
`;

export const img = styled.Image`
  width: 100%;
  flex: 4.5;
  background-color: ${color.interface.backgroundColor};
`;

export const info = styled.View`
  flex: 5.5;
  padding-left: ${RFPercentage(1)}px;
  padding-right: ${RFPercentage(1)}px;
  padding-bottom: ${RFPercentage(1)}px;
  justify-content: space-between;
`;

export const titleAndSubTitle = styled.View`
  flex: 1;
  gap: ${RFPercentage(0.5)}px;
  margin-bottom: ${RFPercentage(1)}px;
`;

export const readMore = styled.Text`
  opacity: 0.5;
  color: ${color.interface.white};
  font-weight: bold;
  font-size: ${RFPercentage(1.8)}px;
  font-family: ${fontsName.title};
  text-transform: uppercase;
`;

export const infoTitle = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.white};
`;

export const infoSubTitle = styled.Text`
  font-size: ${RFPercentage(1.8)}px;
  font-family: ${fontsName.text};
  color: ${color.interface.white};
`;
