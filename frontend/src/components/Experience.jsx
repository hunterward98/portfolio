import ExperienceItem from './ExperienceItem';

export default function Experience({ data }) {
  return (
    <section className="py-16">
      <h2 className="font-display text-4xl sm:text-5xl font-bold mb-12 text-primary-900">
        Work Experience
      </h2>
      <div className="space-y-0">
        {data.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
