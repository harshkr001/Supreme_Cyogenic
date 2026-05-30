import { Link } from "react-router-dom";
import { useState } from "react";
function Nav({ onAuthClick }){
    const [showDropdown, setShowDropdown] = useState(false);
    let timeout;

    
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
         
         <div
         style={{
         position:"relative"
         }}

         onMouseEnter={()=>{
            clearTimeout(timeout);
            setShowDropdown(true);
         }}

         onMouseLeave={()=>{
            timeout = setTimeout(()=>{
                setShowDropdown(false);
            },1500);
         }}
         >
         
         <span
         style={{
         color:"#0B2447",
         fontSize:"18px",
         fontWeight:"500",
         cursor:"pointer"
         }}
         >
         Dry Ice
         </span>
         {showDropdown && (
         
         <div
         className="dropdown-menu"
         >
         
         <Link to="/dry-ice/blocks" classsName="nav-link" 
         
         >
         Dry Ice Blocks
         </Link>
         
         <Link to="/dry-ice/pellets" className="nav-link" >
         Dry Ice Pellets
         </Link>
         
         </div>
         )}
         
         </div>
         <Link to="/co2" className="nav-link" style={{
             color:"#0B2447", textDecoration: "none", fontSize:"18px", fontWeight: "500"
         }}>
             CO2
         </Link>
         <Link to="/about" className="nav-link" style={{
             color:"#0B2447", textDecoration: "none", fontSize:"18px", fontWeight: "500"
         }}>
             About us
         </Link>
         <Link to="/contact" className="nav-link" style={{
             color:"#0B2447", textDecoration: "none", fontSize:"18px", fontWeight: "500"
         }}>
             Contact us
         </Link>
         <button
           type="button"
           onClick={onAuthClick}
           style={{
             borderRadius: "999px",
             border: "1px solid rgba(0, 174, 239, 0.35)",
             background: "rgba(7, 17, 31, 0.96)",
             color: "#D8F8FF",
             fontSize: "16px",
             fontWeight: "600",
             padding: "10px 18px",
             cursor: "pointer",
             transition: "transform 0.2s ease, background 0.2s ease"
           }}
           onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-1px)"}
           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
         >
           Login / Sign Up
         </button>
     </nav>
                
    </header>
            
    )
}
export default Nav;