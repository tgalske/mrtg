import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <p className="mb-1 text-2xl font-bold text-blue hover:text-blue-light">Tyler Galske</p>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About Me
        </Link>
        <Link className="navbar-item" to="/projects">
          Projects
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>

        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link>
      </div>
      <div className="navbar-end">
        {/*<a*/}
          {/*className="navbar-item"*/}
          {/*href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"*/}
          {/*target="_blank"*/}
          {/*rel="noopener noreferrer"*/}
        {/*>*/}
          {/*<span className="icon">*/}
            {/*<img src={github} alt="Github" />*/}
          {/*</span>*/}
        {/*</a>*/}
      </div>
    </div>
  </nav>
)

export default Navbar
