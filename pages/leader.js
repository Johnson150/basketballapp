import React, { useState, useEffect } from 'react';
import LeadersList from '../components/Leagueleader';
import Header from '../components/header'; // Ensure proper capitalization for imports
import '../app/globals.css';
import Footer from '../components/footer'; // Ensure proper capitalization for imports

// Leaders Page for best performing players

const Leaders = () => {
    const [posts, setPosts] = useState([]);

    // useEffect hook to fetch data from the server
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
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-8 pb-20">
                <LeadersList players={posts} />
            </main>
            <Footer />
        </div>
    );
};

export default Leaders;
