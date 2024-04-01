import React from "react";
import first from "../images/clients/1.png";
import second from "../images/clients/2.png";
import third from "../images/clients/3.png";
import fourth from "../images/clients/4.png";

function Clients() {
  const items = [
    {
      icon: first,
    },
    {
      icon: second,
    },
    {
      icon: third,
    },
    {
      icon: fourth,
    },
  ];
  return (
    <div className=" container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3     2xl:grid-cols-4   w-full" >
      {items.map((item, index) => {
        return (
          <div className=" flex items-center justify-between mx-auto"  key={index}>
            <img src={item.icon} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Clients;
