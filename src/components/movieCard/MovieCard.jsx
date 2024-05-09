/* eslint-disable react/prop-types */
import "./MovieCard.css";
import { fetchImagePath } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dayjs from "dayjs";
import "react-lazy-load-image-component/src/effects/blur.css";

export const MovieCard = ({ ele }) => {
  const navigate = useNavigate();
  return (
    <div
      className="movieCard"
      onClick={() => {
        navigate(`/${ele?.first_air_date ? "tv" : "movie"}/${ele?.id}`);
        window.scroll(0, 0);
      }}
    >
      <div className="imageBlock">
        {ele?.poster_path ? (
          <LazyLoadImage
            className="cardImg"
            src={fetchImagePath + ele?.poster_path}
            effect="blur"
            alt={ele?.title || ele?.name}
          />
        ) : (
          <div className="dummyImg"> No Image</div>
        )}
      </div>
      <div className="contentBlock">
        <h3>{ele?.title || ele?.name}</h3>
        <span className="date">
          {dayjs(ele.release_date).format("DD MMM, YYYY") ||
            dayjs(ele?.first_air_date).format("DD MMM, YYYY")}
        </span>
      </div>
    </div>
  );
};
