import React from 'react'
import { Link } from 'react-router-dom';
import './styles/header.css'
function Header() {
  return (
    <nav>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about-us'>About Us</Link>
        <Link to='/find-jobs'>Find Jobs</Link>
        <Link to='/upload-job'>Upload Jobs</Link>
        <Link to='/companies'>Companies</Link>
      </ul>
    </nav>
  );
}


export default Header