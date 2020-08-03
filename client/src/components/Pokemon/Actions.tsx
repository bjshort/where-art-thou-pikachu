import React from 'react';
import styled from 'styled-components';

const ActionsList = styled.ul`
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #000000;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 200;
`;

const Action = styled.li`
  display: inline-block;
  padding: 0 30px;
`;

const PokemonActions: React.FC = () => {
  return (
    <ActionsList>
      <Action>Favourite</Action>
      <Action>Toggle Desc.</Action>
    </ActionsList>
  );
};

export default PokemonActions;
