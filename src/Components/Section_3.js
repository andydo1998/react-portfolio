import React from "react";

import MemeGenerator from "../Apps/Meme_Generator"

export default function Section_3() {
    return (
        <div id="section3">
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
                <div>
                    <ul className="section_3--ul--list">
                        <li>State</li>
                        <p>
                            States are a special type of data in React. In normal HTML/CSS/Javascript web development,
                            if we create a variable, that variable will only change in the same instance. If we change
                            the variable and reopen the website, the variable will go back to its originality. One way
                            to get around this is the use of storing data in some form of storage; whether that is 
                            a database file or localStorage. However, in order to update the variable on the page, we would need
                            to refresh the page. States allow us to create variables that can get updated, and will re-render the
                            component if the state has been changed. Because of this, we no longer have to refresh the page
                            if something gets changed/updated!
                        </p>
                        <li>Conditional Rendering</li>
                        <p>
                            In many cases, we may only choose to render a component only if a condition satisfies.
                            This can be done with a technique called short-circuiting, where if we have an AND operator,
                            the first instance of a FALSE evaluation will ignore the rest of the expression, even if
                            the remaining is true. Using this knowledge, we can put a condition, the AND operator, and then
                            the component to render.
                        </p>
                    </ul>
                </div>
                <div>
                    <ul className="section_3--ul--list">
                    <li>Forms</li>
                        <p>
                            Forms are very similar like they are to HTML, however we need to include a value attribute
                            as well as a way to handle changes to form tags. Unlike standard HTML where the inputs in a form
                            gets processed when we hit the submit button, React will constantly update the state on every
                            change. It is also important to note that any buttons in a form element will be treated as a 
                            submit button type on default.
                        </p>
                        <li>Hooks</li>
                        <p>
                            No longer do we have to write a class for states and React functions! Instead, hooks allow
                            us add functions onto our React states. The most common hooks are useState and useEffect.
                            The description of states is given in its section. useEffect allows us to deal with the
                            side effects (when a function modifies anything outside of its body) of functions by including
                            a dependency array. The component will change if it sees that the dependency array has changed.
                            If the dependency array has not changed, the function will not run.
                        </p>
                    </ul>
                </div>
            </div>
            <div className="section_3--project-container">
                <div className="section_3--project-introduction">
                    For this section's project, I created a meme generator. An API call is used to obtain the
                    top 100 most used meme images. Because of this API call, I had to use useEffect in order to
                    not cause the page to re-render because of the asynchronous API calls for data. Using forms
                    and states, any text that is inputted will get rendered on the meme image in a meme format.
                    Try it yourself below- but please note that this is assuming that this is in the standard
                    meme format (top text followed by bottom text on top of a meme image). Not all memes follow this format,
                    and because this API returns the 100 most commonly used meme image, we might get a meme image that does
                    not follow this format.
                    <p>
                        <a href="https://github.com/andydo1998/react-portfolio/blob/master/src/Apps/Meme_Generator.js">App Source Code</a>
                        <br />
                        <a href="https://github.com/andydo1998/react-portfolio/tree/master/src/Components/Meme_Generator">Component Source Code</a>
                    </p>
                </div>
            </div>
            <div className="section_3--meme-container">
                <MemeGenerator />
            </div>
        </div>
    )
}