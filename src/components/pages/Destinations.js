import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';

export default function Destinations() {
  return ( 
    <div>
      <img src="/images/destinations2.jpeg" alt="destinations-img" />
      <h1 className="destinations">DESTINATIONS</h1>;
      <Cards />
      <Footer />
    </div>
    )
}