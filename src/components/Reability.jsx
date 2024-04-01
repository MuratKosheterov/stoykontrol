import React from "react";
import water from "../images/reability/water.png";
import garbage from "../images/reability/garbage.png";
import pub from "../images/reability/public.png";
import hand from "../images/hand.png";

function Reability() {
  const items = [
    {
      icon: water,
      title: "Сниженное загрязнение",
      description:
        "При оптимизации логистики требуется меньше поездок, что приводит к снижению выбросов CO2. Выбрасываемый CO2 контролируется, что позволяет ставить цели и вносить ощутимые улучшения.",
    },
    {
      icon: garbage,
      title: "Улучшенное управление отходами",
      description:
        "Упрощается сортировка отходов, автоматизируется утилизация отходов, а поврежденные материалы при необходимости используются повторно, что снижает затраты и стимулирует переработку и повторное использование.",
    },
    {
      icon: pub,
      title: "Улучшенное влияние на общество",
      description:
        "Уменьшаются проблемы с дорожным движением и шумовое загрязнение, что улучшает жизнь местного сообщества. Улучшенное обращение с материалами и хранение означает, что рабочие также лучше защищены.",
    },
  ];

  return (
    <div className=" container mx-auto mt-32 ">
      <h1 className=" text-3xl font-medium text-center ">Надёжность</h1>
      <p className=" text-center text-gray-400 text-xl w-2/3 lg:w-full mx-auto py-10 px-3 lg:px-0">
        Благодаря надёжному строительству выигрывают все - муниципальные органы
        выполняют свои обязанности перед гражданами, инвесторы получают
        сертификаты своих проектов, а генеральные подрядчики получают повышенную
        репутацию.
      </p>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {items.map((item, index) => {
          return (
            <div
              className="flex flex-col mx-auto  items-center justify-between w-[325px] text-center"
              key={index}
            >
              <img className="py-4" src={item.icon} alt="" />
              <h1 className="font-medium py-2 text-lg">{item.title}</h1>
              <p className=" text-gray-400">{item.description}</p>
            </div>
          );
        })}
      </div>
      <div className="py-10      my-10 bg-gray-100 px-10 flex justify-between items-center">
        <img src={hand} alt="hand" />
        <p className=" text-xl text-center ">
          Надёжная конструкция СтройКонтроль входит в стандартную комплектацию.
        </p>
        <button className=" border px-5 py-2 bg-white rounded-md">
          Подробнее
        </button>
      </div>
    </div>
  );
}   

export default Reability;
