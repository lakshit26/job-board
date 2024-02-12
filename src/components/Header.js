import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../styles/reset.min.css';
import '../styles/header.css'

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  function handleNavToggle(){
    setIsNavActive(!isNavActive);
  }
  return (
    <header class="site-header">
      <div class="wrapper site-header__wrapper">
        <div class="site-header__start">
        <Link to='/' class="brand">Brand</Link>
        </div>
        <div class="site-header__middle">
          <nav class="nav">
            <button onClick={handleNavToggle} class="nav__toggle" aria-expanded="false" type="button">
              menu
            </button>
            <ul class={"nav__wrapper"+(isNavActive?" active":"")}>
              <Link to='/' class="nav__item">Home</Link>
              <Link to='/about-us' class="nav__item">About Us</Link>
              <Link to='/find-jobs' class="nav__item">Find Jobs</Link>
              <Link to='/upload-job' class="nav__item">Upload Job</Link>
              <Link to='/companies' class="nav__item">Companies</Link>
            </ul>
          </nav>
        </div>
        <div class="site-header__end">
          <a>Sign in</a>
        </div>
      </div>
    </header>
  );
}


export default Header