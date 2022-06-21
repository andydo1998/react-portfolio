import React from "react";

import TravelJournal from "../Apps/Travel_Journal"

export default function Section_2() {
    return (
        <div className="section--container">
            <div className="section--div">
                <TravelJournal />
            </div>
            <div>
                <p className="section_2--title">
                    Section 2: Data Driven Pages
                </p>
                <div className="section_2--text">
                    <p>
                        Static pages are unrealistic- we often see pages that are dependant
                        on some form of data. When we think of popular websites such as Amazon
                        or YouTube, we will see different types of listing. On Amazon, this
                        would be the different types of items that are recommended. On YouTube,
                        this would be the different types of videos that get recommended to you.
                    </p>
                    <p>
                        It is unrealistic (and impossible) for web designers to create these
                        listings. Not only are these recommendations different everytime we
                        refresh the page, but they are different for everybody. 
                        It would be crazy for web designers to sit there and hard code every 
                        single page.
                    </p>
                    <p>
                        In this section, I learned about the use of mapping and props. Mapping 
                        allows us to create a collection of Javascript objects over n times
                        (very similar to a loop). Instead of making 5 &lt;div&gt; elements,
                        we can use mapping to create those 5 &lt;divs&gt; instead. To use mapping
                        further, we can also create multiple components as well.
                    </p>
                    <p>
                        As stated in the Amazon and YouTube example, web designers do not hard code
                        in information and often create components that will render the variables based
                        on an input. To do this in React, we use props. Props are data type that we pass
                        on from one component to another. We use props so we do not have to hard code
                        everything on the page. We can choose to pass anything as a prop (similar to
                        a function), but when components read in a prop, they will be read as a Javascript
                        object.
                    </p>
                    <p>
                        On the left, you can see this Traveling Journal that I made. I read in the data
                        and render them on the component where it belongs. With props, the data is responsible for
                        the information that you see. Using map, I can create as much components
                        as I need. In the case that I want to make a new listing, I can simply add onto my database and the new listing will
                        be rendered. No longer do I have to hard code the entire component!
                    </p>
                    <p>
                    <a href="https://github.com/andydo1998/react-portfolio/blob/master/src/Apps/Travel_Journal.js">App Source Code</a>
                    <br />
                    <a href="https://github.com/andydo1998/react-portfolio/tree/master/src/Components/Travel_Journal">Component Source Code</a>
                    </p>
                </div>
            </div>
        </div>
    )
}