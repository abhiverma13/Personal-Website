import { useEffect } from "react";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";
import epilog from './images/epilog.png';
import moviereviewapp from './images/moviereviewapp.png';
import vermablogs from './images/vermablogs.png';
import { Parallax } from 'react-parallax';
import space2 from './images/space2.jpg';
import monsterrpggame from './images/monsterrpggame.png';
import ponggame from './images/ponggame.gif';
import gameoflife from './images/gameoflife.gif';
import bankaccount from './images/bankaccount.png';
import louisvuitton from './images/louisvuitton.png';

const MyProjects = () => {
  useEffect(() => {
    document.title = "Abhi Verma - Projects";
  }, []);

  return (
    <div className="my-projects">
      <div className="my-projects-heading">
        You can checkout all my projects on my <a href="https://github.com/abhiverma13" target="_blank" rel="noreferrer">GitHub</a> profile.
      </div>
      <ProjectLeft className="epilog" 
      title= "EpiLog"
      description="EpiLog is a mobile health app designed by UBC Launch Pad to assist individuals with epilepsy and their caregivers in tracking seizures. Consistent monitoring is crucial for successful epilepsy treatment, and this app consolidates epilepsy management tasks into a single platform that can be conveniently shared with others. This app was built using Flutter, Express.js and Firebase. While working on the frontend of the project, I gained valuable experience with Flutter and learned how to design an attractive and interactive user interface."
      instructions="Clicking on the logo will take you to Launch Pad's GitHub where you can download the app as well as checkout other projects that our team has been working on."
      image={epilog}
      link="https://github.com/ubclaunchpad/epilog">
      </ProjectLeft>
      <hr />
      <ProjectRight className="movie-review-app" 
      title= "Movie Review App"
      description="This full stack web application uses The Movie Database API to display the latest movies on the homepage as well as search for any movie in order to post reviews online. It is currently hosted on a Replit server. The front-end of this application was made using HTML, CSS and JavaScript while the backend used Express.js and MongoDB."
      instructions="Clicking on the logo to will take you to the website and you can check out the source code on my GitHub."
      image={moviereviewapp}
      link="https://movie-app-frontend.averma1304.repl.co/index.html">
      </ProjectRight>
      <hr />
      <ProjectLeft className="dojoblog" 
      title= "The Verma Blogs"
      description="My first React application is a blog website where a user can create and post a new blog as well as view other people's blogs. The data is all stored in a local file, however, if I wanted to expand this project I could have used an external database such as MongoDB."
      instructions="Clicking on the logo will take you to my GitHub repository where you can check out the source code as well as download the project."
      image={vermablogs}
      link="https://github.com/abhiverma13/Verma-Blogs">
      </ProjectLeft>
      <Parallax className="parallax2" strength={600} bgImage={space2} />
      <ProjectRight className="ponggame" 
      title= "Pong Game"
      description="​This is a classic two player game that I created using a Java GUI with an
      increasing speed of the ball after each hit and added sound effects.
      ​The controls for player 1 are the arrow keys, while the controls for
      player 2 are W, S, A and D."
      instructions="You can download this game through my GitHub repository by clicking on the image."
      image={ponggame}
      link="https://github.com/abhiverma13/Pong-Game">
      </ProjectRight>
      <hr />
      <ProjectLeft className="monsterrpggame" 
      title= "Monster RPG Game"
      description="A monster role-playing game that I made using HTML, CSS and JavaScript where one goes through a series of actions to eventually try to defeat the dragon and win the game."
      instructions="Clicking on the logo will take you to my Replit where you can play the game as well as check out the source code."
      image={monsterrpggame}
      link="https://replit.com/@averma1304/Monster-RPG-Game?v=1">
      </ProjectLeft>
      <hr />
      <ProjectRight className="gameoflife" 
      title= "Game of Life"
      description="​​A simulation invented in 1970 by Cambridge mathematician,
      John Conway, where one creates an initial state of cells and then
      observes the evolution of those cells.
      ​I have created this game in C through the use of arrays."
      instructions="​Clicking on the image will take you to my Replit where you
      ​can play the game yourself as well as checkout the source code."
      image={gameoflife}
      link="https://replit.com/@averma1304/Game-of-Life?v=1">
      </ProjectRight>
      <Parallax className="parallax2" strength={600} bgImage={space2} />
      <ProjectLeft className="bankaccount" 
      title= "Bank Account"
      description="This is Java GUI that I have made which keeps track of the current balance, withdrawals and deposits of two separate bank accounts."
      instructions="Clicking on the image will take you to my Replit where ​you can checkout the GUI yourself as well as checkout the source code."
      image={bankaccount}
      link="https://replit.com/@averma1304/Bank-Account?v=1">
      </ProjectLeft>
      <hr />
      <ProjectRight className="louisvuitton" 
      title= "Louis Vuitton Logo"
      description="This is a function I created that draws the Louis Vuitton logo
      using Turtle graphics in Python. The function takes in the coordinates,
      ​size and angle at which to draw the logo."
      instructions="Clicking on the image will take you to my Replit
      where you can see the logo being drawn yourself as well as
      ​checkout the source code."
      image={louisvuitton}
      link="https://replit.com/@averma1304/Louis-Vuitton-Logo?v=1">
      </ProjectRight>
    </div>
  );
}
 
export default MyProjects;