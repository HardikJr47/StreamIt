import "./Home.css";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import TrendingMovies from "../../components/sliderBlock/TrendingMovies";
import TopRatedMovies from "../../components/sliderBlock/TopRatedMovies";
import Upcoming from "../../components/sliderBlock/UpcomingMovies";
import NetflixOriginalMovies from "../../components/sliderBlock/NetflixOriginalMovies";
import ActionMovies from "../../components/sliderBlock/ActionMovies";
import HorrorMovies from "../../components/sliderBlock/HorrorMovies";
import ComedyMovies from "../../components/sliderBlock/ComedyMovies";
import RomanceMovies from "../../components/sliderBlock/RomanceMovies";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <TrendingMovies />
      <TopRatedMovies />
      <Upcoming />
      <NetflixOriginalMovies />
      <ActionMovies />
      <HorrorMovies />
      <ComedyMovies />
      <RomanceMovies />
    </>
  );
};

export default Home;
