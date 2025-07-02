const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
export default function GameBoard({ onSelectBox, turns }) {
    //     // tidak optimal jika papannya di simpan disini karena logs butuh informasi game boardnya setiap ada perubahan, jadi sebaiknya di naikin ke componen induknya 
    // const [GameBoard, setGameBoard] = useState(initialGameBoard);
    // function handleButtonSelect(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayer;
    //         return updatedBoard;
    //     })
    //     onSelectBox();
    // }
    console.log("turns: " + turns);
    let gameBoard = initialGameBoard;
    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    return <ol id="game-board">
        {
            gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {
                        row.map((playerSimbol, colIndex) => <li key={colIndex}><button onClick={() => onSelectBox(rowIndex, colIndex)}>{playerSimbol}</button></li>)
                    }
                </ol>
            </li>)
        }

    </ol>;
} 