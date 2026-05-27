import { Link } from "react-router-dom";
import { useState } from "react";
function Nav(){

    
    return(
    <header 
    style={{
      background:"rgba(255,255,255,0.8)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(12px)",
      padding:"15px 40px",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      position:"sticky",
      top:"0",
      zIndex: 1000,
      borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
      boxShadow: "0 4px 30px rgba(0,0,0,0.1)"
    }}
    >
    <Link to="/" style={{
        display:"flex",
        alignItems: "center",
        gap: "12px",
        textDecoration:"none"
    }}>
    <img 
        src="/logo.png.jpeg" 
        alt="Supreme Cryogenic" 
        style={{
            width:"70px",
            height:"70px",
            objectFit:"contain"
            
        }}
    />
    <div>
        <h1 style={{margin:"0", color:"#0B2447", fontSize:"32px" }}>SUPREME</h1>
        <p style={{margin:"0", color:"#00AEEF", letterSpacing:"6px" }}>CRYOGENIC</p>
    </div>
    </Link >
    
    
     <nav style={{ display: "flex", gap: "30px", alignItems: "center" }}>
         <Link to="/dry-ice" style={{
             color:"#0B2447", textDecoration: "none", fontSize:"18px", fontWeight: "500"
         }}>
             Dry Ice
         </Link>
         <Link to="/co2" style={{
             color:"#0B2447", textDecoration: "none", fontSize:"18px", fontWeight: "500"
         }}>
             CO2
         </Link>
         <Link to="/about" style={{
             color:"#0B2447", textDecoration: "none", fontSize:"18px", fontWeight: "500"
         }}>
             About us
         </Link>
         <Link to="/contact" style={{
             color:"#0B2447", textDecoration: "none", fontSize:"18px", fontWeight: "500"
         }}>
             Contact us
         </Link>
     </nav>
                
    </header>
            
    )
}
export default Nav;