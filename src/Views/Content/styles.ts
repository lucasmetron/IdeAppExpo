import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { color } from "styles/pallete";

export const container = styled.ScrollView`
  flex: 1;
  padding: ${RFPercentage(1.5)}px;
  background-color: ${color.interface.backgroundColor2};
`;
