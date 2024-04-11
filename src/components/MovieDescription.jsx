// MovieDescription component
const MovieDescription = ({ movie, onClose }) => {
    return (
      <div className="movie-description">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <iframe
          title="movie-trailer"
          width="560"
          height="315"
          src={movie.trailerURL}
          style={{ border: "none" }} // Replace frameBorder with style property
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Link to="/">Back to Home</Link>
      </div>
    );
  };