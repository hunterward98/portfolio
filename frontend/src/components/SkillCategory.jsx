export default function SkillCategory({ category, skills }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
