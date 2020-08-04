import React from 'react';
import styled from 'styled-components';
import SearchContainer from '../Search/';
import FavouritesContainer from '../Favourites';
import { getBreakpoint } from '../../theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    flex-direction: unset;
  }
`;

const SearchWrapper = styled.div`
  flex-grow: 1;
  margin-bottom: 40px;
`;
const FavouritesWrapper = styled.div`
  @media screen and (min-width: ${getBreakpoint('lg')}) {
    margin-left: 100px;
    max-width: 300px;
    min-width: 300px;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchContainer />
      </SearchWrapper>
      <FavouritesWrapper>
        <FavouritesContainer />
      </FavouritesWrapper>
    </Wrapper>
  );
};

export default Home;
