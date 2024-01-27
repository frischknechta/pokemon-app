import "./HomePage.css";
import pokeball from "../../assets/img/pokeball.png";

const HomePage = () => {
  return (
    <div className="wrapper home">
      <p>Salut à toi jeune dresseur</p>
      <img src={pokeball} alt="Pokeball" />
    </div>
  );
};

export default HomePage;
