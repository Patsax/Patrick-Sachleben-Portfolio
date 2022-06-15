import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/0517-0047.jpg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Patrick Sachleben</h1>
        <h5 className='text-light'>Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocials />
        

        <div className="me">
          <img src={ME} alt="Patrick Sachleben in a blue collared shirt. He is bald with glasses and a beard." />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header