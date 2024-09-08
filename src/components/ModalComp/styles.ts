import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "../../styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.SafeAreaView`
  background-color: ${color.interface.backgroundColor};
  flex: 1;
`;

export const btnClose = styled.TouchableOpacity`
  width: 100%;
  align-items: flex-end;
  justify-content: center;
  padding-right: ${RFPercentage(1)}px;
`;

export const title = styled.Text`
  width: 100%;
  text-align: center;
  font-size: ${RFPercentage(3)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.white};
  align-items: center;
  justify-content: center;
`;
