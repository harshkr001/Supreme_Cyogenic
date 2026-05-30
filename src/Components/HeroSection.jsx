import heroVideo from "../assets/hero-video.mp4";
function HeroSection(){
    return(
       <section
        className="hero-section"
        style={{
            background: "radial-gradient(circle at 70% 50%, #083c74 0%, #031c3a 45%, #000c1f 80%, #00050f 100%)",
            minHeight:"85vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "180px",
            padding: "70px",
            position: "relative",
            overflow: "hidden"
        }}
        >
        <div style={{
            color:"white",
            maxWidth:"450px",
            position: "relative",
            zIndex: 2,
            marginLeft:"40px",
            marginRight:"100px"

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
        <p className="hero-text"
         style={{
            fontSize:"24px",
            lineHeight:"1.8",
            marginBottom:"30px",
            opacity: 0.9
         }}
        >
            Supreme Cryogenic delivers high-quality dry ice products with reliability and exceptional service since 2022.
            
        </p>
        
        <div style={{
        display:"flex",
        gap:"20px",
        marginTop:"30px",
        alignItems:"center"
      }}>

      <a href="#products">
        <button style={{
          padding:"18px 35px",
          background:"#00BFFF",
          color:"white",
          border:"none",
          borderRadius:"12px",
          fontSize:"20px",
          fontWeight:"bold",
          cursor:"pointer",
          boxShadow:"0 10px 25px rgba(0,229,255,0.2)"
        }}>
          Explore Products →
        </button>
      </a>

      <a href="/login">
        <button style={{
          padding:"18px 35px",
          background:"white",
          color:"black",
          border:"2px solid #ddd",
          borderRadius:"12px",
          fontSize:"18px",
          fontWeight:"bold",
          cursor:"pointer"
        }}>
          Login / Sign Up
        </button>
      </a>

      

      </div>
        
        <div
        style={{
        display:"flex",
        gap:"40px",
        marginTop:"40px"
        }}
        >
        
        <div>
        <h2 style={{color:"#00AEEF"}}>2022+</h2>
        <p>Serving Since</p>
        </div>
                    
         <div>
         <h2 style={{color:"#00AEEF"}}>100%</h2>
         <p>Premium Quality</p>
         </div>
         
         <div>
         <h2 style={{color:"#00AEEF"}}>24/7</h2>
         <p>Supply Support</p>
         </div>
         
         </div>


        </div >
        <div className="hero-watermark"
         style={{
           position:"absolute",
           top:0,
           left: "50%",
           marginLeft: "calc(-50vw)",
           width: "100vw",
           height:"100%",
           zIndex: 1,
           overflow: "hidden",
           
           
         }}
         >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            minWidth: "100vw",
            objectFit: "cover",
            borderRadius: 0,
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            opacity: 0.7,
            pointerEvents: "none",
          }}
        > 
        <source src={heroVideo} type="video/mp4" />
        </video>
        <div
           style={{
           position:"absolute",
           width:"220px",
           height:"220px",
           background:"rgba(0,174,239,0.18)",
           filter:"blur(90px)",
           right:"80px",
           top:"50%",
           transform:"translateY(-50%)",
           zIndex:-1,
           marginTop:"40px"
           }}
           />     

        </div>
        </section>
 
    )
}
export default HeroSection;