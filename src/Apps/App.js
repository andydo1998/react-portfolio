import React from "react";

import Title from "../Components/Title";
import Die from "../Components/Die";
import Confetti from "react-confetti";

export default function App() {
    // variable to change the number of die to appear (default: 10)
    const NUMBER_OF_DIE = 10;

    // state for all dice
    const [dice, setDice] = React.useState(allNewDice());
    // state for amount of times rolled
    const [numRoll, setNumRoll] = React.useState(0);
    // state for best previous games
    const [prevBestRolls, setPrevBestRolls] = React.useState(null);

    // function to start off with all new dice
    function allNewDice() {
        let diceArr = [];

        for (let i = 0; i < NUMBER_OF_DIE; i++) {
            let randomNumber = Math.ceil(Math.random() * 6);
            diceArr.push(
                {
                    key: i,
                    diceValue: randomNumber,
                    hold: false
                }
            );
        }

        return diceArr;
    }

    // create individual die
    const allDice = dice.map(die => 
        <Die 
            key={die.key}
            diceValue={die.diceValue}
            hold={die.hold}
            onClick={() => freeze(die.key)}
        />
    )

    // function to roll all die
    function handleRoll() {
        setDice(oldDice => oldDice.map(die => {
            return die.hold ? 
                die :
                {
                    ...die,
                    diceValue: Math.ceil(Math.random() * 6),
                }
            }
        ))
        setNumRoll(oldNumRoll => oldNumRoll + 1);
    }
    
    // onClick function to freeze the die
    function freeze(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.key === id ? 
                {   
                    ...die, 
                    hold: !die.hold
                } :
                die
            }
        ))
    }

    // function to check if all dice match
    function userWon() {
        for (let i = 1; i < dice.length; i++) {
            if (dice[i].diceValue !== dice[i-1].diceValue) {
                return false;
            }
        }
        return true;
    }

    // function used to display winning message
    function winningMessage() {
        alert(`You won in ${numRoll} rolls!`);
    }

    // function used to reset the game (called once the user has won)
    function newGame() {
        // set best previous roll
        if (prevBestRolls === null || numRoll < prevBestRolls) {
            setPrevBestRolls(numRoll);
        }

        setDice(allNewDice());
        setNumRoll(0);
    }

    return (
        <main>
            {userWon() && (winningMessage() && <Confetti />)}
            <Title />
            <div className="dice--container">
                {allDice}
            </div>
            <div className="roll--container">
                {userWon() ? 
                <button className="roll--button" onClick={newGame}>New Game</button> :
                <button className="roll--button" onClick={handleRoll}>Roll</button>}
            </div>
            <div className="numRoll--container">
                <h2>Numbers of Rolls Used: {numRoll}</h2>
            </div>
            <div className="prevBest--container">
                {(prevBestRolls !== null) && <h2>Best game in this session (# of rolls): {prevBestRolls}</h2>}
            </div>
        </main>
    )
}