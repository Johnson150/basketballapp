"use client";
import React, { useState } from "react";

const LeagueLeaders = ({ players }) => {
    const [category, setCategory] = useState("MPG");

    // Function to sort players based on selected category
    const sortPlayersByCategory = (category) => {
        return players.sort((a, b) => b[category] - a[category]).slice(0, 5);
    };

    // Function to render list of top players for selected category
    const renderTopPlayers = (category) => {
        const topPlayers = sortPlayersByCategory(category);
        return (
            <div>
                <h2>Top 5 Players - {category}</h2>
                <ul>
                    {topPlayers.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player[category]}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div>
            <h1>League Leaders</h1>
            <div>
                <label htmlFor="category">Select Category: </label>
                <select id="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="MPG">MPG</option>
                    <option value="PPG">PPG</option>
                    <option value="RPG">RPG</option>
                    <option value="APG">APG</option>
                    <option value="SPG">SPG</option>
                    <option value="BPG">BPG</option>
                </select>
            </div>
            {renderTopPlayers(category)}
        </div>
    );
};

export default LeagueLeaders;
