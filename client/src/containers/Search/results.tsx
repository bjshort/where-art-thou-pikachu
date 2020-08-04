import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getResult } from '../../redux/search/search.selectors';
import { getPokemonById } from '../../redux/entities/entities.selectors';
import { Header3, Theme } from '../../theme';
import PokemonSummary from '../../components/Pokemon/Summary';
import PokemonActions from '../../components/Pokemon/Actions';
import styled from 'styled-components';
import {
  addToFavourites,
  removeFromFavourites,
} from '../../redux/favourites/favourites.actions';

const ResultCard = styled.div`
  background-color: ${Theme.colors.orange};
  padding: 20px;
  border-radius: 15px;
`;

const SearchResultsContainer = () => {
  const dispatch = useDispatch();
  const pokemonId = useSelector(getResult);
  const pokemon = useSelector(getPokemonById(pokemonId));

  // Actions
  const AddPokemonToFavourites = (id) => dispatch(addToFavourites(id));
  const RemoveFromFavourites = (id) => dispatch(removeFromFavourites(id));

  if (!pokemon) return <p>No pokemon found.</p>;

  return (
    <div>
      <Header3>A wild pokemon was found!</Header3>
      <ResultCard>
        <PokemonSummary pokemon={pokemon} />
        <PokemonActions
          pokemon={pokemon}
          addToFavourites={AddPokemonToFavourites}
          removeFromFavourites={RemoveFromFavourites}
        />
      </ResultCard>
    </div>
  );
};

export default SearchResultsContainer;
