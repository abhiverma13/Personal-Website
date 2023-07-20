const ProjectLeft = ({className, title, description, instructions, image, link}) => {
  return (
    <div className={className}>
      <div className="project-container-left">
        <h1 className="project-title-left">{title}</h1>
        <div className="project-content-left">
          <p><br /><br /> {description} <br /><br /><br /> {instructions}</p>
          <a href={link} target="_blank" rel="noreferrer"><img src={image} alt={className} /></a>
        </div>
      </div>
    </div>
  );
}
 
export default ProjectLeft;