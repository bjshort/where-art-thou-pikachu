import React from 'react';
import { Header4 } from '../../theme';
import { PokemonDTO } from '../../api-client/pokemon.dto';
import styled from 'styled-components';

interface PokemonSummaryProps {
  pokemon: PokemonDTO;
}

const ResultCard = styled.div`
  background-color: #fb8c4b;
  padding: 20px;
  border-radius: 15px;
`;

const PokemonSummaryWrapper = styled.div`
  font-family: 'Press Start 2P', cursive;
  background-color: #000000;
  padding: 5px;
  border: 2px solid #fff;
  color: #ffffff;
  margin-bottom: 7px;
`;

const PokemonImage = styled.img`
  background-color: #ffffff;
  width: 100px;
`;

const Header = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 15px;
`;

const HeaderText = styled.p`
  text-transform: uppercase;
  color: #ffffff;
  display: block;
  font-size: 12px;
  line-height: 25px;
`;

const PokemonDescription = styled.p`
  display: block;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 0.4em;
`;

const ImageWrapper = styled.div`
  display: inline-block;
`;

const PokemonNumber = styled.p`
  display: block;
  font-size: 11px;
  text-align: center;
  line-height: 20px;
`;

const Seperator = styled.hr`
  border: 2px solid #fb8c4b;
`;

const PokemonSummary: React.FC<PokemonSummaryProps> = ({ pokemon }) => {
  const { id, name, imageUrl, description, height, weight } = pokemon;
  return (
    <PokemonSummaryWrapper>
      <ImageWrapper>
        <PokemonImage src={imageUrl} alt={name} />
        <PokemonNumber>No. {id}</PokemonNumber>
      </ImageWrapper>
      <Header>
        <HeaderText>{name}</HeaderText>
        <HeaderText>Thunder</HeaderText>
        <HeaderText>HT {height}</HeaderText>
        <HeaderText>WT {weight}lb</HeaderText>
      </Header>
      <Seperator />
      <PokemonDescription>{description.shakespeare}</PokemonDescription>
    </PokemonSummaryWrapper>
  );
};

export default PokemonSummary;
