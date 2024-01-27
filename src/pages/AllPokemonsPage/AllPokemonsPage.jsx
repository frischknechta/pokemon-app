import "./AllPokemonsPage.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPokemonsPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const onImageError = (e) => {
    e.target.src =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=10000"
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
    <div className="wrapper pokemonsContainer">
      <h1>Pokemons</h1>
      <div>
        {data.results.map((item) => {
          const index = item.url.split("/").at(-2);
          return (
            <Link to={`/pokemon/${item.name}`} key={item.name}>
              {item.name}
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

export default AllPokemonsPage;
