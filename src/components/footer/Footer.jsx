import React from 'react'
import logoFooter from "../../assets/logo-footer.png";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_logo'>
        <img src={logoFooter} alt="logo" width="100" />
      </div>
      <div className='footer-text'>© 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
