import Navbar from "./components/navbar"
import Herosection from "./components/Herosection"
import Heading from "./components/Heading"
import Bentogrid from "./components/Bentogrid"
import Banner from "./components/Banner"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Video from "./components/Video"

function App() {
  return (
    <>
     <Navbar/>
     <Herosection/>
     <Heading/>
     <Bentogrid/>
     <Banner/>
     <Video/>
     <Features/>
     <div className="border border-gray-900"></div>
     <Footer/>
    </>
  )
}

export default App
