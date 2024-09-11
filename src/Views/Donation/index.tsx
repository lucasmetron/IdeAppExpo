import React from "react";
import { Linking, TouchableOpacity } from "react-native";

import * as S from "./styles";

export default function Donation() {
  function redirect(value: string) {
    Linking.openURL(value);
  }

  return (
    <S.container>
      <S.title>Destaques</S.title>
      <S.boxDonation>
        <TouchableOpacity
          onPress={() => redirect("https://idevangelho.com/contribuicao.php")}
        >
          <S.itemDonation>
            <S.Img source={require("../../assets/doacao.jpg")} />
            <S.donationText>Dízimo</S.donationText>
            <S.opacityDiv />
          </S.itemDonation>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => redirect("https://idevangelho.com/contribuicao.php")}
        >
          <S.itemDonation>
            <S.Img source={require("../../assets/doacao.jpg")} />
            <S.donationText>Ofertas</S.donationText>
            <S.opacityDiv />
          </S.itemDonation>
        </TouchableOpacity>
      </S.boxDonation>

      <S.title>Projetos e Açoes</S.title>

      <S.boxDonation>
        <TouchableOpacity onPress={() => redirect("https://pag.ae/bjBxwtSF")}>
          <S.itemDonation>
            <S.Img source={require("../../assets/africa.jpg")} />
            <S.donationText>Projeto África</S.donationText>
            <S.opacityDiv />
          </S.itemDonation>
        </TouchableOpacity>
      </S.boxDonation>
    </S.container>
  );
}
