import { RFPercentage } from "react-native-responsive-fontsize";

import styled from "styled-components/native";
import { color } from "styles/pallete";

export const container = styled.View`
  position: relative;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const title = styled.Text`
  color: ${color.interface.white};
  font-size: ${RFPercentage(2)}px;
  font-weight: 600;
`;

export const btnGoBack = styled.TouchableOpacity`
  padding: 5px;
  padding-right: 10px;
`;

export const btnShare = styled.TouchableOpacity`
  padding: 5px;
  padding-right: 10px;
`;
