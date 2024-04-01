import React from "react";
import worker from "../images/worker.png";

function Partner() {
  const items = [
    {
      title: "Заказать демо",
      description:
        "Вы увидите презентацию, в которой подробно объясняется, как работает СтройКонтроль для решения задач строительной логистики в таких сложных проектах, как ваш.",
    },
    {
      title: "Согласование сделки",
      description:
        "Мы обсудим ваш строительный проект и предложим реализацию СтройКонтроль, которая идеально соответствует вашим потребностям и будет иметь для вас ценность.",
    },
    {
      title: "Подготовка",
      description:
        "Мы полностью обучаем вашу команду тому, как использовать систему, с помощью онлайн-видеоуроков и обеспечиваем постоянную всестороннюю поддержку.",
    },
    {
      title: "Внедрение и интеграция",
      description:
        "Мы настраиваем программное обеспечение так, чтобы оно точно моделировало вашу площадку, а затем помогаем вам интегрировать его с программным обеспечением Business Intelligence для получения новых мощных аналитических данных.",
    },
  ];

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 container mx-auto py-20 md:w-1/2 gap-20">
      <div>
        <h1 className=" text-3xl">Как с нами работать</h1>
        <p className=" text-xl text-gray-400 py-10">
          Начать работу со СтройКонтроль легко, <br /> достаточно заказать
          демо-версию.
        </p>
        <img src={worker} alt="" />
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li className=" mb-10 list-decimal " key={index}>
              <h2 className=" text-lg font-normal mb-3">{item.title}</h2>
              <p className=" text-base font-normal text-gray-400 ">
                {item.description}
              </p>
            </li>
          ))}
          <div className=" grid grid-cols-1 2xl:grid-cols-2 gap-5">
            <button className=" text-white bg-black py-3 px-10 rounded-md hover:bg-yellow-400 hover:text-black ">
              Заказать
            </button>
            <button className="py-3 px-10 rounded-md border lg:ml-10 ">
              Подробнее
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Partner;
