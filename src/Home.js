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
import typescript from './images/typescript.png';
import graphql from './images/graphql.svg';
import aws from './images/aws.svg';
import sql from './images/sql.png';
import docker from './images/docker.png';
import pandas from './images/pandas.png';
import numpy from './images/numpy.png';
import svelte from './images/svelte.png';
import jest from './images/jest.png';
import junit from './images/junit.png';
import flask from './images/flask.png';
import linux from './images/linux.svg';
import planetscale from './images/planetscale.jpg';
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
          <div className="skills-table">
            <h1><i className="fa-solid fa-code"></i> Programming Languages</h1>
            <div className="skills-pairs">
              <div className="skill-pair">
                <img src={java} alt="java" />
                <h3>Java</h3>
              </div>
              <div className="skill-pair">
                <img src={c} alt="c" />
                <h3>C/C++</h3>
              </div>
              <div className="skill-pair">
                <img src={python} alt="python" />
                <h3>Python</h3>
              </div>
              <div className="skill-pair">
                <img src={html} alt="html" />
                <h3>HTML</h3>
              </div>
              <div className="skill-pair">
                <img src={css} alt="css" />
                <h3>CSS</h3>
              </div>
              <div className="skill-pair">
                <img src={js} alt="js" />
                <h3>JavaScript</h3>
              </div>
              <div className="skill-pair">
                <img src={typescript} alt="typescript" />
                <h3>TypeScript</h3>
              </div>
              <div className="skill-pair">
                <img src={sql} alt="sql" />
                <h3>SQL</h3>
              </div>
              <div className="skill-pair">
                <img src={graphql} alt="graphql" />
                <h3>GraphQL</h3>
              </div>
              <div className="skill-pair">
                <img src={java} alt="java" />
                <h3>Java</h3>
              </div>
              <div className="skill-pair">
                <img src={c} alt="c" />
                <h3>C/C++</h3>
              </div>
              <div className="skill-pair">
                <img src={python} alt="python" />
                <h3>Python</h3>
              </div>
              <div className="skill-pair">
                <img src={html} alt="html" />
                <h3>HTML</h3>
              </div>
              <div className="skill-pair">
                <img src={css} alt="css" />
                <h3>CSS</h3>
              </div>
              <div className="skill-pair">
                <img src={js} alt="js" />
                <h3>JavaScript</h3>
              </div>
              <div className="skill-pair">
                <img src={typescript} alt="typescript" />
                <h3>TypeScript</h3>
              </div>
              <div className="skill-pair">
                <img className='sql' src={sql} alt="sql" />
                <h3>SQL</h3>
              </div>
              <div className="skill-pair">
                <img src={graphql} alt="graphql" />
                <h3>GraphQL</h3>
              </div>
            </div>
          </div>
          <div className="skills-table2">
            <h1><i className="fa-solid fa-gear"></i> Frameworks and Libraries</h1>
            <div className="skills-pairs">
              <div className="skill-pair">
                <img src={react} alt="react" />
                <h3>React</h3>
              </div>
              <div className="skill-pair">
                <img src={svelte} alt="svelte" />
                <h3>Svelte</h3>
              </div>
              <div className="skill-pair">
                <img src={flutter} alt="flutter" />
                <h3>Flutter</h3>
              </div>
              <div className="skill-pair">
                <img src={jest} alt="jest" />
                <h3>Jest</h3>
              </div>
              <div className="skill-pair">
                <img src={junit} alt="junit" />
                <h3>JUnit</h3>
              </div>
              <div className="skill-pair">
                <img src={flask} alt="flask" />
                <h3>Flask</h3>
              </div>
              <div className="skill-pair">
                <img src={nodejs} alt="nodejs" />
                <h3>Node.js</h3>
              </div>
              <div className="skill-pair">
                <img src={express} alt="express" />
                <h3>Express.js</h3>
              </div>
              <div className="skill-pair">
                <img src={pandas} alt="pandas" />
                <h3>pandas</h3>
              </div>
              <div className="skill-pair">
                <img src={numpy} alt="numpy" />
                <h3>NumPy</h3>
              </div>
              <div className="skill-pair">
                <img src={react} alt="react" />
                <h3>React</h3>
              </div>
              <div className="skill-pair">
                <img src={svelte} alt="svelte" />
                <h3>Svelte</h3>
              </div>
              <div className="skill-pair">
                <img src={flutter} alt="flutter" />
                <h3>Flutter</h3>
              </div>
              <div className="skill-pair">
                <img src={jest} alt="jest" />
                <h3>Jest</h3>
              </div>
              <div className="skill-pair">
                <img src={junit} alt="junit" />
                <h3>JUnit</h3>
              </div>
              <div className="skill-pair">
                <img src={flask} alt="flask" />
                <h3>Flask</h3>
              </div>
              <div className="skill-pair">
                <img src={nodejs} alt="nodejs" />
                <h3>Node.js</h3>
              </div>
              <div className="skill-pair">
                <img src={express} alt="express" />
                <h3>Express.js</h3>
              </div>
            </div>
          </div>
          <div className="skills-table3">
            <h1><i className="fa fa-wrench"></i> Software Tools</h1>
            <div className="skills-pairs">
              <div className="skill-pair">
                <img src={aws} alt="aws" />
                <h3>AWS</h3>
              </div>
              <div className="skill-pair">
                <img src={docker} alt="docker" />
                <h3>Docker</h3>
              </div>
              <div className="skill-pair">
                <img src={linux} alt="linux" />
                <h3>Linux/Unix</h3>
              </div>
              <div className="skill-pair">
                <img src={git} alt="git" />
                <h3>Git</h3>
              </div>
              <div className="skill-pair">
                <img src={mongodb} alt="mongodb" />
                <h3>MongoDB</h3>
              </div>
              <div className="skill-pair">
                <img src={planetscale} alt="planetscale" />
                <h3>PlanetScale</h3>
              </div>
              <div className="skill-pair">
                <img src={aws} alt="aws" />
                <h3>AWS</h3>
              </div>
              <div className="skill-pair">
                <img src={docker} alt="docker" />
                <h3>Docker</h3>
              </div>
              <div className="skill-pair">
                <img src={linux} alt="linux" />
                <h3>Linux/Unix</h3>
              </div>
              <div className="skill-pair">
                <img src={git} alt="git" />
                <h3>Git</h3>
              </div>
              <div className="skill-pair">
                <img src={mongodb} alt="mongodb" />
                <h3>MongoDB</h3>
              </div>
              <div className="skill-pair">
                <img src={planetscale} alt="planetscale" />
                <h3>PlanetScale</h3>
              </div>
            </div>
          </div>
        </div>
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
          <p>As a computer engineering student at UBC, I strive to be a well-rounded, innovative individual who is always open to learning and prepared to face difficult challenges head on. Balancing a variety of extracurriculars while achieving academic excellence has made me eager to try new experiences and taught me to manage my time wisely. Some of my hobbies include programming, playing basketball, working out, listening to music and watching the latest movie or tv show. <br /> <br /> My love for coding started with Waterloo’s CS Circles tutorials on Python and since then it has become my passion. My aspiration is to utilize technology to enhance the well-being of humanity, with the intention of creating a legacy that yields a positive, lasting influence on society.</p>
        </div>
      </div>
      <Parallax className="parallax1" strength={600} bgImage={space1} />
      <div className="quote">
        <div className="quote-text">
          <p>“Software is a great combination between artistry and engineering”</p>
        </div>
        <div className="quote-author">
          <p>-Bill Gates</p>
        </div>
      </div>
    </div>
  );
}
 
export default Home;