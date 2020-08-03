import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchComponent from '../../components/Search';
import { getQuery } from '../../redux/search/search.selectors';
import {
  updateQuery,
  fetchPokemonRequested,
} from '../../redux/search/search.actions';
import { Header2 } from '../../theme';
import { useDebounce } from 'use-debounce';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const Search = useCallback((query: string) => dispatch(updateQuery(query)), [
    dispatch,
  ]);
  const FindPokemon = useCallback(() => dispatch(fetchPokemonRequested()), [
    dispatch,
  ]);

  const query = useSelector(getQuery);
  const [debouncedQuery] = useDebounce(query, 1500);

  useEffect(() => {
    if (debouncedQuery !== '') FindPokemon();
  }, [debouncedQuery, FindPokemon]);

  return (
    <div>
      <Header2>Search</Header2>
      <SearchComponent
        onChange={(query: string) => Search(query)}
        value={query}
        placeholder="Findeth a pokemon"
      />
    </div>
  );
};

export default SearchContainer;
