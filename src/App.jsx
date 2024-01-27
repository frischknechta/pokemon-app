import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import AllPokemonsPage from "./pages/AllPokemonsPage/AllPokemonsPage";
import PokemonPage from "./pages/PokemonPage/PokemonPage";
import AllTypesPage from "./pages/AllTypesPage/AllTypesPage";
import TypePage from "./pages/TypePage/TypePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon" element={<AllPokemonsPage />} />
        <Route path="/pokemon/:name" element={<PokemonPage />} />
        <Route path="/type" element={<AllTypesPage />} />
        <Route path="/type/:type" element={<TypePage />} />
      </Routes>
    </Router>
  );
}

export default App;
