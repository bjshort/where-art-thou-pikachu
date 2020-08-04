import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getResult,
  getShowShakespeareanTranslation,
  getIsSearching,
} from '../../redux/search/search.selectors';
import { getPokemonById } from '../../redux/entities/entities.selectors';
import { Header3, Theme } from '../../theme';
import PokemonSummary from '../../components/Pokemon/Summary';
import PokemonActions from '../../components/Pokemon/Actions';
import styled from 'styled-components';
import {
  addToFavourites,
  removeFromFavourites,
} from '../../redux/favourites/favourites.actions';
import { toggleTranslation } from '../../redux/search/search.actions';

const ResultCard = styled.div`
  background-color: ${Theme.colors.orange};
  padding: 20px;
  border-radius: 15px;
`;

const SearchResultsContainer = () => {
  const dispatch = useDispatch();
  const isSearching = useSelector(getIsSearching);
  const pokemonId = useSelector(getResult);
  const pokemon = useSelector(getPokemonById(pokemonId));
  const showShakespeareanDescription = useSelector(
    getShowShakespeareanTranslation,
  );

  // Actions
  const ToggleTranslation = () => dispatch(toggleTranslation());
  const AddPokemonToFavourites = (id) => dispatch(addToFavourites(id));
  const RemoveFromFavourites = (id) => dispatch(removeFromFavourites(id));

  if (isSearching) return <p>Searching...</p>;
  if (!pokemon) return <p>No pokemon found.</p>;

  return (
    <div>
      <Header3>A wild pokemon was found!</Header3>
      <ResultCard>
        <PokemonSummary
          pokemon={pokemon}
          shakespeareanDescription={showShakespeareanDescription}
        />
        <PokemonActions
          pokemon={pokemon}
          addToFavourites={AddPokemonToFavourites}
          removeFromFavourites={RemoveFromFavourites}
          toggleTranslation={ToggleTranslation}
        />
      </ResultCard>
    </div>
  );
};

export default SearchResultsContainer;
