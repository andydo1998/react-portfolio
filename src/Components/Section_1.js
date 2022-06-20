import React from "react";

import DigitalBusinessCard from "../Apps/Digital_Business_Card"

export default function Section_1() {
    return (
        <div className="section--container">
            <div className="section--div">
                <p className="section_1--title">
                    Section 1: Static Pages
                </p>
                <div className="section_1--text">
                    <p>
                        In this section, I learned about what React is and what it does. Instead
                        of building one gigantic HTML page, React allows us to break down the page
                        into little bits called components. This allows us to make the code more
                        reusable and more scalable. React does this by creating a virtual DOM, to 
                        which it will compare it to the real DOM and update accordingly so that
                        it matches.
                    </p>
                    <p>
                        JSX is code that looks like HTML and is written in Javascript. Although
                        JSX is not required in React, it is extremely helpful. This allows us
                        to write HTML code in Javascript, instead of having all of the code
                        in the HTML file. JSX can not be interpretted by the browser, so a
                        translator (most commonly Babel) will convert the JSX code into a 
                        Javascript object. This object then gets rendered onto the virtual DOM
                        and from there, React will update the real DOM accordingly.
                    </p>
                    <p>
                        Check out this digital business card I made on the right! It was made
                        using all of the knowledge I learned in this section. We can see here
                        that this page is completely static. Everything is hard coded in, and
                        is not practical for real world practices.
                    </p>
                    <p>
                        (I don't have a LinkedIn (yet!) so the button will just redirect you to
                        the homepage)
                    </p>
                </div>
            </div>
            <div>
                <DigitalBusinessCard />
            </div>
        </div>
    )
}