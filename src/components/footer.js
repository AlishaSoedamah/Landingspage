import React from "react";
import { Link } from "gatsby"

const Footer = () => (
  <footer className="container">
      <div className="inner-footer">
        <h1>stay in touch 👋</h1>  
        <p>send an email</p>
        <h2><Link to="/">fakemail@gmail.com</Link></h2>
        
        <div className="offic-row">
            <p>Office</p>
            <Link to="/home">amsterdam</Link>
            <Link to="/product">time</Link>
            <Link to="/about">date</Link>
        </div>
        <div className="socials-row">
            <p>Socials</p>
            <Link to="/home">instagram</Link>
            <Link to="/product">twitter</Link>
            <Link to="/about">behance</Link>
        </div>
      </div>
  </footer>
)


export default Footer
