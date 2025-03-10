import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Herosection from "./components/Herosection";
import Heading from "./components/Heading";
import Bentogrid from "./components/Bentogrid";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Video from "./components/Video";
import Login from "./Pages/login";
import TextHoverEffectDemo from "./components/TextHoverEffectDemo";

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
      <TextHoverEffectDemo/>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
