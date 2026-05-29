import Login from "./Pages/Login";
import DryIce from "./Pages/DryIce";
import CO2 from "./Pages/CO2";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import DryIceBlocks from "./Pages/DryIceBlocks";
import DryIcePellets from "./Pages/DryIcePellets";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";

function App() {
  return (
    <BrowserRouter>

      <Nav />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dry-ice" element={<DryIce />} />

        <Route path="/dry-ice/blocks" element={<DryIceBlocks />} />

        <Route path="/dry-ice/pellets" element={<DryIcePellets />} />

        <Route path="/co2" element={<CO2 />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;