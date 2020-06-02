import React from 'react';

import { FaChevronDown } from 'react-icons/fa';

import './styles.css'

function Dropdown({ title, options }) {
  let activatedDropdown;
  let dropdown;

  function addClassToTheMouseOverElement(e) {
    const clientX = e.clientX;
    const clientY = e.clientY;

    dropdown = document.elementFromPoint(clientX, clientY);

    if (dropdown.classList.value !== "row" && dropdown.classList.value !== "dropdown") {
      dropdown.classList.add("active-dropdown");
    }    
  }

  function removeClassFromMouseOverElement() {

    if (activatedDropdown === null || activatedDropdown === undefined) {
      activatedDropdown = dropdown.querySelector(".dropdown"); 
    }

    dropdown.classList.remove("active-dropdown");
  }

  function showDropdown() {
    activatedDropdown.classList.add("ative-dropdown");
  }

  return (
    <>
      <li>
        <div onMouseOver={e => addClassToTheMouseOverElement(e)} onPointerOut={removeClassFromMouseOverElement}>
          <p>
            { title }
            <FaChevronDown
            style={{ color: "#7d8597", marginLeft: "3px" }}
            size={12} />
          </p>
          
          <div className="dropdown" onMouseOver={showDropdown} onMouseOut={() => activatedDropdown.classList.remove("ative-dropdown")}>
            {
              options.map((option, key=1) => (
                <div className="row" key={key}>
                  <a href="https://github.com/JuanDolino">{option}</a>
                </div>
              ))
            }
          </div>
        </div>
      </li>
    </>
  );
  
}

export default Dropdown;