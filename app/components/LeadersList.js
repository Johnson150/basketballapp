import React, { useState, useEffect } from "react";

const LeadersList = () => {
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState("MPG");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/post', { cache: "no-cache" });
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Function to sort players based on selected category
    const sortPlayersByCategory = (category) => {
        return posts.sort((a, b) => b[category] - a[category]).slice(0, 5);
    };

    // Function to render list of top players for selected category
    const renderTopPlayers = (category) => {
        const topPlayers = sortPlayersByCategory(category);
        return (
            <div>
                <h2>Top 5 Players in {category}</h2>
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

export default LeadersList;
