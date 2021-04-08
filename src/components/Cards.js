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
              text="Chiang Mai: A beautiful and laid-back city in the mountains of Northern Thailand"
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
              text="Amsterdam: Capital of The Netherlands, this canal city is full of bicyclists and 'coffee shops'"
              label="Europe"
              path="/destinations"
            />
            <CardItem 
              src="images/marrakech.jpeg"
              text="Marrakech: A major economic center in Morocco, known for its mosques, palaces and gardens"
              label="Africa"
              path="/destinations"
            />
            <CardItem 
              src="images/alaska.jpeg"
              text="Alaska: The largest state in the U.S. is home to an abundance of wildlife, massive glaciers and the the Northern Lights "
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
