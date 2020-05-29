import React, { Component } from 'react';

import { FaChevronDown } from 'react-icons/fa';

import './styles.css'

class Header extends Component {
  render() {
    return (
      <header>
        <h2>React Dropdown</h2>
        
        <ul>
          <li>Home</li>
          <li>Downloads <FaChevronDown style={{color: "#000", marginLeft: "3px"}}/></li>
          <li>About</li>
        </ul>
      </header>
    )
  }
}


export default Header;