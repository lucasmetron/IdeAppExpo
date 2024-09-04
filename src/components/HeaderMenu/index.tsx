import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { RouteProps } from "types/RouteProps";
import { stacksMain } from "Router/routes";

interface HeaderMenuProps {
  route: RouteProps;
}

export default function HeaderMenu({ route }: HeaderMenuProps) {
  const navigation: any = useNavigation();

  return (
    <S.container>
      <S.image source={require("../../assets/logoBranca.png")} />
      {/* <S.titleChurch>Igreja do Evangelho</S.titleChurch> */}

      <S.btnLogin
        onPress={() => {
          navigation.navigate(stacksMain.login);
        }}
      >
        <S.textBtnLogin>LOGIN</S.textBtnLogin>
      </S.btnLogin>
    </S.container>
  );
}
