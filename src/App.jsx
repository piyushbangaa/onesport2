import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Herosection from "./components/Herosection";
import Heading from "./components/Heading";
import Bentogrid from "./components/Bentogrid";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Video from "./components/Video";
import Login from "./Pages/login";

function Home() {
  return (
    <>
      <Herosection />
      <Heading />
      <Bentogrid />
      <Banner />
      <Video />
      <Features />
      <div className="border border-gray-900"></div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
