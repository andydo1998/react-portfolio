import React from "react";

import trollFace from "../../Images/troll-face.png"

export default function Header() {
    return (
        <header className="meme--header">
            <h1 className="meme--title">
                <img src={trollFace} className="meme--logo" alt="troll-face.png"></img>
                Meme Generator
            </h1>
            <p className="meme--course">Andy Do</p>
        </header>
    )
};