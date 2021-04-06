import React from 'react'
import { Button } from './Button'

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/images/heroimagethailand.jpeg" alt="thailand" />
      <h1>GET OUT AND EXPLORE</h1>
      <p>Our planet is truly spectacular!</p>
      <div class="hero-btns">
        <Button className="btns" buttonStyle="btn--outline"
        buttonSize="btn--large">GET STARTED</Button>
      </div>
    </div>
  )
}

export default HeroSection
