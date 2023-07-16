import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';
import learner from './images/learner.png'
import solver from './images/solver.png';
import leader from './images/leader.png';
import { Parallax } from 'react-parallax';
import space1 from './images/space1.jpg'

const Home = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 280) {
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
        <p className="subtitle">An aspiring <b>Computer Engineer</b>.</p>
        </div>
      </div>
      <div className="skills">
        <p className="iam">I Am...</p>
        <table className="skills-table">
          <tr>
            <td><img src={learner} alt="learner" /></td>
            <td><img src={solver} alt="solver" /></td>
            <td><img src={leader} alt="leader" /></td>
          </tr>
          <tr>
            <th>A Curious Learner</th>
            <th>A Problem-Solver</th>
            <th>A Confident Leader</th>
          </tr>
          <tr>
            <td><p>Stepping out of my comfort zone to try a variety of activities, I have always been one to enjoy new experiences and expand my field of knowledge. Taking risks allows me to discover new passions, such as programming, and develop my set of skills further.</p></td>
            <td><p>When faced with a difficult challenge, I have always found that I become increasingly adamant to overcome it and emerge with a determination stronger than before. Computer Engineering is a program that requires this powerful resolve as you consistently navigate through demanding obstacles.</p></td>
            <td><p>While achieving academic excellence is of utmost importance to me, so is developing the ability to guide others to do the same. I believe I am able to set a good example for my peers by working diligently, communicating clearly and being a reliable team member.</p></td>
          </tr>
        </table>
      </div>
      <Parallax className="parallax1" strength={600} bgImage={space1} />
      <div className="about-me">
        <p>About me</p>
      </div>
      <Parallax className="parallax1" strength={600} bgImage={space1} />
    </div>
  );
}
 
export default Home;