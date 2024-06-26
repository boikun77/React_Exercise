import PropTypes from "prop-types";

function Movie({ coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt="image" />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Movie;
