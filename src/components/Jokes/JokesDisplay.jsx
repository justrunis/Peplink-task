import "./JokesDisplay.css";

export default function JokesDisplay({ joke, lastUpdated }) {
  return (
    <div className="joke-display">
      <h2 className="joke-title">Joke of the Moment</h2>
      <img src={joke.icon_url} alt="Chuck Norris" className="joke-icon" />
      <p className="joke-detail">
        <span className="bold-text">Joke:</span> {joke.value}
      </p>
      <p className="joke-detail">
        <span className="bold-text">Categories:</span>{" "}
        {joke.categories.join(", ") || "None"}
      </p>
      <p className="joke-detail">
        <span className="bold-text">Created At:</span>{" "}
        {new Date(joke.created_at).toLocaleString() || "Unknown"}
      </p>
      <p className="joke-detail">
        <span className="bold-text">Updated At:</span>{" "}
        {new Date(joke.updated_at).toLocaleString() || "Unknown"}
      </p>
      <p className="joke-detail">
        <span className="bold-text">ID:</span> {joke.id}
      </p>
      <p className="joke-detail joke-url">
        <span className="bold-text">URL:</span>
        <a href={joke.url} target="_blank" rel="noopener noreferrer">
          {joke.url}
        </a>
      </p>
      <p className="joke-detail">
        <span className="bold-text">Last Updated:</span> {lastUpdated}
      </p>
    </div>
  );
}
