import { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import space1 from './images/space1.jpg';
import myimage from './images/personalpic.jpg';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import flutter from './images/flutter.png';
import java from './images/java.png';
import c from './images/c.png';
import python from './images/python.png';
import mongodb from './images/mongodb.png';
import nodejs from './images/nodejs.png';
import express from './images/express.png';
import git from './images/git.png';
import matlab from './images/matlab.png';
import arduino from './images/arduino.png';
import verilog from './images/verilog.png';
import arm from './images/arm.png';
import typescript from './images/typescript.png';
import svelte from './images/svelte.png';
import learner from './images/learner.png'
import solver from './images/solver.png';
import leader from './images/leader.png';
import resume from './Resume.pdf';

const Home = () => {

  useEffect(() => {
    document.title = "Abhi Verma - Home";
  }, []);

  return (
    <div className="home">
      <div className="introduction">
        <div className="gif">
          <p className="title">I am <b>Abhi Verma</b>.</p>
          <p className="subtitle">A <b>Computer Engineer</b> at UBC.</p>
        </div>
      </div>
      <div className="skills">
        <h2 className='skills-heading'>Skills</h2>
        <div className="tables">
          <table className="skills-table">
            <caption><h1><i class="fa-solid fa-code"></i> Programming Languages</h1></caption>
            <tr className="skills-images">
              <td><img src={java} alt="java" /></td>
              <td><img src={c} alt="c" /></td>
              <td><img src={python} alt="python" /></td>
            </tr>
            <tr className="skills-title">
              <td><h3>Java</h3></td>
              <td><h3>C/C++</h3></td>
              <td><h3>Python</h3></td>
            </tr>
            <tr className="skills-subtitle">
              <td><h3>Intermediate</h3></td>
              <td><h3>Basic</h3></td>
              <td><h3>Basic</h3></td>
            </tr>
            <tr className="skills-images">
              <td><img src={html} alt="html" /></td>
              <td><img src={css} alt="css" /></td>
              <td><img src={js} alt="js" /></td>
            </tr>
            <tr className="skills-title">
              <td><h3>HTML</h3></td>
              <td><h3>CSS</h3></td>
              <td><h3>JavaScript</h3></td>
            </tr>
            <tr className="skills-subtitle">
              <td><h3>Intermediate</h3></td>
              <td><h3>Intermediate</h3></td>
              <td><h3>Intermediate</h3></td>
            </tr>
            <tr className="skills-images">
              <td></td>
              <td><img src={typescript} alt="typescript" /></td>
              <td></td>
            </tr>
            <tr className="skills-title">
              <td><h3> </h3></td>
              <td><h3>TypeScript</h3></td>
              <td><h3> </h3></td>
            </tr>
            <tr className="skills-subtitle">
              <td><h3>Intermediate</h3></td>
              <td><h3>Basic</h3></td>
              <td><h3>Basic</h3></td>
            </tr>
          </table>
          <table className="skills-table2">
          <caption><h1><i class="fa-solid fa-database"></i> Software Tools</h1></caption>
            <tr className="skills-images">
              <td><img src={react} alt="react" /></td>
              <td><img src={svelte} alt="svelte" /></td>
              <td><img src={flutter} alt="flutter" /></td>
            </tr>
            <tr className="skills-title">
              <td><h3>React</h3></td>
              <td><h3>Svelte</h3></td>
              <td><h3>Flutter</h3></td>
            </tr>
            <tr className="skills-subtitle">
              <td><h3>Intermediate</h3></td>
              <td><h3>Intermediate</h3></td>
              <td><h3>Basic</h3></td>
            </tr>
            <tr>
              <td><img src={nodejs} alt="nodejs" /></td>
              <td><img src={express} alt="express" /></td>
              <td><img src={mongodb} alt="mongodb" /></td>
            </tr>
            <tr>
              <td><h3>Node.js</h3></td>
              <td><h3>Express.js</h3></td>
              <td><h3>MongoDB</h3></td>
            </tr>
            <tr className="skills-subtitle">
              <td><h3>Basic</h3></td>
              <td><h3>Basic</h3></td>
              <td><h3>Intermediate</h3></td>
            </tr>
            <tr className="skills-images">
              <td></td>
              <td><img src={git} alt="git" /></td>
              <td></td>
            </tr>
            <tr className="skills-title">
              <td><h3> </h3></td>
              <td><h3>Git</h3></td>
              <td><h3> </h3></td>
            </tr>
            <tr className="skills-subtitle">
              <td><h3>Intermediate</h3></td>
              <td><h3>Basic</h3></td>
              <td><h3>Basic</h3></td>
            </tr>
          </table>
        </div>
      </div>
      <div className="lasttable">
          <table className="skills-table3">
          <caption><h1><i class="fa fa-wrench"></i> Other Tools</h1></caption>
            <tr>
              <td><img src={matlab} alt="matlab" /></td>
              <td><img src={verilog} alt="verilog" /></td>
            </tr>
            <tr>
              <td><h3>MATLAB</h3></td>
              <td><h3>Verilog</h3></td>
            </tr>
            <tr className="skills-subtitle">
              <td><h3>Basic</h3></td>
              <td><h3>Intermediate</h3></td>
            </tr>
            <tr>
              <td><img src={arduino} alt="arduino" /></td>
              <td><img src={arm} alt="arm" /></td>
            </tr>
            <tr>
              <td><h3>Arduino</h3></td>
              <td><h3>ARMv7</h3></td>
            </tr>
            <tr className="skills-subtitle">
              <td><h3>Basic</h3></td>
              <td><h3>Intermediate</h3></td>
            </tr>
          </table>
        </div>
      <Parallax className="parallax1" strength={600} bgImage={space1} />
      <div className="strengths">
        <h2 className="iam">I Am...</h2>
        <div className="strengths-table">
          <div className="learner">
            <img src={learner} alt="learner" />
            <h2>A Curious Learner</h2>
            <p>Stepping out of my comfort zone to try a variety of activities, I have always been one to enjoy new experiences and expand my field of knowledge. Taking risks allows me to discover new passions, such as programming, and develop my set of skills further.</p>
          </div>
          <div className="solver">
            <img src={solver} alt="solver" />
            <h2>A Problem-Solver</h2>
            <p>When faced with a difficult challenge, I have always found that I become increasingly adamant to overcome it and emerge with a determination stronger than before. Computer engineering requires this powerful resolve as you consistently navigate through demanding obstacles.</p>
          </div>
          <div className="leader">
            <img src={leader} alt="leader" />
            <h2>A Confident Leader</h2>
            <p>While achieving academic excellence is of utmost importance to me, so is developing the ability to guide others to do the same. I believe I am able to set a good example for my peers by working diligently, communicating clearly and being a reliable team member.</p>
          </div>
        </div>
      </div>
      <div className="about-me">
        <div className="my-image">
          <img src={myimage} alt="myimage" />
          <button onClick = {() => {window.open(resume, "_blank")}}>MY RESUME</button>
        </div>
        <div className="about-me-text">
          <h1>A Little More About <br /> Myself.</h1>
          <p>As a computer engineering student at UBC, I strive to be a well-rounded, innovative individual who is always open to learning and prepared to face difficult challenges head on. Balancing a variety of extracurriculars while achieving academic excellence has made me eager to try new experiences and taught me to manage my time wisely. Some of my hobbies include programming, playing basketball, working out, listening to music and watching the latest movie or tv show. <br /> <br /> My love for coding started with Waterloo’s CS Circles tutorials on Python and since then it has become my passion. Currently I am in UBC Launch Pad, a software design team that works in teams to build innovative apps. My aspiration is to utilize technology to enhance the well-being of humanity, with the intention of creating a legacy that yields a positive, lasting influence on society.</p>
        </div>
      </div>
      <Parallax className="parallax1" strength={600} bgImage={space1} />
      <div className="quote">
        <div className="quote-text">
          <p>“Creativity is intelligence having fun”</p>
        </div>
        <div className="quote-author">
          <p>-Albert Einstein</p>
        </div>
      </div>
    </div>
  );
}
 
export default Home;