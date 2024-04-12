import React, { useState, useEffect } from 'react';
import LeadersList from '../components/LeadersList';

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
      <h1>League Leaders Page</h1>
      <LeadersList players={posts}/> 
    </div>
  );
};

export default Leaders;
