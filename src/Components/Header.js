import React from "react";

export default function Header() {
    return (
        <div>
            <h1 className="header--title">Hi there! My name is Andy.</h1>
            <p className="header--title2">Welcome to my React Portfolio!</p>
            <div className="header--description--container">
                <p className="header--description">
                    A little bit about myself!<br /><br />
                    I recently graduated from University of California, San Diego (June 12th, 2022) 
                    with a Data Science degree. I made this little portfolio to demonstrate
                    the materials I have learned within 3 weeks. Over the past 3 weeks, I have been
                    learning React via a 12 hour course on YouTube, offered by freeCodeCamp.org
                    (thank you freeCodeCamp!).
                    Through this course, I was able to learn how React works, as well as
                    building projects for each section of the course. In this little portfolio,
                    I will show off the projects I've made, as well as an outline of the topics
                    I have learned through this course!
                </p>
            </div>
            <div className="header--disclaimer--container">
                <p className="header--disclaimer">
                    Disclaimer: None of the public images used are mine. These pictures
                    are used for educational and demonstrational purposes. All credits go to the
                    original creator. By no means am I an expert. Each source code will be linked,
                    but they are definitely not efficient nor optimal. Throughout the course, my code
                    becomes significantly better, but I still chose to keep my old code so I can
                    look back and reflect (AKA laugh at myself). You can never get better if you don't start 
                    somewhere.
                </p>
            </div>
            <p className="header--started--text">Let's get started!</p>
        </div>
    )
}