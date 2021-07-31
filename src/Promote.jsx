import React from 'react'
import Square from './Square';
import {movechess} from "./Game"

const promotionPieces = ['r','n','b','q'];

export default function Promote( {promotion : {from,to,color}}) {
    return (
        <div className = "board">
            {promotionPieces.map((p,i) => {
                console.log(`./assets/${p}_${color}.png`);
                return <div key = {i} className = "promote-square">
                        <Square black = {i % 3 === 0}>
                            <div className = "piece-container" onClick = {() => movechess(from,to,p)}>
                                <img src={require(`./assets/${p}_${color}.png`)} alt="#"
                                className = "piece cursor_pointer"/>
                            </div>
                        </Square>
                        
                    </div>
            })}
        </div>
    )
}
