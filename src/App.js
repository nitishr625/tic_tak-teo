import React from "react";
import Square from "./components/Square";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [steps, setStep] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkForWinner(gameState);
  }, [gameState]);

  const onClickHandler = (event) => {
    console.log(event.target.id);
    const copyOfGameState = [...gameState];
    if (!event.target.innerText) {
      copyOfGameState[event.target.id] = steps % 2 === 0 ? "X" : "O";
      setStep(steps + 1);
      setGameState(copyOfGameState);
    }
  };

  const resetGame = () => {
    setGameState(initialState);
    setStep(0);
  };

  const checkForWinner = () => {
    const winnerConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winnerConditions.forEach((condition) => {
      const [a, b, c] = condition;

      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        setWinner(gameState[a]);
        console.log("winner :", gameState[a]);
      }
    });
  };

  return (
    <div className="container">
      <div className="left-wrapper">
        <div className="left-text">Let's Play the game Tic-tac-toe</div>
        <div className="button" onClick={resetGame}>
          Start New Game
        </div>
      </div>
      {!winner && (
        <div className="right-wrapper">
          <div className="players">
            <div className={`player ${steps % 2 === 0 && "player-X"}`}>
              Player X
            </div>
            <div className={`player ${steps % 2 === 1 && "player-O"}`}>
              Player O
            </div>
          </div>
          <div className="game-wrapper" onClick={onClickHandler}>
            <Square
              id={0}
              state={gameState[0]}
              className="border-right-bottom"
            />
            <Square
              id={1}
              state={gameState[1]}
              className="border-right-bottom"
            />
            <Square id={2} state={gameState[2]} className="border-bottom" />
            <Square
              id={3}
              state={gameState[3]}
              className="border-right-bottom"
            />
            <Square
              id={4}
              state={gameState[4]}
              className="border-right-bottom"
            />
            <Square id={5} state={gameState[5]} className="border-bottom" />
            <Square id={6} state={gameState[6]} className="border-right" />
            <Square id={7} state={gameState[7]} className="border-right" />
            <Square id={8} state={gameState[8]} />
          </div>
        </div>
      )}
      {winner && (
        <div className="winner-wrapper">
          <img
            src="https://e7.pngegg.com/pngimages/701/109/png-clipart-celebrate-celebrate-float-thumbnail.png"
            width={120}
            height={100}
          />
          <div className="winner-text">{`${winner} Win!!`}</div>
        </div>
      )}
    </div>
  );
}

export default App;
