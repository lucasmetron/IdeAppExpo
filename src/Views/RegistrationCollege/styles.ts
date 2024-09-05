import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { color } from "styles/pallete";
import { RFPercentage } from "react-native-responsive-fontsize";
import { fontsName } from "styles/fonts";

export const container = styled.View`
  position: relative;
  flex: 1;
  flex-direction: column;
  background-color: ${color.interface.backgroundColor};
  gap: ${RFPercentage(1)}px;
`;

export const imgCourseContainer = styled.View`
  width: 100%;
  height: ${Dimensions.get("window").height * 0.3}px;
  background-color: ${color.interface.backgroundColor2};
`;

export const imgCourse = styled.Image`
  width: 100%;
  height: 100%;
`;

export const infosContainer = styled.View`
  flex: 1;
  min-height: ${Dimensions.get("window").height * 0.6}px;
  flex-direction: column;
  padding-bottom: ${RFPercentage(10)}px;
`;

export const containerBtn = styled.TouchableOpacity`
  height: ${RFPercentage(6)}px;
  position: absolute;
  bottom: 15px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const btnRegister = styled.TouchableOpacity`
  width: 90%;
  height: 100%;
  background-color: ${color.system.success};
  border-radius: 5px;
  padding: ${RFPercentage(1.5)}px ${RFPercentage(3)}px;
  z-index: 2;
  align-items: center;
  justify-content: center;
`;

export const btnText = styled.Text`
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${color.interface.white};
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.title};
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;
