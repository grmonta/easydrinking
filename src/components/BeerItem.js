import './BeerItem.css';
import React from 'react';

const BeerItem = ({ beer, onBeerSelect }) => {
  return (
    <div onClick={() => onBeerSelect(beer)} className="item beer-item">
      <img src={beer.image_url} alt="" className="ui image" />
      <div className="content">
        <div className="header">{beer.name}</div>
      </div>
    </div>
  );
};

export default BeerItem;
