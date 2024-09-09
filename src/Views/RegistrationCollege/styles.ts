import { RFPercentage } from "react-native-responsive-fontsize";

import { fontsName } from "styles/fonts";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { color } from "styles/pallete";

export const container = styled.View`
  position: relative;
  flex: 1;
  flex-direction: column;
  background-color: ${color.interface.backgroundColor2};
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
  padding-top: ${RFPercentage(2)}px;
  padding-right: ${RFPercentage(2)}px;
  padding-left: ${RFPercentage(2)}px;
  flex: 1;
  min-height: ${Dimensions.get("window").height * 0.6}px;
  flex-direction: column;
  padding-bottom: ${RFPercentage(10)}px;
  gap: ${RFPercentage(1)}px;
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

export const titleCourse = styled.Text`
  font-family: ${fontsName.title};
  color: ${color.interface.white};
  font-size: ${RFPercentage(3.5)}px;
`;

export const dateBox = styled.TouchableOpacity`
  flex-direction: row;
  width: "100%";
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`;

export const infosDateBox = styled.View`
  width: "100%";
`;

export const date = styled.Text`
  width: "100%";
  color: ${color.interface.white};
  opacity: 0.8;
  align-items: center;
  justify-content: center;
`;

export const linkDate = styled.Text`
  width: "100%";
  color: ${color.interface.white};
  opacity: 0.3;
  align-items: center;
  justify-content: center;
`;

export const linkAndIcon = styled.View`
  width: "100%";
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const aboutBox = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 6px;
`;

export const aboutTitle = styled.Text`
  font-size: ${RFPercentage(2)}px;
  color: ${color.interface.white};
  font-family: ${fontsName.title};
`;

export const iconsAndDescript = styled.View`
  flex: 1;
  gap: 3px;
`;

export const description = styled.Text`
  font-size: ${RFPercentage(1.5)}px;
  color: ${color.interface.white};
  opacity: 0.8;
  text-align: left;
`;
