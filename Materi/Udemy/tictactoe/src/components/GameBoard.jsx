import { useState } from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
export default function GameBoard({ onSelectBox, activePlayer }) {
    const [GameBoard, setGameBoard] = useState(initialGameBoard);
    function handleButtonSelect(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayer;
            return updatedBoard;
        })
        onSelectBox();
    }
    return <ol id="game-board">
        {
            GameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {
                        row.map((playerSimbol, colIndex) => <li key={colIndex}><button onClick={() => handleButtonSelect(rowIndex, colIndex)}>{playerSimbol}</button></li>)
                    }
                </ol>
            </li>)
        }

    </ol>;
} 