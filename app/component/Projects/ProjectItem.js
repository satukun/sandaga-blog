const ProjectItem = ({ name, description, technology, screenshot, githubLink }) => {
    return (
        <div className="project-item border p-4 rounded">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="mb-2">{description}</p>
            <p className="mb-2"><strong>Technologies:</strong> {technology}</p>
            <img src={screenshot} alt={name} className="mb-2"/>
            <a href={githubLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
}

export default ProjectItem;