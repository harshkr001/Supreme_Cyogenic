function Features(){
    return(
        <section style={{
            padding:"80px 60px",
            background:"#081420",
            color:"white"
            }}>
            
            <h2 style={{
            textAlign:"center",
            fontSize:"42px",
            marginBottom:"50px"
            }}>
            Why Choose SUPREME CRYOGENIC?
            </h2>
            
            <div style={{
            display:"flex",
            justifyContent:"space-between",
            marginTop:"70px",
            gap:"40px"
            }}>
            
            <div className="card">
            ❄ Premium Dry Ice
            <p>High purity dry ice blocks & pellets for industrial use</p>
            </div>
            
            <div className="card">
            🚚 Fast Delivery
            <p>Reliable industrial logistics and fastsupply chain</p>
            </div>
            
            <div className="card">
            🧊 Cold Storage
            <p>Advanced Cryogenic handling and storage expertise</p>
            </div>
            
            </div>
            
        </section>

    )
}
export default Features;