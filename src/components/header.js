import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/" >Logo</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)


export default Header;
