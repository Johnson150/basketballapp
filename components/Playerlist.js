"use client";
import React, { useState } from "react";
import Player from "./Player";

const PlayerList = ({ players }) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [playerToEdit, setPlayerToEdit] = useState({});
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [inputValue, setInputValue] = useState(""); // To hold the value of the input field
    const [searchTerm, setSearchTerm] = useState(""); // To hold the value used for filtering


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        setSearchTerm(inputValue);
    };

    // Filter the players based on search term
   // Filter the players based on search term
    const filteredPlayers = players.filter((player) =>
        player.name && player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div>
            {/* Search input */}
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

            {/* Render the list of players */}
            <ul>
                {filteredPlayers.map((player) => (
                    <Player
                        key={player.id}
                        player={player}
                        setShowEditModal={setShowEditModal}
                        setShowDeleteModal={setShowDeleteModal}
                    />
                ))}
            </ul>


        </div>
    );
};

export default PlayerList;