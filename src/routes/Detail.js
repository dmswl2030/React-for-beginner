import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true); //로딩이 끝났을 때 영화를 표시
  const [movie, setMovie] = useState({}); //영화를 표시할 객체
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MovieDetail
            title={movie.title_long}
            src={movie.medium_cover_image}
            description={movie.description_full}
            genres={movie.genres}
            url={movie.url}
            rating={movie.rating}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
