import './ProjectCard.css';

function ProjectCard({ language, title, desc }) {
    return (
        <div className='project-card'>
            <img className='project-card-img' src="project.png"></img>
            <div className='project-card-info'>
                <div className='project-card-lang'>{language}</div>
                <div className='project-card-title'>{title}</div>
                <div className='project-card-desc'>{desc}</div>
            </div>
        </div>
    )
}

export default ProjectCard;