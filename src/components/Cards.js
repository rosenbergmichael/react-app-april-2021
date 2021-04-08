import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these AMAZING destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src="images/chiangmai.jpeg"
              text="Explore Chiang Mai, a beautiful and relaxing city in the mountains of northern Thailand"
              label="Adventure"
              path="/destinations"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
