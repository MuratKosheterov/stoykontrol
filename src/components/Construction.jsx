import React from "react";
import cons from "../images/constructions.png";

function Construction() {
  return (
    <div className=" container flex flex-col justify-center items-center mx-auto">
      <h1 className=" py-16 text-4xl font-medium">Строительство - это хаос</h1>
      <p className=" text-sm md:text-xl text-gray-400 text-center  max-w-[1115px]">
        Хаос может быть удивительной творческой силой, воздвигающая новые здания
        из пыли. <br /> Хаос вызывает несчастные случаи, задержки и потери. Он
        вводит проекты в стресс и разочарование. <br /> Это означает, что вы
        действительно не контролируете ситуацию.
      </p>
      <img src={cons} alt="" />
    </div>
  );
}

export default Construction;
