<<<<<<< HEAD
function App() {
  return (
    <>
      <h1>Supreme cryogenic</h1>
      <p>Frontend project on mac</p>
    </>
    
  );
=======
function App(){
    return(
        <>
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
                <div style={{
                    display:"flex",
                    alignItems: "center",
                    gap: "12px"
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
                        <h1 style={{margin:"0", color:"#0B2447", fontSize:"32px", }}>SUPREME</h1>
    
                        <p style={{margin:"0", color:"#00AEEF", letterSpacing:"6px" }}>CRYOGENIC</p>
                    </div>
    
    
               </div>
               
                <nav style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                    <a href="#" className="nav-link" style={{
                        color:"#0B2447", textDecoration: "none", fontSize:"18px", fontWeight: "500"
                    }}>
                        Dry Ice
                    </a>
                    <a href="#" className="nav-link" style={{
                        color:"#0B2447", textDecoration: "none", fontSize:"18px", fontWeight: "500"
                    }}>
                        CO2
                    </a>
                    <a href="#" className="nav-link" style={{
                        color:"#0B2447", textDecoration: "none", fontSize:"18px", fontWeight: "500"
                    }}>
                        About us
                    </a>
                    <a href="#" className="nav-link" style={{
                        color:"#0B2447", textDecoration: "none", fontSize:"18px", fontWeight: "500"
                    }}>
                        Contact us
                    </a>
                </nav>
                
            </header>
            <section
                className="hero-section"
                style={{
                    background: "radial-gradient(circle at 70% 50%, #083c74 0%, #031c3a 45%, #000c1f 80%, #00050f 100%)",
                    minHeight:"85vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "70px",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <div style={{
                    color:"white",
                    maxWidth:"600px",
                    position: "relative",
                    zIndex: 2
                }}>
                    <h1 style={{
                        fontSize:"70px",
                        marginBottom:"10px",
                        lineHeight: "1.1",
                        fontWeight: "800"
                    }}>
                        Dry Ice Solutions
                    </h1>

                    <h2 style={{
                        fontSize:"40px",
                        color: "#00BFFF",
                        marginBottom:"20px",
                        fontWeight: "600"
                    }}>
                        For Every Need
                    </h2>

                    <p style={{
                        fontSize:"24px",
                        lineHeight:"1.8",
                        marginBottom:"30px",
                        opacity: 0.9
                    }}>
                        Supreme Cryogenic delivers high-quality dry ice products
                        with reliability and exceptional service since 2022.
                    </p>

                    <button className="cta-button" style={{
                        padding:"18px 35px",
                        background:"#00BFFF",
                        color:"white",
                        border:"none",
                        borderRadius:"10px",
                        fontSize:"20px",
                        fontWeight:"bold",
                        cursor:"pointer",
                        boxShadow:"0 10px 25px rgba(0,229,255,0.2)"
                    }}>
                        Explore our products →
                    </button>

                </div>

                <div className="hero-watermark">
                    <img 
                        src="/dry.png" 
                        alt="Dry Ice Watermark" 
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 40px rgba(0, 191, 255, 0.2))"
                        }}
                    />
                </div>

            </section>


            <section 
            style={{
                padding: "100px 60px",
                background: "linear-gradient(135 deg, #021B4D, #063B9B)",
                color:"white",
                textAlign:"center"
                

            }}
            >
                <h1 style={{fontSize:"42px"}}>
                    Why Industries Trust Supreme Cryogenic
                </h1>

                <p style={{
                    color:"#9FD8FF",
                    marginBottom: "50px"
                }}>
                    Reliable cryogenic solutions with premium quality
                    dry ice products
                </p>

                <div>
                    <div>
                        <h2>❄️ High quality dry ice</h2>
                        <p>Maximum purity and cooling</p>
                    </div>
                </div>
            </section>
        </>
    );

>>>>>>> b40a324edc9bb297e0674e9cb9535f2a80af6b31
}
export default App;