import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menu } from '../constants/menu';
import '.././assets/scss/side-nav.scss';

function SideMenu({activeMenu, setActiveMenu,...rest}) {
  const renderMenuItems = () => {
    return menu.map(({name, icon}) => (
      <div key={name} className={`menu-item ${(activeMenu === name) ? 'active' : ''}`} onClick={() => setActiveMenu(name)}>
        <FontAwesomeIcon className="icon" icon={icon}/>
        {name}
      </div>
    ))
  }
  return (
    <div className="side-nav">
      <div className="menu">
        { renderMenuItems() }
      </div>
    </div>
  )
}

export default SideMenu;