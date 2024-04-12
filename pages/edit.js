import React, { useState, useEffect } from 'react';
import PlayerList from '../components/Playerlist';
import Addplayer from '../components/Addplayer';
import Header from '../components/header';
const Add = () => {
    const [posts, setPosts] = useState([]);

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
    }, []); // Empty dependency array ensures useEffect only runs once on component mount

    return (
        <div>
            <h1>Add Page</h1>
            <Header />
            <Addplayer />
            <PlayerList players={posts} />
        </div>
    );
};

export default Add;