import React from "react";
import banner2 from "../images/banner_02.png";

function Fuel() {
  return (
    <div
      className=" container mx-auto my-32"
      style={{
        backgroundImage: `url(${banner2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        maxWidth: "1056px",
        maxHeight: "466px",
      }}
    >
      <div className=" flex flex-col justify-center items-center h-full  gap-10 ">
        <p className=" text-5xl text-center ">
          Готовы оптимизировать логистику доставки для вашего сложного проекта?
        </p>
        <div className=" flex justify-center items-center gap-9">
          <button className=" py-3 px-6 bg-black text-white rounded-md hover:bg-yellow-400 hover:text-black ">
            Заказать
          </button>
          <button className=" rounded-md py-3 px-6 border bg-white ">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fuel;
