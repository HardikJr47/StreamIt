/* eslint-disable react/prop-types */
import "./MovieCast.css";
import { fetchImagePath } from "../../utils/config";

const MovieCast = ({ castDetails }) => {
  return (
    <div className="cast smallContainer">
      <h3 className="mainTitle">Top Cast</h3>
      <div className="castWrap">
        {castDetails?.cast?.map((castinfo, index) => {
          return (
            <div className="castCard" key={index}>
              {castinfo?.profile_path ? (
                <img src={fetchImagePath + castinfo?.profile_path} alt="Cast" />
              ) : (
                <div className="dummyImg"> No Image</div>
              )}
              <h3>{castinfo?.name || castinfo?.original_name}</h3>
              <p>{castinfo?.character}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCast;
