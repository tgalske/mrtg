import React, { Component } from 'react';
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar w-full">
    <div className="container bg-grey-light rounded-b-lg">
      <div className="navbar-brand pl-2">
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
    </div>
  </nav>
);



class NavigationBar extends React.Component {

  constructor() {
    super();
    this.state = {
      open: true
    }
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-blue p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <Link to="/" className="text-xl mr-6 font-bold text-white hover:text-grey-lighter">Tyler Galske</Link>
        </div>
        <div className="flex items-center flex-no-shrink text-white mr-6 md:hidden">
          <button onClick={this.toggle} className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={(this.state.open ? 'block' : 'hidden') + " w-full flex-grow md:flex md:items-center md:w-auto"}>
          <div className="text-sm md:flex-grow">
            <Link className="block md:inline text-xl text-white hover:text-white border-b border-transparent hover:border-white mr-6" to="/about">
              About Me
            </Link>
            <Link className="block md:inline text-xl text-white hover:text-white border-b border-transparent hover:border-white mr-6" to="/projects">
              Projects
            </Link>
            <Link className="block md:inline text-xl text-white hover:text-white border-b border-transparent hover:border-white mr-6" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavigationBar
