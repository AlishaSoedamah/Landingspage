import * as React from "react";
import { Link } from "gatsby";


const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/" >Logo</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="../">Home</Link>
            <Link to="../pages/Product">Product</Link>
            <Link to="../pages/Product">About</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)


export default Header;
