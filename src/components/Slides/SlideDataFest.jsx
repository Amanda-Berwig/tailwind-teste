import React from "react";
import BgMae from "./assets/bg-mãe.png";
import ButtonComprar from "../ButtonComprar";

const SlideDataFest = () => {
  return (
    <div className="relative">
      {/* Texto centralizado sobre a imagem */}
      <p className="absolute text-red-700 text-5xl top-10 right-20 transform -translate-x-1/2 text-center">
        dia das <br />
        <span className="font-bold text-7xl">mães</span>
      </p>
      <p className="absolute text-4xl text-center bg-red-700 rounded-2xl p-2 text-white right-10 top-50 ">
        Presenteie quem você ama{" "}
      </p>
      <img src={BgMae} alt="" className="h-[450px] w-full" />
      {/* Botão centralizado sobre a imagem */}
      <ButtonComprar />
    </div>
  );
};

export default SlideDataFest;
