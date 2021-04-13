import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter and don't miss out!
        </p>
        <p className="footer-subscription-text">
          Unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="youremail@example.com" className="footer-input"/>
              <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to='/'>Sign Up</Link>
            <Link to='/'>Reviews</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Content</h2>
            <Link to='/'>Submit Content</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>YouTube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/' className="social-logo">
              TopTravel <i className='fas fa-passport'></i>
            </Link>
          </div>
          <small className="website-rights">TopTravel © 2021 </small>
          <div className="social-icons">
             <Link 
              className="social-icon-link facebook"
              to=''
              target='_blank'
              aria-label="Facebook" 
             >
               <i className='fab fa-facebook-f'></i>
             </Link>
             <Link 
              className="social-icon-link instagram"
              to=''
              target='_blank'
              aria-label="Instagram" 
             >
               <i className='fab fa-instagram'></i>
             </Link>
             <Link 
              className="social-icon-link youtube"
              to=''
              target='_blank'
              aria-label="YouTube" 
             >
               <i className='fab fa-youtube'></i>
             </Link>
             <Link 
              className="social-icon-link twitter"
              to=''
              target='_blank'
              aria-label="Twitter" 
             >
               <i className='fab fa-twitter'></i>
             </Link>
             <Link 
              className="social-icon-link linkedin"
              to=''
              target='_blank'
              aria-label="LinkedIn" 
             >
               <i className='fab fa-linkedin'></i>
             </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
