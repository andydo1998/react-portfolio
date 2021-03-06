import React from "react";

import Tenzies from "../Apps/Tenzies";

export default function Section_4() {
    return (
        <div id="section4" className="section_4--container">
            <div className="section_4--description-container">
                <p className="section_4--description">
                    If you got here, I want to thank you so much 
                    for giving my little portfolio a read! There is still so much more for me to
                    learn, as well as numerous ways to improve my existing code! These past 3 weeks have been
                    an adventure to learn React and I hope that this little portfolio has shown you the amount
                    of content I have learned in the past weeks. To finish things off, here's this little Tenzies game
                    that I made!
                    <br />
                    <br />
                    <a href="https://github.com/andydo1998/react-portfolio/blob/master/src/Apps/Tenzies.js">App Source Code</a>
                    <br />
                    <a href="https://github.com/andydo1998/react-portfolio/tree/master/src/Components/Tenzies">Component Source Code</a>
                </p>
            </div>
            <div className="tenzies--container">
                <Tenzies />
            </div>
        </div>
    )
}