import React from "react";

export default function Die(props) {
    return (
        <div>
            <button className={props.hold ? "die--hold" : "die--open"} onClick={props.onClick}>
                {props.diceValue}
            </button>
        </div>
    )
}