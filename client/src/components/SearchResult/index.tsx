import React from 'react';
import { Header4 } from '../../theme';
import { PokemonDTO } from '../../api-client/pokemon.dto';
import styled from 'styled-components';
import PokemonSummary from '../Pokemon/Summary';
import PokemonActions from '../Pokemon/Actions';

interface SearchResultProps {
  result: PokemonDTO;
}

const ResultCard = styled.div`
  background-color: #fb8c4b;
  padding: 20px;
  border-radius: 15px;
`;

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <ResultCard>
      <PokemonSummary pokemon={result} />
      <PokemonActions />
    </ResultCard>
  );
};

export default SearchResult;
