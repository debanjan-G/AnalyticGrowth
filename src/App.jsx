import "./App.css";
import Cards from "./components/Cards";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="bg-gray-900 min-w-full overflow-x-hidden anta-regular">
      <Navbar />
      <Hero />
      <Dashboard />
      <Signup />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
