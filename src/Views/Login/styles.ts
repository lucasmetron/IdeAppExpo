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
  gap: 8px;
  background-color: ${color.interface.backgroundColor};
`;

export const input = styled.TextInput`
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  background-color: ${color.interface.white};
  margin-bottom: 10px;
`;

export const titleChurch = styled.Text`
  color: ${color.interface.white};
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.title};
  text-transform: uppercase;
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

interface EnterBtnProps {
  backColor: string;
}

export const enterBtn = styled.TouchableOpacity<EnterBtnProps>`
  width: 90%;
  padding: 10px;
  border-radius: 50px;
  background-color: ${(props) => props.backColor};
  align-items: center;
  justify-content: center;
`;

interface TxtBtnsProps {
  colorTxt: string;
}

export const txtBtns = styled.Text<TxtBtnsProps>`
  color: ${(props) => props.colorTxt};
  font-family: ${fontsName.title};
  gap: 10px;
`;

export const notYetRegister = styled.TouchableOpacity`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const notYetRegisterTxt = styled.Text`
  font-family: ${fontsName.title};
  color: ${color.interface.white};
  font-size: ${RFPercentage(1.8)}px;
`;

export const backBtn = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
`;
