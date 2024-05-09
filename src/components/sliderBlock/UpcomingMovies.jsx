import { useEffect, useState } from "react";
import MainSlider from "../slider/Slider";
import axios from "axios";
import { requests } from "../../utils/config";

const UpcomingMovies = () => {
  const [streamData, setStreamData] = useState([]);

  const getStreamData = async () => {
    await axios
      .get(requests.fetchUpcomingMovies)
      .then((respone) => {
        console.log(respone?.data?.results);
        setStreamData(respone?.data?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStreamData();
  }, []);

  return (
    streamData.length !== 0 && (
      <div className="sliderContainer mainContainer">
        <h3 className="sliderTitle">Upcoming Movies</h3>
        <MainSlider data={streamData} />
      </div>
    )
  );
};

export default UpcomingMovies;
