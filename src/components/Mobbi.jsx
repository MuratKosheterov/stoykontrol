import React from "react";
import student from "../images/web/student.png";
import key from "../images/web/key.png";
import compilense from "../images/web/compilense.png";

function Mobbi() {
  const items = [
    {
      icon: student,
      title: "Привлечение субподрядчика",
      description:
        "Для выполнения этой работы вам понадобятся ваши субподрядчики. У нас есть проверенный и надежный процесс для этого.",
    },
    {
      icon: student,
      title: "Привлечение субподрядчика",
      description:
        "Для выполнения этой работы вам понадобятся ваши субподрядчики. У нас есть проверенный и надежный процесс для этого.",
    },
    {
      icon: student,
      title: "Привлечение субподрядчика",
      description:
        "Для выполнения этой работы вам понадобятся ваши субподрядчики. У нас есть проверенный и надежный процесс для этого.",
    },
  ];

  return (
    <div className=" bg-black2 text-white py-20">
      <div className=" container mx-auto w-1/2">
        <h1 className=" text-3xl  ">Создан для строительства</h1>
        <ul className=" list-disc py-10">
          <li className=" mb-5 md:mb-0">
            <p className=" text-lg font-normal">
              Хорошо виден в любых условиях
            </p>
            <p className=" text-zinc-200">
              Независимо от того, солнечно или темно, найдется подходящий режим
              экрана
            </p>
          </li>
          <li className="mb-5 md:mb-0">
            <p>Поддержка международных языков</p>
            <p>
              На современной стройке работают люди со всего мира. Язык не
              является проблемой для СтройКонтроля.
            </p>
          </li>
          <li className="mb-5 md:mb-0">
            <p>
              Работает на любом устройстве - мобильном телефоне, планшете,
              ноутбуке
            </p>
            <p>
              Люди на разных должностях используют разные устройства.
              СтройКонтроль автоматически настраивается в соответствии с
              требованиями. Вы также можете проецировать панели мониторинга
              живого проекта на настенные экраны.
            </p>
          </li>
        </ul>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-5 mx-auto" >
          <button className=" py-3 px-6 bg-white text-black  text-lg rounded-sm hover:bg-yellow-400 hover:text-black">
            Заказать
          </button>
          <button className=" border py-3 px-6 text-lg rounded-sm">
            Подробнее
          </button>
        </div>
      </div>
      <ul className=" container mx-auto py-28 md:gap-28  justify-between items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li
            className=" flex flex-col text-center items-center justify-center mb-10 md:mb-0 px-24 md:px-0"
            key={index}
          >
            <img src={item.icon} alt="" />
            <p className=" pt-5 text-lg "> {item.title}</p>
            <p className=" text-base text-gray-400">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mobbi;
