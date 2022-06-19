import React from "react";

import Header from "../Components/Meme_Generator/Header";
import Meme from "../Components/Meme_Generator/Meme";

export default function Meme_Generator() {
    return (
        <div className="meme-generator--container">
            <Header />
            <Meme />
        </div>
    )
};