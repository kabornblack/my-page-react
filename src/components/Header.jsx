import React from "react";
import { SocialIcon } from 'react-social-icons'


function Header() {
  return (
    <div className="headerdiv">

    <a href="/" className="divh2">home</a>
         

    <div className="headerdiv1">
      <SocialIcon url="https://twitter.com/iam_kaborn" fgColor="#64748b" bgColor="transparent" className="hover:text-red"/>
      
      </div>

      {/* <div className="headerdiv2">
      <SocialIcon url="https://email.com" fgColor="#64748b" bgColor="transparent"/>
      <p className="headerdivp2">Get in touch</p>
      </div> */}
    </div>
  )
}

export default Header;
