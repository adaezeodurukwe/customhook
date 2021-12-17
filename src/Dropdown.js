import React, { useRef } from "react";
import useClickOutside from "./useClickOut";

const Dropdown = () => {
  const targetRef = useRef(null);
  const [menuOpen, setMenuOpen] = useClickOutside(targetRef);

  const onMenuBtnClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div ref={targetRef} className="dropdown-wrapper">
      <button className="openMenu" type="button" onClick={onMenuBtnClick}>
        Open Dropdown Menu
      </button>
      {menuOpen && (
        <div className="dropdown-items-wrapper">
          <h3>Menu Items</h3>
          <ul className="dropdown-items">
            <li className="dropdown-item">Dropdown Item 1</li>
            <li className="dropdown-item">Dropdown Item 2</li>
            <li className="dropdown-item">Dropdown Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
