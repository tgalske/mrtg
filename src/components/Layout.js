import React from 'react'
import Helmet from 'react-helmet'
import '../css/index.css';

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Tyler Galske" />
    <Navbar/>
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
