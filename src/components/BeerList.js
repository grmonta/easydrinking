import React from 'react';
import BeerItem from './BeerItem';

const BeerList = ({ beers, onBeerSelect }) => {
  //props.beers
  const renderedList = beers.map(beer => {
    return <BeerItem beer={beer} key={beer.id} onBeerSelect={onBeerSelect} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default BeerList;
