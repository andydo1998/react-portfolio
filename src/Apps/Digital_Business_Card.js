import React from "react";

import Info from "../Components/Digital_Business_Card/Info";
import About from "../Components/Digital_Business_Card/About";
import Interests from "../Components/Digital_Business_Card/Interests";

export default function Digital_Business_Card() {
    return (
        <div className="business-card--container">
            <Info />
            <About />
            <Interests />
        </div>
    )
};