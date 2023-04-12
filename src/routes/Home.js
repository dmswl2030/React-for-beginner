import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true); //로딩이 끝났을 때 영화를 표시
  const [movies, setMovies] = useState([]); //영화 목록을 표시할 배열
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false); //로딩이 끝났을 때 false로 바꿔주기
  };
  useEffect(() => {
    //내 컴포넌트가 시작할 때 딱 한번만 실행할 함수
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id} //react.js는 고유한 key를 가져아함
              id={movie.id} //props로 id를 받아 movie/:id페이지에서 활용
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  ); //로딩중이면 h1태그의 Loading... 표시, 로딩중이 아니면 영화를 표시
}
export default Home;
