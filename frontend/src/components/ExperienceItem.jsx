export default function ExperienceItem({ experience }) {
  return (
    <div className="mb-8 border-l-4 border-indigo-500 pl-6">
      <h3 className="text-2xl font-bold text-gray-900">{experience.position}</h3>
      <p className="text-lg text-indigo-600 font-semibold">{experience.company}</p>
      <p className="text-sm text-gray-600 mb-3">
        {experience.location} | {experience.startDate} - {experience.endDate}
      </p>
      <ul className="list-disc list-inside space-y-2">
        {experience.responsibilities.map((resp, idx) => (
          <li key={idx} className="text-gray-700">
            {resp}
          </li>
        ))}
      </ul>
    </div>
  );
}
