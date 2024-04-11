// PlayerSearch.js
"use client"
import React, { useState } from 'react';
import axios from 'axios';
import PlayerList from '../components/Playerlist';

const PlayerSearch = () => {
  const [query, setQuery] = useState('');
  const [players, setPlayers] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/players?query=${query}`);
      setPlayers(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search players"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <PlayerList players={players} />
    </div>
  );
};

export default PlayerSearch;
