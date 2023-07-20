import { useEffect } from "react";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";
import epilog from './images/epilog.png';

const MyProjects = () => {
  useEffect(() => {
    document.title = "Abhi Verma - Projects";
  }, []);

  return (
    <div className="my-projects">
      <div className="my-projects-heading">These are some of my personal as well as team projects.</div>
      <ProjectLeft className="epilog" 
      title= "EpiLog"
      description="EpiLog is a mobile health app designed to assist individuals with epilepsy and their caregivers in tracking seizures. Consistent monitoring is crucial for successful epilepsy treatment, and this app consolidates epilepsy management tasks into a single platform that can be conveniently shared with others. This app was built using Flutter, Express.js and Firebase. While working on the frontend aspect of the project, I gained valuable experience with Flutter and learned how to design an attractive and interactive user interface."
      instructions="Clicking on the logo to the right will take you to UBC Launch Pad's GitHub where you can download the app as well as checkout other projects that our team has been working on."
      image={epilog}
      link="https://github.com/ubclaunchpad/epilog">
      </ProjectLeft>
      <hr />
      <ProjectRight className="epilog" 
      title= "EpiLog"
      description="EpiLog is a mobile health app designed to assist individuals with epilepsy and their caregivers in tracking seizures. Consistent monitoring is crucial for successful epilepsy treatment, and this app consolidates epilepsy management tasks into a single platform that can be conveniently shared with others. This app was built using Flutter, Express.js and Firebase. While working on the frontend aspect of the project, I gained valuable experience with Flutter and learned how to design an attractive and interactive user interface."
      instructions="Clicking on the logo to the right will take you to UBC Launch Pad's GitHub where you can download the app as well as checkout other projects that our team has been working on."
      image={epilog}
      link="https://github.com/ubclaunchpad/epilog">
      </ProjectRight>
    </div>
  );
}
 
export default MyProjects;