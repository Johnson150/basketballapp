import Header from "../components/header";
import '../app/globals.css';
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-8">Welcome to NBA Player App</h1>
        <p className="text-xl text-gray-700 text-center">Your job is to update the player database you can Delete, Update and Add new players to the NBA player app, For the 2023 - 2024 NBA season.</p>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
