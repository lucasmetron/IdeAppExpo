import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

// import { color } from 'styles/pallete';

export const container = styled.View`
  flex: 1;
  padding-top: 10px;
  align-items: center;
  justify-content: flex-start;
  gap: ${RFPercentage(1)}px;
  background-color: #161717;
`;

export const title = styled.Text`
  color: white;
  font-size: ${RFPercentage(2.5)}px;
`;

export const header = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${RFPercentage(1)}px;
  align-items: center;
  justify-content: space-between;
`;

export const icons = styled.View`
  gap: ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const researchChat = styled.View`
  width: 95%;
  flex-direction: row;
  border-radius: 20px;
  align-items: center;
  justify-content: flex-start;
  gap: ${RFPercentage(1)}px;
  padding: ${RFPercentage(1.5)}px;
  background-color: #2e2f2f;
`;

export const researchText = styled.Text`
  color: #e0e0e0;
`;
