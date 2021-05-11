import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function SignUp() {
  return ( 
    <div>
      <img src="/images/signup2.jpeg" alt="signup-img" />
      <h1 className="sign-up">SIGN UP</h1>;
      <form className="sign-up-form">
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <button>Submit</button>
      </form>
      <Footer />
    </div>
    )
}