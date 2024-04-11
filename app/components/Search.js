"use client"
import React, { useState } from "react";
import Post from "./Post"; // Assuming Post is your player display component

const PlayersList = ({ players }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="p-2 my-2"
            />
            <ul>
                {filteredPlayers.map((player) => (
                    <Post key={player.id} player={player} />
                ))}
            </ul>
        </div>
    );
};

export default PlayersList;
