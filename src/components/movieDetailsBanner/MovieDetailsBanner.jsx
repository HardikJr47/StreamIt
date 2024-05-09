/* eslint-disable react/prop-types */
import "./MovieDetailsBanner.css";
import dayjs from "dayjs";
import { fetchImagePath } from "../../utils/config";

const MovieDetailsBanner = ({ movieDetails }) => {
  return (
    <div className="mainContainer withSpace">
      <div className="detailsBanner">
        <div className="backdrop-img">
          <span>
            {movieDetails?.backdrop_path && (
              <img
                src={fetchImagePath + movieDetails?.backdrop_path}
                alt={movieDetails?.title}
              />
            )}
          </span>
        </div>
        <div className="opacity-layer"></div>
        <div className="smallContainer">
          <div className="movieDetailsWrap">
            <div className="left-block">
              {movieDetails?.poster_path ? (
                <img
                  src={fetchImagePath + movieDetails?.poster_path}
                  alt={movieDetails?.original_title}
                />
              ) : (
                <div className="dummyImg"> No Image</div>
              )}
            </div>
            <div className="right-block">
              <h1 className="title">
                {movieDetails?.title || movieDetails?.original_name}
              </h1>
              <h2 className="sub-title">{movieDetails?.tagline}</h2>
              <div className="genres">
                {movieDetails?.genres?.map((genre, index) => {
                  return <span key={index}>{genre?.name}</span>;
                })}
              </div>
              <div className="overview">
                <h4 style={{ marginBottom: "10px", fontSize: "20px" }}>
                  Overview
                </h4>
                <p>{movieDetails?.overview}</p>
              </div>
              <div className="infoList">
                <span>
                  Status: <span>{movieDetails?.status}</span>
                </span>
                <span>
                  Release Date:{" "}
                  <span>
                    {dayjs(movieDetails.release_date).format("DD MMM, YYYY") ||
                      dayjs(movieDetails?.first_air_date).format(
                        "DD MMM, YYYY"
                      )}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsBanner;
