"use client";
import React, { useState } from "react";

const PlayersList = ({ player }) => {
    const [inputValue, setInputValue] = useState(""); // To hold the value of the input field
    const [searchTerm, setSearchTerm] = useState(""); // To hold the value used for filtering

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        setSearchTerm(inputValue.toLowerCase()); // Update searchTerm with the current inputValue when search is clicked
    };

    const filteredPlayers = player.filter((player) =>
        player.name.toLowerCase().includes(searchTerm)
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
                {filteredPlayers.map((player) => (
                    <SearchPlayer key={player.id} player={player} />
                ))}
            </ul>
        </div>
    );
};

export default PlayersList;