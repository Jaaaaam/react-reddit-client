import React from 'react';
import logo from '.././assets/images/logo.png'
import '.././assets/scss/top-nav.scss';


function TopNav() {
  return (
    <div className="top-nav">
      <img src={logo} height={60} />
    </div>
  )
}

export default TopNav;