import React from "react";

import Header from "./Components/Header";
import Section1 from "./Components/Section_1";
import Section2 from "./Components/Section_2";
import Section3 from "./Components/Section_3";
import Section4 from "./Components/Section_4";

// npm run deploy

export default function App() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}