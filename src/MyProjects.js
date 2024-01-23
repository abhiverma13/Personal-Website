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
import cosmicgateway from './images/cosmicgateway.png';
import de1 from './images/de1.png';
import spotify from './images/spotify.png';
import penguin from './images/penguin.png';

const MyProjects = () => {
  useEffect(() => {
    document.title = "Abhi Verma - Projects";
  }, []);

  return (
    <div className="my-projects">
      <div className="my-projects-heading">
        You can checkout all my projects on my <a href="https://github.com/abhiverma13" target="_blank" rel="noreferrer">GitHub</a> profile.
      </div>
      <ProjectLeft className="cosmic-gateway" 
      title= "Cosmic Gateway"
      description="Cosmic Gateway manages UBC Launch Pad’s internal club tools, which encompass everything that is used by our club leads, admin work and members. As part of the Wiki sub-team, I have worked on our web application that was constructed using Svelte and effectively manages our documents stored on AWS S3. This full-stack project involves implementing the UI designs made by our team of designers on the front-end. Additionally, we want to store metadata (who last edited the documents, when were they updated, etc.) in an intermediary database that will be used to query, search, filter and store sensitive information. We are currently working on implementing this with a SQL database, PlanetScale, which will also need to be synced with the S3 bucket. This will be an ongoing project for the 2023-2024 academic year."
      instructions="Clicking on the logo will take you to the current Launch Pad Docs, which is still a work-in-progress."
      image={cosmicgateway}
      link="https://docs.ubclaunchpad.com/">
      </ProjectLeft>
      <hr />
      <ProjectRight className="flappy-pengu" 
      title= "Flappy Pengu"
      description="A remake of 2014’s most popular mobile game, I designed and constructed Flappy Pengu using the Unity game engine. In addition to coding in C#, through making this game, I learned fundamental game design principles, including spawning objects, using physics principles, and implementing game logic. This game has a lot of potential for additional features, that I have yet to make, which can be found in the README.md file on my GitHub repository."
      instructions="Clicking on the logo will take you to my GitHub repository where you can check out what the game looks like or download the code."
      image={penguin}
      link="https://github.com/abhiverma13/Flappy-Pengu">
      </ProjectRight>
      <hr />
      <ProjectLeft className="spotify-app" 
      title= "Spotify Playlist Generator"
      description="Frustrated with my gigantic playlist of 500+ songs, I decided to make an app to filter songs out of playlists based on mood such as sad or party. Knowing people like my dad struggle with finding new songs, I also added the feature to find similar songs by inputting seed tracks. This is a Python-based web application developed with Flask and integrated with the Spotify API, offering a user-friendly interface for playlist management and music exploration. Users can authenticate with their Spotify credentials, explore existing playlists, create new ones, and add tracks to both new and existing playlists."
      instructions="Clicking on the logo will take you to my GitHub repository where you can download the code and follow the instructions in the README.md file to use the app."
      image={spotify}
      link="https://github.com/abhiverma13/Spotify-Playlist-Generator">
      </ProjectLeft>
      <Parallax className="parallax2" strength={600} bgImage={space2} />
      <ProjectRight className="movie-review-app" 
      title= "Movie Review App"
      description="I am an avid movie watcher and was curious to see how apps like Netflix display such a wide range of movies, which led to this project. This full-stack web application uses The Movie Database API to display the latest movies on the homepage and search for any movie in order to post reviews online. In addition to using TMDB API, I created my own RESTful API to manage the retrieval and storage of reviews for each movie. The front-end of this application was made using HTML, CSS, and JavaScript while the back-end uses Express.js and MongoDB."
      instructions="Clicking on the logo to will take you to my GitHub repository where you can check out what the app looks like as well as the source code."
      image={moviereviewapp}
      link="https://github.com/abhiverma13/Movie-Review-App">
      </ProjectRight>
      <hr />
      <ProjectLeft className="epilog" 
      title= "EpiLog"
      description="EpiLog is a mobile health app designed by UBC Launch Pad to assist individuals with epilepsy and their caregivers in tracking seizures. Consistent monitoring is crucial for successful epilepsy treatment, and this app consolidates epilepsy management tasks into a single platform that can be conveniently shared with others. This app was built using Flutter, Express.js and Firebase. While working on the frontend of the project, I gained valuable experience with Flutter and learned how to design an attractive and interactive user interface."
      instructions="Clicking on the logo will take you to Launch Pad's GitHub where you can download the app as well as checkout other projects that our team has been working on."
      image={epilog}
      link="https://github.com/ubclaunchpad/epilog">
      </ProjectLeft>
      <hr />
      <ProjectRight className="risc-machine" 
      title= "RISC Machine"
      description="A “Reduced Instruction Set Computer” is essentially a simple computer that can execute programs with a small set of instructions. This was a project that was completed in stages, including creating the datapath, a controller for this datapath and finally adding memory and I/O. The RISC machine was made using Verilog and tested on ModelSim and Quartus in order to be run on a DE1-SoC circuit board."
      instructions="A table with the set of instructions that have been implemented in this RISC machine can be found in the README on my github repository by clicking on the DE1-SoC circuit board."
      image={de1}
      link="https://github.com/abhiverma13/RISC-Machine">
      </ProjectRight>
      <Parallax className="parallax2" strength={600} bgImage={space2} />
      <ProjectLeft className="monsterrpggame" 
      title= "Monster RPG Game"
      description="A monster role-playing game that I made using HTML, CSS and JavaScript where one goes through a series of actions to eventually try to defeat the dragon and win the game."
      instructions="Clicking on the logo will take you to my website where you can play the game. You can check out the source code on my GitHub."
      image={monsterrpggame}
      link="https://abhivermamonsterrpggame.netlify.app/">
      </ProjectLeft>
      <hr />
      <ProjectRight className="dojoblog" 
      title= "The Verma Blogs"
      description="My first React application is a blog website where a user can create and post a new blog as well as view other people's blogs. The data is all stored in a local file, however, if I wanted to expand this project I could have used an external database such as MongoDB."
      instructions="Clicking on the logo will take you to my GitHub repository where you can check out the source code as well as download the project."
      image={vermablogs}
      link="https://github.com/abhiverma13/Verma-Blogs">
      </ProjectRight>
      <hr />
      <ProjectLeft className="ponggame" 
      title= "Pong Game"
      description="​This is a classic two player game that I created using a Java GUI with an
      increasing speed of the ball after each hit and added sound effects.
      ​The controls for player 1 are the arrow keys, while the controls for
      player 2 are W, S, A and D."
      instructions="You can download this game through my GitHub repository by clicking on the image."
      image={ponggame}
      link="https://github.com/abhiverma13/Pong-Game">
      </ProjectLeft>
      <Parallax className="parallax2" strength={600} bgImage={space2} />
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
      <hr />
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