import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { color } from "../../styles/pallete";
import { fontsName } from "styles/fonts";

export const loadContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${color.interface.backgroundColor2};
  gap: ${RFPercentage(2)}px;
`;

export const titleCourses = styled.Text`
  width: 100%;
  text-align: left;
  color: ${color.interface.white};
  font-family: ${fontsName.title};
  font-size: ${RFPercentage(2.5)}px;
`;

export const noCoursesConteiner = styled.View`
  flex: 1;
  text-align: center;
  justify-content: center;
`;

export const noCoursesText = styled.Text`
  width: 100%;
  text-align: center;
  color: ${color.interface.white};
  font-family: ${fontsName.text};
  font-size: ${RFPercentage(1.5)}px;
`;

export const conteinerItemCourseCollege = styled.TouchableOpacity`
  width: 100%;
  gap: ${RFPercentage(2)}px;
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: ${RFPercentage(3)}px;
`;

export const imgBox = styled.View`
  flex: 4;
  width: 100%;
  gap: 3px;
`;

export const infos = styled.View`
  flex: 6;
  width: 100%;
  gap: 3px;
`;

export const initialDate = styled.Text`
  color: ${color.interface.white};
  opacity: 0.5;
  font-size: ${RFPercentage(1.5)}px;
  font-family: ${fontsName.text};
`;

export const nameCourse = styled.Text`
  color: ${color.interface.white};
  font-size: ${RFPercentage(2)}px;
  font-family: ${fontsName.title};
`;
