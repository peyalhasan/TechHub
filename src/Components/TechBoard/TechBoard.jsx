import Dashboard from "./Dashboard";
import Hero from "./Hero";

const TechBoard = () => {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
            <Hero />
            <Dashboard />
        </main>
    );
};

export default TechBoard;