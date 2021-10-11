import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as searchAction from "../actions/searchAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "@styles/Search.sass";
import ItemSeacrhResult from './ItemSeacrhResult';

const Search = () => {
  const [animeName, setanimeName] = React.useState("");
  const { results, loading, error } = useSelector(
    (state) => state.searchReducer
  );

  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(searchAction.searchAnime(event.target.value));
    setanimeName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(animeName != '') dispatch(searchAction.searchAnime(animeName));
  };

  return (
    <div className="header__search">
      <form onSubmit={onSubmit}>
        <input
          className="header__search__input"
          type="text"
          value={animeName}
          placeholder="Search for an anime"
          onChange={onChange}
        />
        <button className="header__search__button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      {animeName != "" && (
        <ul className="list_results">
          {results && results.length > 0 ? (
            results.map((anime) => (
              <ItemSeacrhResult anime={anime}/>
            ))
          ) : (
            <li>Not found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
