import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);

  const links = [
    {
      name: "Главная",
      path: "home",
    },
    {
      name: "О нас",
      path: "us",
    },
    {
      name: "Продукция",
      path: "products",
    },
    {
      name: "Процесс",
      path: "process",
    },
    {
      name: "Нодёжность",
      path: "reability",
    },
    {
      name: "Клиенты",
      path: "clients",
    },
    {
      name: "Связаться с нами",
      path: "callback",
    },
  ];

  return (
    <div className="flex justify-between items-center container mx-auto py-3 z-40">
      <div>
        <Link>
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul
        className={`flex flex-col gap-3 sm:gap-x-1 md:gap-x-5 absolute lg:static lg:flex-row transition-all duration-500 ease-in bg-white w-full  justify-center   ${
          open ? "top-[-490px]" : "top-20"
        }`}
      >
        {links.map((link) => (
          <li className=" hover:text-yellow-500"  key={link.name}>
            <Link to={link.path}>
              <p>{link.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className=" flex justify-between items-center gap-8">
        <button className=" bg-black text-white px-5 py-1 rounded-md  hover:bg-yellow-400 hover:text-black">
          Заказать
        </button>
        <div className=" block lg:hidden" onClick={toggle}>
          {open ? (
            <RxHamburgerMenu className="w-6 h-6" />
          ) : (
            <IoMdClose className="w-6 h-6" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
