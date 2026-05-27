function Products(){
    return(
        <section
            id="products"
            style={{
            padding:"100px 60px",
            background:"#06111F",
            color:"white"
            }}
            >
            
            <h2
            style={{
            textAlign:"center",
            fontSize:"46px",
            marginBottom:"20px",
            fontWeight:"bold"
            }}
            >
            Our Products
            </h2>
            
            <p
            style={{
            textAlign:"center",
            color:"#B0C4DE",
            marginBottom:"70px",
            fontSize:"18px"
            }}
            >
            Premium cryogenic products designed for industrial applications
            </p>
            
            <div
            style={{
            display:"flex",
            justifyContent:"center",
            gap:"35px",
            flexWrap:"wrap"
            }}
            >
            
            <div className="product-card">
            
            <div style={{
            fontSize:"52px",
            marginBottom:"20px"
            }}>
            ❄
            </div>
            
            <h3 style={{
            fontSize:"28px",
            marginBottom:"15px"
            }}>
            Dry Ice Blocks
            </h3>
            
            <p style={{
            color:"#C8D6E5",
            lineHeight:"1.8"
            }}>
            Industrial cooling, transportation and temperature controlled logistics solutions.
            </p>
            
            </div>
            
            <div className="product-card">
            
            <div style={{
            fontSize:"52px",
            marginBottom:"20px"
            }}>
            🧊
            </div>
            
            <h3 style={{
            fontSize:"28px",
            marginBottom:"15px"
            }}>
            Dry Ice Pellets
            </h3>
            
            <p style={{
            color:"#C8D6E5",
            lineHeight:"1.8"
            }}>
            High purity pellets suitable for industrial cleaning and cryogenic applications.
            </p>
            
            </div>
            
            <div className="product-card">
            
            <div style={{
            fontSize:"52px",
            marginBottom:"20px"
            }}>
            🌫
            </div>
            
            <h3 style={{
            fontSize:"28px",
            marginBottom:"15px"
            }}>
            CO₂ Solutions
            </h3>
            
            <p style={{
            color:"#C8D6E5",
            lineHeight:"1.8"
            }}>
            Reliable cryogenic gas supply solutions for industrial operations.
            </p>
            
            </div>
            
            </div>
            
        </section>
            
    )
}
export default Products;