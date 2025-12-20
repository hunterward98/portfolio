import ProjectCard from './ProjectCard';

export default function Projects({ data }) {
  return (
    <section className="py-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
