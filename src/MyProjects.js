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
//import bankaccount from './images/bankaccount.png';
//import louisvuitton from './images/louisvuitton.png';
import cosmicgateway from './images/cosmicgateway.png';
import de1 from './images/de1.png';
import spotify from './images/spotify.png';
import penguin from './images/penguin.png';
import facultyCV from './images/facultyCV.svg';
import quantum from './images/quantum.png';

const MyProjects = () => {
  useEffect(() => {
    document.title = "Abhi Verma - Projects";
  }, []);

  return (
    <div className="my-projects">
      <div className="my-projects-heading">
        You can checkout all my projects on my <a href="https://github.com/abhiverma13" target="_blank" rel="noreferrer">GitHub</a> profile.
      </div>
      <ProjectRight className="quantum" 
      title= "Quantum AI"
      description="In collaboration with the Stewart Blusson Quantum Matter Institute, this application addresses the challenges in accessing comprehensive learning materials in the field of quantum matter by leveraging Large Language Models (LLMs) to create a user-friendly platform for researchers, professors and students. The solution consolidates research on quantum materials into a centralized, interactive database and incorporates generative AI to enhance engagement and accessibility. The app was developed using AWS services, React, LangChain and uses RAG (Retrieval-Augmented Generation) to generate accurate responses to user queries."
      instructions="Clicking on the logo will take you to the UBC Cloud Innovation Centre GitHub repository where you can download the app and follow the instructions in the deployment guide to use the app yourself. There is also detailed documentation on the project architecture and a user guide to help you navigate the app."
      image={quantum}
      link="https://github.com/UBC-CIC/Quantum-AI">
      </ProjectRight>
      <hr />
      <ProjectLeft className="facultyCV" 
      title= "Faculty CV"
      description="This project involved engineering an AWS and React-powered platform for the UBC Faculty of Medicine to streamline the creation of Curriculum Vitae (CVs), significantly enhancing operational efficiency across 19 departments, 3 schools, and 25 research centers. By integrating external data sources and datasets, the platform developed robust pipelines to fetch, clean, and store raw data from APIs and CSV files uploaded to Amazon S3 buckets into a relational database (RDS PostgreSQL). Additionally, the project automated the CV generation process using a Lambda function hosted in a Docker container, efficiently converting LaTeX files into PDFs. This comprehensive solution alleviated the administrative burden on faculty members, allowing them to focus more on their research and clinical duties while ensuring standardized and accessible CVs."
      instructions="Clicking on the logo will take you to the UBC Cloud Innovation Centre GitHub repository where you can download the app and follow the instructions in the deployment guide to use the app yourself. There is also detailed documentation on the project architecture and a user guide to help you navigate the app."
      image={facultyCV}
      link="https://github.com/UBC-CIC/FacultyCV">
      </ProjectLeft>
      <hr />
      <ProjectRight className="cosmic-gateway" 
      title= "Cosmic Gateway"
      description="Cosmic Gateway manages UBC Launch Pad’s internal club tools, which encompass everything that is used by our club leads, admin work and members. As part of the Wiki sub-team, I have worked on our web application that was constructed using Svelte and effectively manages our documents stored on AWS S3. This full-stack project involved implementing the UI designs made by our team of designers on the front-end. Additionally, we used an intermediary SQL database to query, search, filter and store metadata (who last edited the documents, when were they updated, etc.), which will also need to be synced with the S3 bucket."
      instructions="Clicking on the logo will take you to the current Launch Pad Docs."
      image={cosmicgateway}
      link="https://www.ubclaunchpad.com">
      </ProjectRight>
      <Parallax className="parallax2" strength={600} bgImage={space2} />
      <ProjectLeft className="spotify-app" 
      title= "Spotify VibeCraftr"
      description="Frustrated with my gigantic playlist of 500+ songs, I decided to make an app to filter songs out of playlists based on mood such as sad or party. Knowing people like my dad struggle with finding new songs, I also added the feature to find similar songs by inputting seed tracks. This is a Python-based web application developed with Flask and integrated with the Spotify API, offering a user-friendly interface for playlist management and music exploration. Users can authenticate with their Spotify credentials, explore existing playlists, create new ones, and add tracks to both new and existing playlists."
      instructions="Clicking on the logo will take you to my GitHub repository where you can download the code and follow the instructions in the README.md file to use the app."
      image={spotify}
      link="https://github.com/abhiverma13/Spotify-VibeCraftr">
      </ProjectLeft>
      <hr />
      <ProjectLeft className="movie-review-app" 
      title= "ReelViews"
      description="I am an avid movie watcher and was curious to see how apps like Netflix display such a wide range of movies, which led to this project. This full-stack web application uses The Movie Database API to display the latest movies on the homepage and search for any movie in order to post reviews online. In addition to using TMDB API, I created my own RESTful API to manage the retrieval and storage of reviews for each movie. The front-end of this application was made using HTML, CSS, and JavaScript while the back-end uses Express.js and MongoDB."
      instructions="Clicking on the logo to will take you to my GitHub repository where you can check out what the app looks like as well as the source code."
      image={moviereviewapp}
      link="https://github.com/abhiverma13/ReelViews">
      </ProjectLeft>
      <hr />
      <ProjectRight className="epilog" 
      title= "EpiLog"
      description="EpiLog is a mobile health app designed by UBC Launch Pad to assist individuals with epilepsy and their caregivers in tracking seizures. Consistent monitoring is crucial for successful epilepsy treatment, and this app consolidates epilepsy management tasks into a single platform that can be conveniently shared with others. This app was built using Flutter, Express.js and Firebase. While working on the frontend of the project, I gained valuable experience with Flutter and learned how to design an attractive and interactive user interface."
      instructions="Clicking on the logo will take you to Launch Pad's GitHub where you can download the app as well as checkout other projects that our team has been working on."
      image={epilog}
      link="https://github.com/ubclaunchpad/epilog">
      </ProjectRight>
      <Parallax className="parallax2" strength={600} bgImage={space2} />
      <ProjectLeft className="flappy-pengu" 
      title= "Flappy Pengu"
      description="A remake of 2014’s most popular mobile game Flappy Bird, I designed and constructed Flappy Pengu using the Unity game engine. In addition to coding in C#, I learned fundamental game design principles through making this game, including spawning objects, using physics principles, and implementing game logic. This game has a lot of potential for additional features, that I have yet to make, which can be found in the README.md file on my GitHub repository."
      instructions="Clicking on the logo will take you to my GitHub repository where you can check out what the game looks like or download the code."
      image={penguin}
      link="https://github.com/abhiverma13/Flappy-Pengu">
      </ProjectLeft>
      <hr />
      <ProjectRight className="risc-machine" 
      title= "RISC Machine"
      description="A “Reduced Instruction Set Computer” is essentially a simple computer that can execute programs with a small set of instructions. This was a project that was completed in stages, including creating the datapath, a controller for this datapath and finally adding memory and I/O. The RISC machine was made using Verilog and tested on ModelSim and Quartus in order to be run on a DE1-SoC circuit board."
      instructions="A table with the set of instructions that have been implemented in this RISC machine can be found in the README on my github repository by clicking on the DE1-SoC circuit board."
      image={de1}
      link="https://github.com/abhiverma13/RISC-Machine">
      </ProjectRight>
      <hr />
      <ProjectLeft className="monsterrpggame" 
      title= "Monster RPG Game"
      description="A monster role-playing game that I made using HTML, CSS and JavaScript where one goes through a series of actions to eventually try to defeat the dragon and win the game."
      instructions="Clicking on the logo will take you to my website where you can play the game. You can check out the source code on my GitHub."
      image={monsterrpggame}
      link="https://abhivermamonsterrpggame.netlify.app/">
      </ProjectLeft>
      <Parallax className="parallax2" strength={600} bgImage={space2} />
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
    </div>
  );
}
 
export default MyProjects;