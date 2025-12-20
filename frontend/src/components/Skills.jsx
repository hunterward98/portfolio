import SkillCategory from './SkillCategory';

export default function Skills({ data }) {
  return (
    <section className="py-16">
      <h2 className="font-display text-4xl sm:text-5xl font-bold mb-12 text-primary-900">
        Skills & Technologies
      </h2>
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 sm:p-12 border-2 border-primary-200">
        {Object.entries(data).map(([category, skills]) => (
          <SkillCategory key={category} category={category} skills={skills} />
        ))}
      </div>
    </section>
  );
}
