import { useContext, useEffect, useState } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import RenderHTML from "react-native-render-html";
import { Text } from "react-native";

import * as S from "./styles";
import CoursesCollegeContext from "context/CoursesCollege";
import { color } from "styles/pallete";
import { formatDateToDayAndMonth } from "utils/functions";
import ModalComp from "components/ModalComp";
import FormRegistrationCollege from "components/FormRegistrationCollege";

export default function RegistrationCollege() {
  const { courseSelected, setCourseSelected } = useContext(
    CoursesCollegeContext
  );
  const [isOpenModalRegistration, setIsOpenModalRegistration] = useState(false);

  useEffect(() => {
    return () => {
      // setCourseSelected(null);
    };
  }, []);
  return (
    <S.container>
      <S.Scroll>
        <S.imgCourseContainer>
          <S.imgCourse source={{ uri: courseSelected?.imgUrl || "" }} />
        </S.imgCourseContainer>

        <S.infosContainer>
          <S.titleCourse>
            {courseSelected?.nome_curso || "Nome do curso"}
          </S.titleCourse>

          <S.dateBox>
            <MaterialIcons
              style={{ opacity: 0.3 }}
              name="date-range"
              size={RFPercentage(3.5)}
              color={color.interface.white}
            />

            <S.infosDateBox>
              <>
                <S.date>
                  {formatDateToDayAndMonth(courseSelected?.data_inicio!)}
                </S.date>
                <S.linkAndIcon>
                  <S.linkDate>Salvar na agenda</S.linkDate>
                  <AntDesign
                    name="arrowright"
                    style={{ opacity: 0.7 }}
                    size={RFPercentage(2)}
                    color={color.interface.white}
                  />
                </S.linkAndIcon>
              </>
            </S.infosDateBox>
          </S.dateBox>

          <S.aboutBox>
            <MaterialIcons
              style={{ opacity: 0.3 }}
              name="description"
              size={RFPercentage(3.5)}
              color={color.interface.white}
            />
            <S.iconsAndDescript>
              <S.aboutTitle>Sobre</S.aboutTitle>
              {/* <S.description>{courseSelected?.descricao_curso}</S.description> */}
              <RenderHTML
                tagsStyles={tagsStyles}
                contentWidth={100}
                source={{ html: courseSelected?.descricao_curso! }}
              />
            </S.iconsAndDescript>
          </S.aboutBox>
        </S.infosContainer>
      </S.Scroll>

      <S.containerBtn>
        <S.btnRegister onPress={() => setIsOpenModalRegistration(true)}>
          <S.btnText>Matricular</S.btnText>
        </S.btnRegister>
      </S.containerBtn>

      <ModalComp
        isOpen={isOpenModalRegistration}
        setIsOpen={setIsOpenModalRegistration}
        title="Cadastro"
      >
        <FormRegistrationCollege />
      </ModalComp>
    </S.container>
  );
}

const tagsStyles: any = {
  h1: {
    color: color.interface.white,
    fontSize: RFPercentage(3),
  },
  p: {
    color: color.interface.white,
    fontSize: RFPercentage(1.5),
  },
};
