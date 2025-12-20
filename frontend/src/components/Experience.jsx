import ExperienceItem from './ExperienceItem';

export default function Experience({ data }) {
  return (
    <section className="py-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
        Work Experience
      </h2>
      {data.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </section>
  );
}
