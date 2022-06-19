import React from "react";

import Meme_Generator from "../Apps/Meme_Generator"

export default function Section_3() {
    return (
        <div>
            <div className="section_3--title">
                Section 3: Interactive Web Apps
            </div>
            <div className="section_3--description--container">
                <p className="section_3--text">
                Finally, onto the fun stuff! In this section, I learned about all the different
                techniques to make a functional, interactive web applications. There will be a lot
                of topics covered in this section, so I will break them up into a list below!
                </p>
            </div>
            <div className="section_3--list--container">
                <ul className="section_3--ul--list">
                    <li>State</li>
                    <li>Conditional Rendering</li>
                    <li>Event Listeners</li>
                    <li>Forms</li>
                    <li>Hooks</li>
                    <li>Side effects</li>
                </ul>
            </div>
            <div>
                <Meme_Generator />
            </div>
        </div>
    )
}