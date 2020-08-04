import React from 'react';
import styled from 'styled-components';
import { PokemonDTO } from '../../api-client/pokemon.dto';
import { addToFavourites } from '../../redux/favourites/favourites.actions';

interface PokemonActionsProps {
  pokemon: PokemonDTO;
  addToFavourites: (id: number) => void;
  removeFromFavourites: (id: number) => void;
}

const ActionsList = styled.ul`
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #000000;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 200;
  padding: 1px;
`;

const Action = styled.li`
  display: inline-block;
  padding: 0 30px;
  cursor: pointer;

  :hover {
    background-color: #fafafa;
    color: #000000;
  }
`;

const PokemonActions: React.FC<PokemonActionsProps> = ({
  pokemon,
  addToFavourites,
}) => {
  return (
    <ActionsList>
      <Action onClick={() => addToFavourites(pokemon.id)}>Favourite</Action>
      <Action>Toggle Desc.</Action>
    </ActionsList>
  );
};

export default PokemonActions;
