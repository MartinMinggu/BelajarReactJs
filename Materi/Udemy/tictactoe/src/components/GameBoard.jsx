const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
export default function GameBoard({ onSelectBox, board }) {

    return <ol id="game-board">
        {
            board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {
                        row.map((playerSimbol, colIndex) => <li key={colIndex}><button onClick={() => onSelectBox(rowIndex, colIndex)} disabled={playerSimbol != null}>{playerSimbol}</button></li>)
                    }
                </ol>
            </li>)
        }

    </ol>;
} 