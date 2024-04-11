import React, { useState, useEffect } from "react";
import axios from "axios";
import Stats from "./Stats";

const StatsList = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        // Fetch stats data from Prisma API
        axios.get("/api/stats")
            .then((response) => {
                let responseData = response.data;
                if (!Array.isArray(responseData)) {
                    // If the data is not an array, convert it to an array
                    responseData = [responseData];
                }
                setStats(responseData);
            })
            .catch((error) => {
                console.error("Error fetching stats:", error);
            });
    }, []);

    return (
        <div>
            <h1>List of Stats</h1>
            <ul>
                {stats.map((statsItem) => (
                    <Stats key={statsItem.id} stats={statsItem} />
                ))}
            </ul>
        </div>
    );
};

export default StatsList;
