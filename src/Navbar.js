import { NavLink } from 'react-router-dom';
import logo from './images/logo.png'
import { useState } from 'react';
import resume from './Resume.pdf';

const Navbar = () => {
  const [fix, setFix] = useState(false);
  const [clicked, setClicked] = useState(false)

  function setFixed() {
    if (window.scrollY > 0) {
      setFix(true);
    }
    else {
      setFix(false);
    }
  }

  function handleClick() {
    setClicked(clicked => !clicked);
  }
  function handleClickTwo() {
    setClicked(false);
  }

  window.addEventListener("scroll", setFixed);
  
  return (  
    <nav className={fix ? "navbar-fixed" : "navbar"}>
      <div className="logo">
          <NavLink to="/"><img src={logo} alt='logo'/></NavLink>
      </div>
      <div className="bars" onClick={handleClick}>
        <i className= {clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "link-list active" : "link-list"}>
        <li className="link">
          <NavLink to="/" exact={true} onClick={handleClickTwo}>HOME</NavLink>
        </li>
        <li className="link">
          <NavLink to="/projects" onClick={handleClickTwo}>PROJECTS</NavLink>
        </li>
        <li className="link">
          <NavLink to="/experience" onClick={handleClickTwo}>EXPERIENCE</NavLink>
        </li>
        <li className="link">
          <button onClick = {() => {window.open(resume, "_blank")}}>RESUME</button>
        </li>
      </ul>
    </nav>
  );
}
 
export default Navbar;