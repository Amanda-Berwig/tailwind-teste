import React from "react";
import BgCalcado from "./assets/bg-tenis.png";
import ButtonComprar from "../ButtonComprar";

const SlideCalcado = () => {
  return (
    <div className="relative">
      {/* Texto centralizado sobre a imagem */}
      <p className="absolute text-white font-bold text-6xl top-10 right-20 text-center">
        beleza <br />
        <span className="font-normal text-4xl tracking-widest">
          para presentear
        </span>
      </p>
      <img src={BgCalcado} alt="" className="h-[450px] w-full" />
      {/* Botão centralizado sobre a imagem */}
      <ButtonComprar />
    </div>
  );
};

export default SlideCalcado;
