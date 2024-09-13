import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.View``;

export const title = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  font-family: ${fontsName.title};
  color: ${color.interface.white};
`;
