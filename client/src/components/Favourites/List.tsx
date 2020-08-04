import React from 'react';
import { Header2 } from '../../theme';
import { PokemonDTO } from '../../api-client/pokemon.dto';
import styled from 'styled-components';
import PokemonSummary from '../Pokemon/Summary';

interface FavouritesListProps {
  items: PokemonDTO[];
}

const Favourites = styled.ul``;

const Favourite = styled.li``;

const FavouritesList: React.FC<FavouritesListProps> = ({ items }) => {
  return (
    <div>
      <Header2>Your favourites</Header2>
      <Favourites>
        {items.map((item) => {
          return (
            <Favourite key={item.id}>
              <PokemonSummary pokemon={item}></PokemonSummary>
            </Favourite>
          );
        })}
      </Favourites>
    </div>
  );
};

export default FavouritesList;
