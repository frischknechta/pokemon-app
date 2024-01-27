import "./TypePage.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TypePage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { type } = useParams();

  const onImageError = (e) => {
    e.target.src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${type}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div className="wrapper typeContainer">
      <h1>Type: {data.name}</h1>
      <div>
        {data.pokemon.map((item) => {
          const index = item.pokemon.url.split("/").at(-2);
          return (
            <Link to={`/pokemon/${item.pokemon.name}`} key={item.pokemon.name}>
              {item.pokemon.name}
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
                alt="Pokemon picture"
                onError={onImageError}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TypePage;
