import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  flex: 1;
  padding: ${RFPercentage(1.5)}px;
  gap: ${RFPercentage(1)}px;
  background-color: ${color.interface.backgroundColor2};
  justify-content: space-between;
`;

export const inputs = styled.View`
  gap: ${RFPercentage(1.5)}px;
`;

export const btnContainer = styled.View``;

export const textInput = styled.TextInput`
  width: 100%;
  padding: ${RFPercentage(2)}px;
  border: 1px;
  border-color: ${color.interface.white};
  border-radius: 5px;
  color: ${color.interface.white};
`;

export const textArea = styled.TextInput`
  width: 100%;
  height: 200px;
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

export const toggleWpp = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: ${RFPercentage(1)}px;
`;

export const toggleText = styled.Text`
  color: ${color.interface.white};
  font-size: ${RFPercentage(1.5)}px;
  font-family: ${fontsName.text};
`;
