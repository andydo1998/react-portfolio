import React from "react";

import Digital_Business_Card from "../Apps/Digital_Business_Card"

export default function Section_1() {
    return (
        <div className="section_1--container">
            <div>
                <p className="section_1--title">
                    Section 1: Static Pages
                </p>
                <div className="section_1--text">
                    In this section, I learned about what React is and what it does. Instead
                    of building one gigantic HTML page, React allows us to break down the page
                    into little bits called components. This allows us to make the code more
                    reusable and more scalable. React does this by creating a virtual DOM, to 
                    which it will compare it to the real DOM and update accordingly so that
                    it matches.
                    <br /><br />
                    Check out this business card on the right I made via components!
                    <br />
                    (I don't have a LinkedIn (yet!) so the button will just redirect you to
                    the homepage)
                </div>
            </div>
            <div className="section_1--project">
                <Digital_Business_Card />
            </div>
        </div>
    )
}