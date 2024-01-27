import "./Header.css";

import { Link } from "react-router-dom";
import logo from "../../assets/img/Pokémon_logo.png";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <nav>
          <div>
            <Link to="/">
              <img src={logo} alt="Pokemon logo" />
            </Link>
          </div>
          <div>
            <Link to="/pokemon">Pokemons</Link>
            <Link to="/type">Types</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
