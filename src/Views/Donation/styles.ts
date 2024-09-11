import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.ScrollView`
  flex: 1;
  background-color: ${color.interface.backgroundColor2};
  padding: ${RFPercentage(1.5)}px;
`;

export const title = styled.Text`
  color: ${color.interface.white};
  font-family: ${fontsName.title};
  font-size: ${RFPercentage(2.5)}px;
  padding-bottom: ${RFPercentage(2)}px;
`;

export const boxDonation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${RFPercentage(2)}px;
`;

export const itemDonation = styled.View`
  position: relative;
  width: ${Dimensions.get("window").width / 2 - RFPercentage(2)}px;
  height: ${Dimensions.get("window").height * 0.3}px;
  padding: ${RFPercentage(1.5)}px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Img = styled.Image`
  position: absolute;
  width: ${Dimensions.get("window").width / 2 - RFPercentage(2)}px;
  height: ${Dimensions.get("window").height * 0.3}px;
  top: 0;
  bottom: 0;
  border-radius: 5px;
`;

export const opacityDiv = styled.View`
  width: ${Dimensions.get("window").width / 2 - RFPercentage(2)}px;
  height: ${Dimensions.get("window").height * 0.3}px;
  position: absolute;
  top: 0;

  flex: 1;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
`;

export const donationText = styled.Text`
  font-size: ${RFPercentage(2.5)}px;
  color: ${color.interface.white};
  font-family: ${fontsName.title};
  z-index: 3;
`;
