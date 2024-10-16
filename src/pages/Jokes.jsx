import { useEffect, useState } from "react";
import JokeDisplay from "../components/Jokes/JokesDisplay";
import { useNavigate } from "react-router-dom";

const API_URL = "https://api.chucknorris.io/jokes/random?category=dev";

export default function Jokes() {
  const [currentJoke, setCurrentJoke] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getJokeFromAPI();

    const id = setInterval(() => {
      getJokeFromAPI();
    }, 15000); // 15 seconds

    return () => clearInterval(id);
  }, []);

  const getJokeFromAPI = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      if (data.error) {
        console.error(data.error);
        navigate("/error");
      }
      setCurrentJoke(data);
      setLastUpdated(new Date().toLocaleString());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      {currentJoke && (
        <JokeDisplay joke={currentJoke} lastUpdated={lastUpdated} />
      )}
    </div>
  );
}
