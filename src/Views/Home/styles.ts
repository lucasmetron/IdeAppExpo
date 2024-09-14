import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "styles/pallete";
import { fontsName } from "styles/fonts";

export const container = styled.SafeAreaView`
  flex: 1;
  background-color: ${color.interface.backgroundColor2};
`;

export const fakeGap = styled.SafeAreaView`
  width: 100%;
  height: ${RFPercentage(3)}px;
  background-color: ${color.interface.backgroundColor2};
`;

export const boxVitrine = styled.View`
  width: 100%;
  padding-left: ${RFPercentage(1.5)}px;
  padding-right: ${RFPercentage(1.5)}px;
`;
