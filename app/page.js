import PlayerList from "./components/Playerlist";
import Addplayer from "./components/Addplayer";
import LeagueLeaders from "./components/Leagueleader";
import Search from "./components/Search";

async function getData() {
  const res = await fetch('http://localhost:3000/api/post', { cache: "no-cache" })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

const Page = async () => {
  const posts = await getData();
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <PlayerList player={posts} />
      <LeagueLeaders />
      <Addplayer />
      <Search />
    </main>
  );
};

export default Page;
