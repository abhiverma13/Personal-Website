import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png'

const Home = () => {
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

  useEffect(() => {
    document.title = "Abhi Verma - Home";
  }, []);

  return (
    <div className="home">
      <div className="first-section">
        <nav className={fix ? "navbar-home-fixed" : "navbar-home"}>
          <NavLink to="/"><img src={logo} alt='logo'/></NavLink>
          <div className="links">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/myprojects">MY PROJECTS</NavLink>
            <NavLink to="/experience">EXPERIENCE</NavLink>
            <NavLink to="/contactme">CONTACT ME</NavLink>
          </div>
        </nav>
        <div className="gif">
        <p className="title">I am <b>Abhi Verma</b>.</p>
        <p className="subtitle">An aspiring Computer Engineer.</p>
        </div>
      </div>
    </div>
  );
}
 
export default Home;