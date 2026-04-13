import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Features from "../sections/Features";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default Home;