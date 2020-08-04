import React from 'react';
import FavouritesList from '../../components/Favourites/List';
import { useSelector } from 'react-redux';
import { getFavouritePokemon } from '../../redux/favourites/favourites.selectors';

const FavouritesContainer = () => {
  const favouritePokemon = useSelector(getFavouritePokemon);

  return <FavouritesList items={favouritePokemon} />;
};

export default FavouritesContainer;
