import React from "react";
import BgMae from "../../assets/bg-mãe.png";
import ButtonComprar from "../ButtonComprar";

const SwiperSlideD = () => {
  return (
    <div className="relative">
      {/* Texto centralizado sobre a imagem */}
      <p className="absolute text-red-700 text-6xl bottom-60 left-1/2 transform -translate-x-1/2 text-center">
        dia das <br />
        <span className="font-bold text-8xl">mães</span>
      </p>
      <img src={BgMae} alt="" className="w-full" />
      {/* Botão centralizado sobre a imagem */}
      <ButtonComprar />
    </div>
  );
};

export default SwiperSlideD;
