import React from "react";
import up from "../images/convenience/up.png";
import notice from "../images/convenience/notice.png";
import hat from "../images/convenience/hat.png";

function Convenience() {
  return (
    <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
      <div className=" flex flex-col items-center  justify-around w-[325px] mx-auto text-center mb-5">
        <img className="py-4" src={up} alt="" />
        <h1 className="font-medium py-2">Повышение эффективности</h1>
        <p className=" text-gray-400">
          Эффективные проекты стоят дешевле и завершаются в срок.
        </p>
      </div>
      <div className=" flex flex-col items-center justify-around w-[325px] mx-auto text-center mb-5">
        <img className="py-4" src={notice} alt="" />
        <h1 className="font-medium py-2">Снижение потерь</h1>
        <p className="text-gray-400">
          Тщательно отслеживайте движение стройматериалов, чтобы избежать краж и
          повреждений.
        </p>
      </div>
      <div className=" flex flex-col items-center justify-around w-[325px] mx-auto text-center mb-5">
        <img className="py-4" src={hat} alt="" />
        <h1 className="font-medium py-2">Повышение безопасности</h1>
        <p className=" text-gray-400">
          Обеспечьте здоровье и благополучие людей, работающих на вашей
          площадке.
        </p>
      </div>
    </div>
  );
}

export default Convenience;
