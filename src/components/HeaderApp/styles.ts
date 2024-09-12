import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { color } from "../../styles/pallete";

export const container = styled.View`
  background-color: ${color.interface.backgroundColor};
  height: ${Dimensions.get("window").height * 0.055}px;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  padding-bottom: 5px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;
