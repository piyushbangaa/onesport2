import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Herosection from "./components/Herosection";
import Heading from "./components/Heading";
import Bentogrid from "./components/Bentogrid";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Video from "./components/Video";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import Signup from "./Pages/Signup";
import Pricing from "./Pages/Pricing";
import Booking from "./Pages/Booking";

function Home() {
  return (
    <>
    <Navbar />
      <Herosection />
      <Heading />
      <Bentogrid />
      <Banner />
      <Video />
      <Features />
      <div className="border border-gray-900"></div>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
