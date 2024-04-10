import React from 'react';
import Player from './Player';

const PlayerList = ({ players }) => {
    console.log("I am in PlayerList", players);

    return (
        <ul>
            {players.map((player) => (
                <Player player={player} key={player.id} />
            ))}
        </ul>
    );
};

export default PlayerList;
