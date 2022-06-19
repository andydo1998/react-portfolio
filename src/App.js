import React from "react";

import Tenzies from "./Apps/Tenzies";

import Header from "./Components/Header";
import Section_1 from "./Components/Section_1";
import Section_2 from "./Components/Section_2";
import Section_3 from "./Components/Section_3";


// npm run deploy

export default function App() {
  return (
    <div>
      <Header />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Tenzies />
    </div>
  );
}