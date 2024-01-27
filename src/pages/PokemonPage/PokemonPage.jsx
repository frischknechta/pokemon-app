import "./PokemonPage.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PokemonPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
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
    <div className="wrapper pokemonContainer">
      <h1>Pokemon</h1>
      <div>
        <div key={data.id} className="pokemon">
          <span>{data.name}</span>
          <img src={data.sprites.front_default} alt="" />
          <span>Size: {(data.height / 10).toFixed(2)} m </span>
          <span>Weight: {(data.weight / 10).toFixed(2)} kg </span>
        </div>
        <div className="type">
          {data.types.map((type) => {
            const index = type.type.url.split("/").at(-2);
            return (
              <Link to={`/type/${index}`} key={type.type.name}>
                {type.type.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
