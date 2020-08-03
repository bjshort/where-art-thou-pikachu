import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchComponent from '../../components/Search';
import { getQuery } from '../../redux/search/search.selectors';
import { updateQuery } from '../../redux/search/search.actions';
import { Header2 } from '../../theme';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const Search = useCallback((query: string) => dispatch(updateQuery(query)), [
    dispatch,
  ]);

  const query = useSelector(getQuery);

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
