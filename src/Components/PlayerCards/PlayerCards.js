import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';



const PlayerCards = (props) => {
    
    const renderPlayers = () => (
        props.data.map((item, i) => {
            return (
                <PlayerCard item={item} key={i} showInfo={props.showInfo}/>
            )
        })
     
    )
    
    return (
        <div className="playerCards py-2 container">
            <div className='row '>
                {renderPlayers()}
            </div>
        </div>
    )
}
 
export default PlayerCards;