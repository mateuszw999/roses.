import React, { Component } from 'react';
import '../styles/Navigation.css'
class Navigation extends Component {

 render() {
  return (
   <nav className='nav'>
    <h1 className='h1'>Rose Page</h1>

    <a href="#">
     <h2 className="subpage subpage1">Home</h2>
    </a>

    <a href="#">
     <h2 className="subpage">About</h2>
    </a>

    <a href="#">
     <h2 className="subpage">Shop</h2>
    </a>

   </nav>
  );
 }
}

export default Navigation;