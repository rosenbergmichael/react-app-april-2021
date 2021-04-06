import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/images/heroimagethailand.jpeg" alt="thailand" />
      <h1>GET OUT AND EXPLORE</h1>
      <p>Our planet is truly spectacular!</p>
      <div class="hero-btns">
        <Button className="btns" buttonStyle="btn--outline"
        buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn--primary"
        buttonSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
