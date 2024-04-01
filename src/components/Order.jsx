import React from "react";
import order from "../images/order.png";

function Order() {
  return (
    <div className=" container mx-auto flex flex-col justify-center items-center w-full ">
      <h1 className="text-3xl text-center py-28">
        Пора навести порядок на вашей стройплощадке <br /> и взять под контроль
        свой проект
      </h1>
      <div className="grid md:grid-cols-2 w-2/3 ">
        <div className="">
          <p className=" text-3xl">
            Мы заботимся о доставке на стройплощадку и о людях, которые на них
            рассчитывают
          </p>
          <p className=" text-xl text-gray-400 py-5">
            Мы знаем всё о гордости от сияющего нового здания. Нам также
            известно всё о разочаровании от попыток завершить проект в срок и в
            рамках бюджета.
          </p>
          <p className=" bg-yellow-400 inline-block">Мы здесь, чтобы помочь.</p>
        </div>
        <div className="" >
          <img className=" mt-5 md:mt-0" src={order} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Order;
