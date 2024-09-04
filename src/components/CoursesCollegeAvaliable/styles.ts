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
