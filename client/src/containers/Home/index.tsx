import React from 'react';
import styled from 'styled-components';
import SearchContainer from '../Search/';
import FavouritesContainer from '../Favourites';

const Wrapper = styled.div`
  display: flex;
`;

const SearchWrapper = styled.div`
  flex-grow: 1;
`;
const FavouritesWrapper = styled.div`
  margin-left: 100px;
  max-width: 300px;
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
