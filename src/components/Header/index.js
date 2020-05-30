import React, { Component } from 'react';

import { FaChevronDown } from 'react-icons/fa';

import './styles.css'

class Header extends Component {

  showDropdown = () => {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.add("show-dropdown");
  }

  removeDropdown = () => {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.remove("show-dropdown");
  }

  render() {
    return (
      <header>
        <h2>React Dropdown</h2>
        
        <ul>
          <li>Home</li>
          <li 
            onMouseOver={this.showDropdown}
            onMouseOut={this.removeDropdown}>
            Downloads
            <FaChevronDown
              style={{ color: "#7d8597", marginLeft: "3px" }}
              size={12} />

            <div className="dropdown">
              <div className="row">
                <p>MacOS and Windows</p>
              </div>
              <div className="row">
                <p>Ios and Android</p>
              </div>
            </div>
          </li>
          <li>About</li>
        </ul>
      </header>
    )
  }
}


export default Header;