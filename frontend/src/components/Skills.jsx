import SkillCategory from './SkillCategory';

export default function Skills({ data }) {
  return (
    <section className="py-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
        Skills & Technologies
      </h2>
      {Object.entries(data).map(([category, skills]) => (
        <SkillCategory key={category} category={category} skills={skills} />
      ))}
    </section>
  );
}
