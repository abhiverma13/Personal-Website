import { NavLink } from 'react-router-dom';
import logo from './images/logo.png'
import { useState } from 'react';

const Navbar = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 200) {
      setFix(true);
    }
    else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);
  
  return (  
    <nav className={fix ? "navbar-fixed" : "navbar"}>
      <NavLink to="/"><img src={logo} alt='logo'/></NavLink>
      <div className="links">
        <NavLink to="/" id="home">HOME</NavLink>
        <NavLink to="/myprojects">MY PROJECTS</NavLink>
        <NavLink to="/experience">EXPERIENCE</NavLink>
        <NavLink to="/contactme">CONTACT ME</NavLink>
      </div>
    </nav>
  );
}
 
export default Navbar;