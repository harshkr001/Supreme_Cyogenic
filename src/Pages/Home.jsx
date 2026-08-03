import HeroSection from "../Components/HeroSection";
import Features from "../Components/Features";
import Products from "../Components/Products";
import CustomerReviews from "../Components/CustomerReviews";
import ProcessTimeline from "../Components/ProcessTimeline";
import SocialMedia from "../Components/SocialMedia";

function Home(){

return(
    <>
      <HeroSection />
      <Features />
      <Products />
      <CustomerReviews />
      <ProcessTimeline />
      <div className="my-32">
         <SocialMedia />
      </div>
      
    </>

);

}

export default Home;