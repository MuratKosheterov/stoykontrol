import React from "react";
import logo from "../images/logo.png";

function Address() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-10 container mx-auto py-24  ">
      <div>
        <img className=" mb-5"  src={logo} alt="logo" />
        <p>
          г. Москва <br />
          Пресненская наб., 88, оф. 527 <br />
          info@stroycontrol.ru
          <br />
          +99894 455 09 90
        </p>
      </div>
      <div className="">
        <p className=" text-base font-normal mb-5 ">Наш продукт</p>
        <p className=" text-gray-400">Процесс</p>
        <p className=" text-gray-400">Продукция</p>
      </div>
      <div className="">
        <p className=" text-base font-normal mb-5">Обслуживание</p>
        <p className=" text-gray-400">Клиенты</p>
        <p className=" text-gray-400">Надёжность</p>
      </div>
      <div className=" ">
        <p className=" text-base font-normal mb-5 ">Компания</p>
        <p className=" text-gray-400">О нас</p>
        <p className=" text-gray-400">Связаться с нами</p>
      </div>
    </div>
  );
}

export default Address;
