import React from "react";

import windowEmoji from "../../Images/window-emoji.png"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState([]);

    // API call
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(d => setAllMemes(d.data.memes))
    }, []);

    function getMemeImage() {
        let randomIndex = Math.floor(Math.random() * allMemes.length);
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                url: allMemes[randomIndex].url
            }
        });
    }

    function handleChange(event) {
        const {name, value} = event.target

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <div>
            <section className="meme">
                <input 
                    type="text" 
                    className="firstInput" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    placeholder="Top text"
                />
                <input
                    type="text"
                    className="secondInput"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    placeholder="Bottom text"
                />
            </section>
            <section className="meme--button--section">
                <button 
                    type="button" 
                    onClick={getMemeImage} 
                    className="meme--button">
                        Get a new random meme image 
                        <img src={windowEmoji} className="windowImage" alt="window emoji" />
                </button>
            </section>
            <section className="meme--image--container">
                <img src={meme.url} className="meme--image" alt="meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
            </section>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    )
};