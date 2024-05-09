import "./MovieList.css";
import { MovieCard } from "../../components/movieCard/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { requests } from "../../utils/config";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  const getMovieList = async () => {
    await axios.get(requests.fetchMovie + `&page=${page}`).then((response) => {
      setMovieList((prev) => [...prev, ...(response?.data?.results ?? [])]);
      console.log(response?.data);
    });
  };

  useEffect(() => {
    getMovieList();
  }, [page]);

  const scrollHandle = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight - 80
    ) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
    return () => {
      return window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  return (
    <div className="mainContainer withSpace">
      <div className="mainTitle">All Movies</div>
      <div className="listsWrap">
        {movieList
          .map((movie, index) => {
            return <MovieCard ele={movie} key={index} />;
          })
          .slice(0, -2)}
      </div>
    </div>
  );
};

export default MovieList;
