import { useEffect, useState } from "react";
import GameFilterOptions from "./GameFilterOptions";
import GameSearchField from "./GameSearchField";
import useGameDataContext from "../customHooks/useGameDataContext";

const GameSearchForm = ({ setSearchFormOpen }) => {
  const [displayFilters, setDisplayFilters] = useState(false);
  const { GAMES_URL, refetchFrontPageData, setOverlayOn } = useGameDataContext();

  useEffect(()=>{
    setOverlayOn(displayFilters ? true : false);
  },[displayFilters])

  const [form, setForm] = useState({
    platforms: "",
    developers: "",
    genres: "",
    dates: "",
    search: "",
  });

  const handleFilters = (e) => {
    e.preventDefault();
    setDisplayFilters((prevState) => (prevState ? false : true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let query = "";
    for (let property in form) {
      if (form[property]) query += `&${property}=${form[property]}`;
    }
    refetchFrontPageData(GAMES_URL + query + "&page_size=9");
  };

  return (
    <form className="search-form" method="GET" onSubmit={handleSubmit}>
      <GameFilterOptions setForm={setForm} displayFilters={displayFilters} setDisplayFilters={setDisplayFilters}/>
      <GameSearchField setForm={setForm} />
      <div className="search-form-buttons">
        <button type="submit">Search</button>
        <button onClick={handleFilters}>
          {displayFilters ? "Hide" : "Filters"}
        </button>
        <button onClick={() => setSearchFormOpen(false)}>Cancel</button>
      </div>
    </form>
  );
};

export default GameSearchForm;
