import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import MovieList from "./pages/movies/MovieList";
import TvList from "./pages/tv/TvList";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<MovieList />} />
          <Route path="/tv" element={<TvList />} />
          <Route path="/:params/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
