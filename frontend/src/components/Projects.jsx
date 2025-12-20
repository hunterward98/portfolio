import ProjectCard from './ProjectCard';

export default function Projects({ data }) {
  return (
    <section className="py-16">
      <h2 className="font-display text-4xl sm:text-5xl font-bold mb-12 text-primary-900">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
