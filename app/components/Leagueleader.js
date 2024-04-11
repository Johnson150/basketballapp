import React from 'react';

const LeagueLeaders = ({ players = [] }) => { // Default `players` to an empty array if undefined
    const findCategoryLeader = (category) => {
        return players.reduce((leader, player) => {
            return (leader[category] || 0) > player[category] ? leader : player;
        }, {}); // Ensure the initial value is provided
    };

    const categories = ['MPG', 'PPG', 'RPG', 'APG', 'SPG', 'BPG'];

    // Guard check to only process if `players` is not empty
    const leaders = players.length > 0 ? categories.map(category => ({
        category,
        player: findCategoryLeader(category)
    })) : [];

    return (
        <div>
            <h2>League Leaders</h2>
            {leaders.length > 0 ? (
                <ul>
                    {leaders.map(({ category, player }) => (
                        <li key={category}>
                            <strong>{category}:</strong> {player.name} - {player[category]}
                        </li>
                    ))}
                </ul>
            ) : <p>No player data available.</p>}
        </div>
    );
};

export default LeagueLeaders;
