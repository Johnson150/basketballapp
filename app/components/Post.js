import React from "react";

const Post = ({ player }) => {
    return (
        <li className="p-3 my-5 bg-slate-300">
            <h1>{player.name || 'Unknown Player'}</h1>
            <p>Team: {player.team || 'N/A'}</p>
            <p>MPG: {player.MPG ? player.MPG.toFixed(2) : 'N/A'}</p>
            <p>PPG: {player.PPG ? player.PPG.toFixed(2) : 'N/A'}</p>
            <p>RPG: {player.RPG ? player.RPG.toFixed(2) : 'N/A'}</p>
            <p>APG: {player.APG ? player.APG.toFixed(2) : 'N/A'}</p>
            <p>SPG: {player.SPG ? player.SPG.toFixed(2) : 'N/A'}</p>
            <p>BPG: {player.BPG ? player.BPG.toFixed(2) : 'N/A'}</p>
        </li>
    );
};

export default Post;
