import React from "react";
import car from "../images/control/car.png";
import engineers from "../images/control/engineers.png";
import arxitector from "../images/control/arxitector.png";

function Control() {
  return (
    <div className=" container mx-auto">
      <header>
        <h1 className=" text-3xl text-center font-medium">
          Что такое СтройКонтроль?
        </h1>
        <p className=" text-xl text-gray-400 max-w-[827px]  mx-auto text-center py-8">
          СтройКонтроль - это интеллектуальная система управления доставкой,
          предоставляющая информацию и контроль материалов на сложных
          строительных площадках в режиме реального времени.
        </p>
      </header>
      <body className="py-16  ">
        <div className=" grid md:grid-cols-2 lg:w-2/3 mx-auto items-center">
          <div className=" text-center md:text-start mt-10 md:mt-0">
            <h5 className=" font-normal text-xl mb-5">
              Отслеживайте доставку по всей цепочке поставок
            </h5>
            <p className=" text-gray-400 ">
              От поставщика до субподрядчика - вы всегда знаете, где находятся
              ваши материалы, благодаря чему обычные отходы уходят в прошлое и
              сокращаются несчастные случаи на месте.
            </p>
          </div>
          <img
            className=" order-first md:order-last flex justify-center items-center mx-auto"
            src={car}
            alt=""
          />
        </div>
        <div className="grid md:grid-cols-2 lg:w-2/3 mx-auto items-center py-16">
          <img
            className="flex justify-center items-center mx-auto"
            src={engineers}
            alt=""
          />
          <div className="text-center md:text-start mt-10 md:mt-0">
            <h5 className=" font-normal text-xl mb-5">
              Оптимизируйте и контролируйте свое прибытие на место
            </h5>
            <p className=" text-gray-400 ">
              Транспортные средства доставки прибывают в фиксированные
              промежутки времени в заранее назначенные отсеки, где разгрузочное
              оборудование готово и ждет их.
            </p>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 lg:w-2/3 mx-auto items-center">
          <div className="text-center md:text-start mt-10 md:mt-0">
            <h5 className=" font-normal text-xl mb-5">
              Возьмите под контроль данные в режиме реального времени
            </h5>
            <p className=" text-gray-400 ">
              Интеллектуальная отчетность дает вам возможность принимать решения
              в зависимости от того, как обстоят дела в данный момент. Больше
              никаких ручных отчетов по заливке бетона или ежемесячной проверки
              10.000 накладных со счетами, все это доступно онлайн без
              каких-либо усилий.
            </p>
          </div>
          <img
            className=" order-first md:order-last  flex justify-center items-center mx-auto "
            src={arxitector}
            alt=""
          />
        </div>
      </body>
    </div>
  );
}

export default Control;
