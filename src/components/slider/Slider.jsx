/* eslint-disable react/prop-types */
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MovieCard } from "../movieCard/MovieCard";

const MainSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {data
          .filter((ele) => ele?.poster_path !== null)
          .map((ele, index) => {
            return <MovieCard ele={ele} key={index} />;
          })}
      </Slider>
    </>
  );
};

export default MainSlider;
