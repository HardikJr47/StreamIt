import "./HeroBanner.css";
import bannerImg from "../../assets/background_banner.jpg";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="backdrop-img">
        <img src={bannerImg} alt="background_banner" />
      </div>
      <div className="opacity-layer"></div>
      <div className="mainContainer">
        <div className="banner-content ">
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
