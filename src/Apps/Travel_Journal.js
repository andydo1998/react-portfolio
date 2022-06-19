import React from "react";

import Header from "../Components/Travel_Journal/Header";
import Card from "../Components/Travel_Journal/Card";

import data from "../Data/data";

export default function App() {
    const dataArr = data.map(item => {
        return (
            <Card
                {...item}
            />
        )
    });


    return (
        <div className="travel_journal--container">
            <Header />
            {dataArr}
        </div>
    )
};