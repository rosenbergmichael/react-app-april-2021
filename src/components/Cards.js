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
              text="Chiang Mai: A beautiful and relaxing city in the mountains of Northern Thailand"
              label="Southeast Asia"
              path="/destinations"
            />
            <CardItem 
              src="images/barcelona.jpeg"
              text="Barcelona: The seaport capital of Northeastern Spain's Catalonia region"
              label="Europe"
              path="/destinations"
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src="images/amsterdam.jpeg"
              text="Amsterdam: Tbd"
              label="Europe"
              path="/destinations"
            />
            <CardItem 
              src="images/morocco.jpeg"
              text="Morocco: Tbd"
              label="Africa"
              path="/destinations"
            />
            <CardItem 
              src="images/alaska.jpeg"
              text="Alaska: Tbd"
              label="North America"
              path="/destinations"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
