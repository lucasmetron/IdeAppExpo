import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  width: fit-content;
`;

export const boxIOS = styled.View`
  width: fit-content;
`;

export const textInput = styled.TextInput`
  width: 100%;
  padding: ${RFPercentage(2)}px;
  border: 1px;
  border-color: ${color.interface.white};
  border-radius: 5px;
  color: ${color.interface.white};
`;

export const btnConfirm = styled.TouchableOpacity`
  width: 100%;
  background-color: ${color.system.success};
  border-radius: 5px;
  padding: ${RFPercentage(1.5)}px ${RFPercentage(3)}px;
  align-items: center;
  justify-content: center;
`;

export const btnText = styled.Text`
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${color.interface.white};
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.title};
`;

export const pickerAndroid = styled.View`
  border-width: 1px;
  border-color: ${color.interface.white};
  border-radius: 5px;
  padding: 3px;
`;
