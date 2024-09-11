import { RFPercentage } from "react-native-responsive-fontsize";

import styled from "styled-components/native";
import { color } from "styles/pallete";

export const container = styled.View`
  flex: 1;
  padding: ${RFPercentage(2)}px ${RFPercentage(1.5)}px ${RFPercentage(1.5)}px
    ${RFPercentage(1.5)}px;
  background-color: ${color.interface.backgroundColor2};
`;

export const itemMore = styled.TouchableOpacity`
  background-color: ${color.interface.backgroundColor};
  flex-direction: row;
  gap: ${RFPercentage(2)}px;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: ${RFPercentage(2.5)}px;
  border-radius: 5px;
  margin-bottom: ${RFPercentage(1.5)}px;
`;

export const title = styled.Text`
  color: ${color.interface.white};
  font-size: ${RFPercentage(2)}px;
  text-align: left;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
