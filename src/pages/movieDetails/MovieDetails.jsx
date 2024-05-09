import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, API_KEY } from "../../utils/config";
import MovieDetailsBanner from "../../components/movieDetailsBanner/MovieDetailsBanner";
import MovieCast from "../../components/movieCast/MovieCast";
import SimilarMovies from "../../components/sliderBlock/SimilarMovies";
import Recommendations from "../../components/sliderBlock/Recommendations";

const MovieDetails = () => {
  const { id, params } = useParams();
  const [movieDetails, SetMovieDetails] = useState([]);
  const [castDetails, setCastDetails] = useState([]);

  const getMovieDetails = async () => {
    await axios
      .get(`${BASE_URL}/${params}/${id}?api_key=${API_KEY}`)
      .then((respone) => {
        SetMovieDetails(respone.data);
        console.log(respone.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMovieCast = async () => {
    await axios
      .get(`${BASE_URL}/${params}/${id}/credits?api_key=${API_KEY}`)
      .then((respone) => {
        setCastDetails(respone.data);
        console.log(respone.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovieDetails();
    getMovieCast();
  }, [id]);

  return (
    <>
      <MovieDetailsBanner movieDetails={movieDetails} />
      <MovieCast castDetails={castDetails} />
      <SimilarMovies id={id} params={params} />
      <Recommendations id={id} params={params} />
    </>
  );
};

export default MovieDetails;
