import React from "react";
import BgCalcado from "./assets/bg-calcad.jpg";
import ButtonComprar from "../ButtonComprar";

const SlideCalcado = () => {
  return (
    <div className="relative">
      <p className="absolute text-black font-normal text-3xl top-10 left-20 text-center">
        tênis e acessórios <br />
        que vão do esporte <br /> ao streetstyle
      </p>
      <p className="absolute text-3xl text-center rounded-2xl p-2 text-black right-14 bottom-10 ">
        Conforto e atitude <br /> da cabeça aos pés
      </p>
      <img src={BgCalcado} alt="" className="h-[450px] w-full" />
      <ButtonComprar />
    </div>
  );
};

export default SlideCalcado;
