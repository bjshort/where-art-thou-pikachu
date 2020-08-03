import React from 'react';
import styled from 'styled-components';
import SearchContainer from '../Search/';

const Wrapper = styled.div`
  background-color: #cae8dc;
  padding: 20px;
`;

const Home = () => {
  return (
    <Wrapper>
      {/* <FavouritesContainer /> */}
      <SearchContainer />
    </Wrapper>
  );
};

export default Home;
