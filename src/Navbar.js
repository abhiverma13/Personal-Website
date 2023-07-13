import { Link } from 'react-router-dom';
import logo from './images/logo.png'

const Navbar = () => {
  return (  
    <nav className='navbar'>
      <img src={logo} alt='logo'/>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/myprojects">MY PROJECTS</Link>
        <Link to="/experience">EXPERIENCE</Link>
        <Link to="/contactme">CONTACT ME</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;