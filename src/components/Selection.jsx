import React from "react";
import crown from "../images/selection/crown.png";
import defence from "../images/selection/defence.png";
import lider from "../images/selection/lider.png";
import perfect from "../images/selection/perfect.png";
import director from "../images/director.svg";

function Selection() {
  const items = [
    {
      icon: crown,
      title: "Отмеченное наградами ПО",
      description:
        "Всемирно известное программное обеспечение, признанное государственными учреждениями, инновационными группами и техническими организациями",
    },
    {
      icon: perfect,
      title: "Большой потенциал",
      description:
        "Входит в топ-25 самых многообещающих стартапов ConTech по версии Cemex Ventures, Moscow Consulting Group, BuiltWorld и PwC",
    },
    {
      icon: lider,
      title: "Выбор лидеров рынка",
      description:
        "Рекомендуемый поставщик технологий для 3 из 10 ведущих генеральных подрядчиков в Европе",
    },
    {
      icon: defence,
      title: "Устойчивое развитие и безопасность",
      description:
        "Способствует снижению выбросов CO2 и повышает безопасность на месте",
    },
  ];

  return (
    <div className=" container mx-auto py-20  ">
      <h1 className=" text-4xl font-normal text-center">
        Почему нужно выбрать нас?
      </h1>
      <p className=" text-xl font-normal text-center py-5">
        В строительной логистике всегда есть возможности для улучшения.
      </p>
      <div className=" grid  xl:grid-cols-2 w-2/3 mx-auto py-16">
        <div className="">
          {items.map((item, index) => {
            return (
              <div className=" flex items-start" key={index}>
                <img src={item.icon} alt="" />
                <div className="text-center  ml-5 md:text-start mb-10 md:mt-0">
                  <h5 className=" font-normal text-xl mb-2">{item.title}</h5>
                  <p className=" text-gray-400">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" bg-gray-200  p-16 ">
          <h1 className=" text-3xl font-normal">
            Мы видим огромный потенциал в таких решениях, как СтройКонтроль, и
            хотим использовать их для улучшения наших строительных процессов.
          </h1>
          <div className=" flex  items-center py-10 gap-5">
            <img src={director} alt="" />
            <div>
              <p>Волков Матвей</p>
              <p className=" text-base text-gray-400">
                Генеральный директор ООО “СпецСтрой”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selection;
