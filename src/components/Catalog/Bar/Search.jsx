import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchWord,
  setSearch,
  clearSearch,
} from "../../../app/redux/searchSlice";

export const Search = () => {
  const [search, setSearchValue] = useState("");
  const searchWord = useSelector(selectSearchWord);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(setSearch(search));
    setSearchValue("");
  };
  const handleClearSearch = () => {
    dispatch(clearSearch());
  };
  return (
    <div className="search-form">
      <form>
        <input
          id="search"
          type="search"
          placeholder="Search for a product"
          value={search}
          onChange={handleChange}
        />
        <input type="submit" value="Search" onClick={handleSearch} />
      </form>
      {searchWord && (
        <div className="results">
          <p>
            Search results by word: <strong>{searchWord}</strong>
          </p>
          <p onClick={handleClearSearch}>X</p>
        </div>
      )}
    </div>
  );
};
