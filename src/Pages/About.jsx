import Footer from "../Components/Footer"

import AboutHero from "../Components/About/AboutHero";
import WhoWeAre from "../Components/About/WhoWeAre";
import CompanyTimeline from "../Components/About/CompanyTimeLine";
import OurMission from "../Components/About/OurMission";
import Infrastructure from "../Components/About/Infrastructure";
import OurProcess from "../Components/About/OurProcess";

function About() {
  return (
    <div
      style={{
        background: "#061224",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <AboutHero />

      <WhoWeAre />

      <CompanyTimeline />

      <OurMission />

      <Infrastructure />

      <OurProcess />

      
    </div>
  );
}

export default About;

