import React from "react";
import mixer from "../images/delivery/mixer.png";
import border from "../images/delivery/border.png";
import del from "../images/delivery/delete.png";
import panel from "../images/delivery/panel.png";
import fasad from "../images/delivery/fasad.png";
import fitOut from "../images/delivery/fit-out.png";
import ladder from "../images/delivery/ladder.png";
import buldozer from "../images/delivery/buldozer.png";
import electric from "../images/delivery/electric.png";

function Delivery() {
  const items = [
    {
      icon: mixer,
      head: "Бетон",
      title:
        "Поставки бетона точно планируются, а его состояние контролируется, что обеспечивает максимально возможное время для установки.",
    },
    {
      icon: del,
      head: "Утилизация отходов",
      title:
        "Отходы контролируются и сортируются, а заполненность контейнеров отслеживается в цифровом виде.",
    },
    {
      icon: border,
      head: "Опалубка",
      title:
        "Вся опалубка отслеживается от прибытия до отправления, а ее состояние контролируется, что сводит к минимуму потери и повреждения.",
    },
    {
      icon: panel,
      head: "Сборные панели",
      title:
        "Сборные панели прибывают по очереди, их хранение на месте отслеживается, а их установка планируется и контролируется.",
    },
    {
      icon: fasad,
      head: "Фасады",
      title:
        "Элементы фасада поступают последовательно, их сборка контролируется, а перемещение отслеживается.",
    },
    {
      icon: fitOut,
      head: "Отделка",
      title:
        "Материалы поступают точно в срок, маркируются и детально отслеживаются для установки.",
    },
    {
      icon: ladder,
      head: "Строительные леса",
      title:
        "Строительные леса отслеживаются от получения до хранения, использования и возврата, поэтому всегда ясно, что на месте и где.",
    },
    {
      icon: buldozer,
      head: "Оборудование",
      title:
        "Оборудование и операторы гарантированно доступны в случае необходимости, а их рабочее состояние отслеживается.",
    },
    {
      icon: electric,
      head: "Электрика и сантехника",
      title:
        "Доставка осуществляется в точной последовательности для сложной установки, что сокращает или устраняет необходимость в хранении.",
    },
  ];

  return (
    <div>
      <header>
        <h1 className=" text-3xl font-normal text-center mt-16">
          Доставка стала проще
        </h1>
        <p className=" text-center text-gray-400 py-10  text-xl">
          Мы позаботимся обо всех ваших различных поставках и их <br />{" "}
          многочисленных специализированных требованиях к разгрузке.
        </p>
      </header>
      <body className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto ">
        {items.map((item, index) => {
          return (
            <div
              className="flex flex-col items-center justify-between w-[325px] text-center mx-auto mt-10 md:mt-0"
              key={index}
            >
              <img className="py-4" src={item.icon} alt={item.head} />
              <h1 className="font-medium py-2">{item.head}</h1>
              <p className=" text-gray-400">{item.title}</p>
            </div>
          );
        })}
      </body>
      <p className=" text-center mt-10 text-xl text-gray-400" >
        <mark>...и все остальные материалы,</mark>которые поступают или покидают
        вашу площадку
      </p>
    </div>
  );
}

export default Delivery;
