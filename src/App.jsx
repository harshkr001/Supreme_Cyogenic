import DryIce from "./Pages/DryIce";
import CO2 from "./Pages/CO2";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";

function App() {
  return (
    <BrowserRouter>

      <Nav />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dry-ice" element={<DryIce />} />

        <Route path="/co2" element={<CO2 />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;