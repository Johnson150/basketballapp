import React, { useState, useEffect } from "react";
import axios from "axios";

const fetchPlayer = async (playerId) => {
    try {
        const response = await axios.get(`/api/stats/${playerId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching player:", error);
        throw new Error("Failed to fetch player");
    }
};

const PlayerProfile = ({ playerId }) => {
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playerData = await fetchPlayer(playerId);
                setPlayer(playerData);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [playerId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!player) {
        return <div>Loading...</div>;
    }
    
    console.log(player);
    return (
        
        <div>  
            <h1>{player.Player}</h1>
            <p>Position: {player.Pos}</p>
            <p>Age: {player.Age}</p>
            <p>Team: {player.Tm}</p>
            <p>Games Played: {player.G}</p>
            {/* Render other player details as needed */}
        </div>
    );
};

export default PlayerProfile;
