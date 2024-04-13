"use client"
import React, { useState } from "react";

const PlayersList = ({ player = [] }) => { // Assuming 'player' is meant to be an array and defaulting it to an empty array
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        setSearchTerm(inputValue.toLowerCase());
    };

    // Ensuring the search is case-insensitive even if searchTerm is set directly to inputValue
    const filteredPlayers = player.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log("Filtered Players:", filteredPlayers);

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name..."
                value={inputValue}
                onChange={handleInputChange}
                className="p-2 my-2"
            />

            <button onClick={handleSearch} className="p-2 my-2 bg-blue-500 text-white">
                Search
            </button>
            <ul>
                {filteredPlayers.map(p => (
                    <SearchPlayer key={p.id} player={p} />
                ))}
            </ul>
        </div>
    );
};

export default PlayersList;
