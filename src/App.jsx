import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Convenience from "./components/Convenience";
import Construction from "./components/Construction";
import Order from "./components/Order";
import Brand from "./components/Brand";
import Control from "./components/Control";
import Delivery from "./components/Delivery";
import Reability from "./components/Reability";
import Mobbi from "./components/Mobbi";
import Partner from "./components/Partner";
import Selection from "./components/Selection";
import Clients from "./components/Clients";
import Fuel from "./components/Fuel";
import Address from "./components/Address";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Hero />
      <Convenience />
      <Construction />
      <Order />
      <Brand />
      <Control />
      <Delivery />
      <Reability />
      <Mobbi />
      <Partner />
      <Selection />
      <Clients />
      <Fuel />
      <Address />
      <Footer/>
    </div>
  );
}

export default App;
