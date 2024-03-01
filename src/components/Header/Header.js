import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './styles/reset.min.css';
import './styles/header.css';
import sidebar from './menu.png'

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  function handleNavToggle(){
    setIsNavActive(!isNavActive);
  }
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <div className="site-header__start">
        <Link to='/' className="brand" onClick={()=>{setIsNavActive(false)}}>Job Board</Link>
        </div>
        <div className="site-header__middle">
          <nav className="nav">
            <button onClick={handleNavToggle} className="nav__toggle" aria-expanded="false" type="button">
              <img src={sidebar} alt="menu"/>
            </button>
            <ul className={"nav__wrapper"+(isNavActive?" active":"")}>
              <Link onClick={handleNavToggle} to='/' className="nav__item">Jobs</Link>
              <Link onClick={handleNavToggle} to='/upload-job' className="nav__item">Upload Job</Link>
              <Link onClick={handleNavToggle} to='/companies' className="nav__item">Companies</Link>
              <Link onClick={handleNavToggle} to='/about-us' className="nav__item">About Us</Link>
            </ul>
          </nav>
        </div>
        <div className="site-header__end">
          <a>Sign in</a>
        </div>
      </div>
    </header>
  );
}


export default Header