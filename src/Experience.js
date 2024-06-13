import { useEffect } from "react";
import { Parallax } from 'react-parallax';
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";
import ubclaunchpad from './images/ubclaunchpad.jpg';
import compsci from './images/compsci.jpg';
import space3 from './images/space3.jpeg';
import lifeguard from './images/lifeguard.jpg';
import alibid from './images/alibid.jpg';
import ubccic from './images/ubccic.jpg';

const Experience = () => {
  useEffect(() => {
    document.title = "Abhi Verma - Experience";
  }, []);
  
  return (
    <div className="experience">
      <div className="experience-heading">
        These are some of the experiences that have allowed me to refine my skills.
      </div>
      <ProjectLeft className="ubccic" 
      title= "UBC x AWS Cloud Innovation Center"
      description="The first of its kind in Canada, the UBC Cloud Innovation Centre (CIC) aims to solve real-world challenges by engaging and collaborating with stakeholders. As a CIC developer, I build open-source software solutions for various sponsors in collaboration with Amazon Web Services."
      image={ubccic}>
      </ProjectLeft>
      <hr />
      <ProjectRight className="ubclaunchpad" 
      title= "UBC Launch Pad Developer"
      description="Launch Pad is a design team committed to developing software projects within a collaborative and professional framework. Through this team I am able to meet other tech enthusiasts, work in a team environment, learn about professional development tools and principles, and share my knowledge with others. We form teams based on shared interests and project ideas, and work tirelessly to see our projects through to completion."
      image={ubclaunchpad}>
      </ProjectRight>
      <Parallax className="parallax2" strength={600} bgImage={space3} />
      <ProjectLeft className="compsci" 
      title= "Computer Science TA"
      description="In my senior year of high school I was able to refine my coding skills by helping other students in multiple Computer Science classes. As a TA, I evaluated and gave feedback on assignments which included work with object-oriented programming, data structures, iterative and recursive functions. Additionally, I created testers for every assignment to allow students to check their own code and also prepared PowerPoint tutorials on how to use Java Swing."
      image={compsci}>
      </ProjectLeft>
      <hr />
      <ProjectRight className="lifeguard" 
      title= "Lifeguarding"
      description="Working a part-time job while maintaining exceptional grades, I was able to master time-management as well as improve my communication skills. I responded to emergencies and ensured a safe aquatic environment according to National Lifeguard standards. I also demonstrated exceptional customer service by dealing with any concerns patrons may have."
      image={lifeguard}>
      </ProjectRight>
      <Parallax className="parallax2" strength={600} bgImage={space3} />
      <div className="companyprogram">
        <div className="project-container-left">
          <h1 className="project-title-left">Company Program</h1>
          <div className="project-content-left">
            <p><br /><br /> Through my participation in this program, I experienced the risks and rewards of entrepreneurship by creating a business and developed critical leadership skills. Being a lead on the marketing team, I was exposed to the frustrations of working in a group, however, I learned that every individual has their own strengths, which can help a team reach new heights of success. My company, Polaris Candles, which sold scented candles ended up making a profit of $738.27, half of which we donated to the Canadian Mental Health Association. <br /><br /><br />Check out a promotional video I created with my team members.</p>
            <iframe title="Company Program Video" height="350vh" width="2500vh" src="https://www.youtube.com/embed/oB4vQakZvHU"></iframe>
          </div>
        </div>
      </div>
      <hr />
      <ProjectRight className="alibid" 
      title= "Alibid Society"
      description="Alibid Society is an international, non-profit organization which hosts
      workshops and tournaments related to speech and debate. It gave me
      the confidence to present my ideas in an effective way. Through my
      experiences as a member of this organization, I was able to 
      enhance my public speaking skills and create many ​meaningful
      ​connections with my peers."
      image={alibid}>
      </ProjectRight>
    </div>
  );
}
 
export default Experience;