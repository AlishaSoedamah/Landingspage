import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <footer className="container">
    <h1>Stay in touch 👋</h1>
    <h2 className="email"><Link to="/">fakemail@gmail.com</Link></h2>
    <div className="inner-footer">
      <div className="inner-footer__office">
        <p className="extra-deco">Office</p>
        <Link to="/">amsterdam, the netherlands</Link>
        <p className="extra-deco">time in office</p>
        <p>{new Date().getHours() + ":" + new Date().getMinutes()}</p>
      </div>
      <div className="inner-footer__socials">
        <p className="extra-deco">Socials</p>
        <Link to="/">instagram</Link>
        <Link to="/">twitter</Link>
        <Link to="/">behance</Link>
      </div>
    </div>
    <p className="copyright" >All rights reserved {new Date().getFullYear()} &copy;</p>
  </footer>
)


export default Footer;
