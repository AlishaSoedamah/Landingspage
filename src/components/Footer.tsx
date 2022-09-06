import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <footer className="container">
      <h1>Stay in touch 👋</h1>  
      <p>Send us an email</p>
      <h2><Link to="/">fakemail@gmail.com</Link></h2>
      <div className="inner-footer">
        <div className="inner-footer__office">
            <p className="extra-deco">Office</p>
            <Link to="/">amsterdam</Link>
        </div>
        <div className="inner-footer__socials">
            <p className="extra-deco">Socials</p>
            <Link to="/">instagram</Link>
            <Link to="/">twitter</Link>
            <Link to="/">behance</Link>
        </div>
      </div>
      <span>All rights reserved 2022</span>
  </footer>
)


export default Footer;
