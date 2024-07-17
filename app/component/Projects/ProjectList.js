import ProjectItem from './ProjectItem';

const ProjectList = () => {
    const projects = [
        {
          id: 1,
          name: 'Project 1',
          description: 'Description for project 1',
          technology: 'React, TypeScript',
          screenshot: '/images/project1.png',
          githubLink: 'https://github.com/username/project1'
        },
        {
          id: 2,
          name: 'Project 2',
          description: 'Description for project 2',
          technology: 'React, TypeScript',
          screenshot: '/images/project1.png',
          githubLink: 'https://github.com/username/project1'
        },
        // 他のプロジェクトデータを追加
      ];
    return  (
        <section className="projects">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map(project => (
              <ProjectItem 
                key={project.id}
                name={project.name}
                description={project.description}
                technology={project.technology}
                screenshot={project.screenshot}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </section>
      );
}

export default ProjectList;