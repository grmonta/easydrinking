import './BeerDetail.css';
import React from 'react';

const BeerDetail = ({ beer }) => {
  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img className="ui medium image" src={beer.image_url} alt="" />
          </div>
          <div className="content">
            <div className="header">
              <h2>{beer.name}</h2>
              <p>"{beer.tagline}"</p>
            </div>

            <div className="description descript">
              <p> {beer.description}</p>
            </div>
            <div className="meta abv">
              <span>ABV: {beer.abv}</span>
            </div>
            <div className="meta ibu">
              <span>IBU: {beer.ibu}</span>
            </div>

            <div className="meta ingredients">Ingredients</div>
            <p>MALT: {beer.ingredients.malt[0].name}</p>
            <p>HOPS: {beer.ingredients.hops[0].name}</p>
            <p>
              DETAILS: {beer.ingredients.hops[0].name} hops is added at the{' '}
              {beer.ingredients.hops[0].add} and gives it a{' '}
              {beer.ingredients.hops[0].attribute} attribute
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerDetail;
