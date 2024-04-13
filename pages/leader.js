import React, { useState, useEffect } from 'react';
import LeadersList from '../components/Leagueleader';
import Header from '../components/header';
import '../app/globals.css';
import Footer from '../components/footer';
const Leaders = () => {
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
    }, []);

    return (
        <div>
            <Header />
            <LeadersList players={posts} />
            <Footer />
        </div>
    );
};

export default Leaders;