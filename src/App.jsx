import { Routes, Route } from "react-router-dom";
import './App.css'
import Body from "./Component/Body";
import Navbar from "./Component/Navbar";
import About from "./About";
import Contact from "./Component/Contact";
function App() {
  return (
    <>
      <Navbar />   {/* Always visible */}
      
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;