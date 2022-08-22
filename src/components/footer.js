import React from "react";
import { Link } from "gatsby";

let today = new Date(),
date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
// get time
let time = new Date(),
cooltime = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();

const Footer = () => (
  <footer className="container">
      <h1>Stay in touch 👋</h1>  
      <p>Send us an email</p>
      <h2><Link to="/">fakemail@gmail.com</Link></h2>
      <div className="inner-footer">
        <div className="inner-footer__office">
            <p>Office</p>
            <Link to="/">amsterdam</Link>
            <p>{cooltime}</p>
            <p>{date}</p>
        </div>
        <div className="inner-footer__socials">
            <p>Socials</p>
            <Link to="/">instagram</Link>
            <Link to="/">twitter</Link>
            <Link to="/">behance</Link>
        </div>
        <span>All rights reserved 2022</span>
      </div>
  </footer>
)


export default Footer;
