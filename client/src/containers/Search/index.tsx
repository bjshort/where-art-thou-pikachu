import React from 'react';
import SearchQueryContainer from './query';
import SearchResultsContainer from '../Search/results';

const SearchContainer = () => {
  return (
    <div>
      <SearchQueryContainer />
      <SearchResultsContainer />
    </div>
  );
};

export default SearchContainer;
