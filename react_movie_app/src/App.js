import { useEffect, useState } from "react";
import Movie from "./Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMoiveLists = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovie(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMoiveLists();
  }, []);

  console.log(movie);
  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {movie.map((res) => (
            <Movie
              key={res.id}
              coverImage={res.medium_cover_image}
              title={res.title}
              summary={res.summary}
              genres={res.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
