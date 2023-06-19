import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
const FloatingButton = () => {

    return (

<div className="floating-container">
  <div className="floating-button"><ChatIcon/></div>
  <div className="element-container">
    <a href="tel:+917617730973">
      
      <span className="float-element tooltip-left">
        <i className="material-icons">phone</i>
      </span>
    </a>
    





    
    <span className="float-element">
    <a  href="https://api.whatsapp.com/send?phone=+917617730973&amp;text=Hi, I am visiting your website ">
      <WhatsAppIcon/>
      </a>
    </span>
    
    <span className="float-element">
      <a href="mailto:varun.2125cse1032@kiet.edu">
              <EmailIcon/>
            </a>
     
    </span>
  </div>
</div>




    );



}

export default FloatingButton;