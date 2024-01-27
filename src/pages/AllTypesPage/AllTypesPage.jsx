import "./AllTypesPage.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllTypesPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
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
    <div className="wrapper typesContainer">
      <h1>Types</h1>
      <div>
        {data.results.map((item) => {
          const index = item.url.split("/").at(-2);
          return (
            <Link to={`/type/${index}`} key={item.name}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllTypesPage;
