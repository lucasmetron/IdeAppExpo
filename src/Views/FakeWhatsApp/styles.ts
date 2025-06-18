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
  align-items: center;
  background-color: #3a3a3a;
  padding: ${RFPercentage(1)}px;
  border-radius: 20px;
  gap: ${RFPercentage(1)}px;
`;

export const researchInput = styled.TextInput`
  flex: 1;
  color: white;
  font-size: ${RFPercentage(2)}px;
`;

export const researchText = styled.Text`
  color: #e0e0e0;
`;
