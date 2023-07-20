const ProjectRight = ({className, title, description, instructions, image, link}) => {
  return (
    <div className={className}>
      <div className="project-container-right">
        <h1 className="project-title-right">{title}</h1>
        <div className="project-content-right">
          <a href={link} target="_blank" rel="noreferrer"><img src={image} alt={className} /></a>
          <p><br /><br /> {description} <br /><br /><br /> {instructions}</p>
        </div>
      </div>
    </div>
  );
}
 
export default ProjectRight;