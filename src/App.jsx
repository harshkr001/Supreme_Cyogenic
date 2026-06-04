import { useState } from "react";
import Login from "./Pages/Login";
import DryIce from "./Pages/DryIce";
import CO2 from "./Pages/CO2";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Updates from "./Pages/Updates";
import Footer from "./Components/Footer";
import DryIceBlocks from "./Pages/DryIceBlocks";
import DryIcePellets from "./Pages/DryIcePellets";
import Nav from "./Components/Nav";
import AuthModal from "./Components/AuthModal";
import { CheckoutPage } from "./Pages/CheckoutPage";
import { OrderSuccessPage } from "./Pages/OrderSuccessPage";
import { CartPage } from "./Pages/CartPage";
import { CartProvider } from "./Context/CartContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        <Nav onAuthClick={() => setIsAuthOpen(true)} />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/dry-ice" element={<DryIce />} />

          <Route path="/dry-ice/blocks" element={<DryIceBlocks />} />
          <Route path="/dry-ice-blocks" element={<DryIceBlocks />} />

          <Route path="/dry-ice/pellets" element={<DryIcePellets />} />
          <Route path="/dry-ice-pellets" element={<DryIcePellets />} />

          <Route path="/co2" element={<CO2 />} />

          <Route path="/about" element={<About />} />

          <Route path="/updates" element={<Updates />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/order-success" element={<OrderSuccessPage />} />

        </Routes>

        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;