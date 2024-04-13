"use client"
import React, { useState } from "react";

const PlayersList = ({ player = [] }) => {
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        setSearchTerm(inputValue.toLowerCase());
    };

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
                className="p-2 my-2 w-full" // Ensuring the input field uses full width
            />

            <button onClick={handleSearch} className="p-2 mt-2 bg-blue-500 text-white w-full">
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
