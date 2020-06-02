import React, { Component } from 'react';

import Dropdown from '../Dropdown';

import './styles.css'

class Header extends Component {
  render() {
    return (
      <header>
        <h2>React Dropdown</h2>
        
        <ul>
          <Dropdown title="My Github" options={["Github"]} />
        </ul>
      </header>
    )
  }
}


export default Header;