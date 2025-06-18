import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
// import { color } from "styles/pallete";

export const container = styled.TouchableOpacity`
  width: 100%;
  height: ${Dimensions.get("window").height * 0.08};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFPercentage(1.5)}px;
  gap: ${RFPercentage(1)}px;
`;

export const photo = styled.Image`
  border-radius: 50%;
  width: ${Dimensions.get("window").height * 0.05};
  height: 100%;
`;

export const dataAboutUser = styled.View`
  height: 100%;
  position: relative;
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
`;

export const time = styled.Text`
  position: absolute;
  top: 0;
  right: 0;
  color: #e0e0e0;
`;

export const name = styled.Text`
  color: white;
`;

export const message = styled.Text`
  color: #e0e0e0;
`;
