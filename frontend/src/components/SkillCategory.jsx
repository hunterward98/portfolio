export default function SkillCategory({ category, skills }) {
  return (
    <div className="mb-6">
      <h3 className="font-display text-lg font-bold text-primary-700 mb-2">
        {category}
      </h3>
      <p className="text-slate-700 text-base leading-relaxed">
        {skills.join(', ')}
      </p>
    </div>
  );
}
