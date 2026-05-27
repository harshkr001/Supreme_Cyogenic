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
        <a href="#products">
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
        </a>
        
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
           display:"flex",
           alignItems:"center",
           justifyContent:"center",
           marginTop:"-120px"
         }}
         >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "700px",
            height: "450px",
            objectFit: "cover",
            borderRadius: "24px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            animation: "float 5s ease-in-out infinite",
            marginTop:"-60px"
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