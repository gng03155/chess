import React, { useCallback, useEffect, useState } from 'react'
import BoardSquare from './BoardSquare'

export default function Board({ board, turn }) {

    const [currBoard, setCurrBoard] = useState([]);
    useEffect(() => {
        setCurrBoard(
            turn === "w" ? board.flat() : board.flat().reverse()
        )
    }, [board, turn])

    const getXYPosition = useCallback((i) => {
        // const x = i % 8;
        // const y = Math.abs(Math.floor(i/8)-7);
        let x = i % 8 !== 0 ? i % 8 : 8;
        let y = i % 8 !== 0 ? Math.floor(i / 8) : Math.floor((i - 1) / 8);
        if (turn !== "w") {
            x = Math.abs(x - 9);
            y = Math.abs(y - 7);
        }
        return { x, y }
    }, [turn])

    const isBlack = useCallback((i) => {
        const { x, y } = getXYPosition(i);
        // const a = (x+y) % 2;
        // console.log(`x : ${x} , y : ${y} , i : ${i} , t : ${a} `);
        // let evenCheck = false;
        // console.log(`i : ${i / 8}`);
        // return evenCheck = i % 2 === 0 ? true : false;

        return (x + y) % 2 === 0;

    }, [getXYPosition])

    function getPosition(i) {
        let { x, y } = getXYPosition(i);
        // 0,1,2,3,4,5,6,7 
        y = Math.abs(y - 7);
        const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][x - 1];
        return `${letter}${y + 1}`;

    }

    return (
        <div className="board">
            {currBoard.flat().map((piece, i) => {
                return <div key={i} className="square">
                    <BoardSquare
                        piece={piece}
                        black={isBlack(i + 1)}
                        position={getPosition(i + 1)}
                    />
                </div>
            }

            )}
        </div>
    )
}
