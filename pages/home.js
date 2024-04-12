import Header from "../components/header";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center my-8">Welcome to NBA Player App</h1>
            </div>
        </div>
    );
};

export default Home;
