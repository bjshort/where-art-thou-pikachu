import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getResult } from '../../redux/search/search.selectors';
import { getPokemonById } from '../../redux/entities/entities.selectors';
import SearchResult from '../../components/SearchResult';
import { Header3 } from '../../theme';

const SearchResultsContainer = () => {
  const pokemonId = useSelector(getResult);
  const pokemon = useSelector(getPokemonById(pokemonId));

  if (!pokemon) return <p>No pokemon found.</p>;

  console.log(pokemon);

  return (
    <div>
      <Header3>A wild pokemon was found!</Header3>
      <SearchResult result={pokemon} />
    </div>
  );
};

export default SearchResultsContainer;
