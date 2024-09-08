import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  flex: 1;
  width: 100%;
  align-content: center;
  justify-content: space-between;
  gap: ${RFPercentage(2)}px;
`;

export const textInput = styled.TextInput`
  width: 100%;
  padding: ${RFPercentage(2)}px;
  border: 1px;
  border-color: ${color.interface.white};
  border-radius: 5px;
  color: ${color.interface.white};
`;

export const containerInputs = styled.View`
  width: 100%;
  align-content: center;
  justify-content: center;
  gap: ${RFPercentage(2)}px;
`;

export const containerBtn = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  /* padding-bottom: ${RFPercentage(2)}px; */
`;

interface btnRegisterProps {
  canSave: boolean;
}

export const btnRegister = styled.TouchableOpacity<btnRegisterProps>`
  width: 100%;
  background-color: ${(props) =>
    props.canSave ? color.system.success : color.interface.darkgray};
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
