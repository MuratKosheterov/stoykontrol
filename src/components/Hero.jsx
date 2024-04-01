import React from "react";
import banner from "../images/banner.png";
import bannerCars from "../images/banner-cars.png";
function Hero() {
  return (
    <div className=" container mx-auto py-24">
      <p className=" text-3xl  md:text-5xl flex justify-center mx-auto">
        Умная доставка материалов для <br /> сложных строительных площадок
      </p>
      <div className=" py-10 flex justify-center items-center">
        <button className=" bg-black rounded-md text-white py-2 px-8 mr-8 hover:bg-yellow-400 hover:text-black">
          Заказать
        </button>
        <button className=" rounded-md py-2 px-8 border">Подробное</button>
      </div>
      <div className="" >
      <img
        className=" mt-16 flex justify-center items-center mx-auto "
        src={banner}
        alt=""
      />
      <img className="flex justify-center items-center mx-auto py-10"  src={bannerCars} alt="" />
      </div>

    </div>
  );
}

export default Hero;
