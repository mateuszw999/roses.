import React, { Component } from 'react';

import '../styles/Header.css'


import rose1 from '../images/rose.jpg';
import rose2 from '../images/rose1.jpg';
import rose3 from '../images/rose2.jpg';


class Header extends Component {

 render() {
  return (
   <>
    <header className='header'>
     <img src={rose1} alt="x" className="headerImg" />
    </header>

   </>

  );
 }
}

export default Header;