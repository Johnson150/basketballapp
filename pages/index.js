import { useEffect, useState } from 'react';
import PlayerList from "../components/Playerlist";
import Addplayer from "../components/Addplayer";
import LeagueLeaders from "../components/Leagueleader";
import Header from "../components/header";
import '../app/globals.css';

const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/post', { cache: "no-cache" })
        if (!res.ok) {
          throw new Error("Failed to fetch data")
        }
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, []) // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <Header />
      <PlayerList players={posts} />
      <Addplayer />
      <LeagueLeaders players={posts} />
    </main>
  )
}

export default Page;
