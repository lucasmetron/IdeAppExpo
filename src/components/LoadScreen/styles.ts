import styled from "styled-components/native";
import { color } from "../../styles/pallete";
import { fontsName } from "styles/fonts";
import { RFPercentage } from "react-native-responsive-fontsize";

export const loadContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${color.interface.backgroundColor2};
  gap: ${RFPercentage(1)}px;
`;

export const text = styled.Text`
  font-size: ${RFPercentage(1.3)}px;
  color: ${color.interface.white};
  font-family: ${fontsName.text};
`;
