export default function ExperienceItem({ experience }) {
  return (
    <div className="group relative mb-8 pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-accent-500 before:rounded-full before:ring-4 before:ring-accent-100 hover:before:ring-accent-200 transition-all">
      <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-gradient-to-b from-accent-400 to-transparent"></div>

      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-primary-100 hover:border-primary-300">
        <h3 className="font-display text-2xl font-bold text-primary-900 mb-1">
          {experience.position}
        </h3>
        <p className="text-lg text-accent-600 font-semibold mb-2">
          {experience.company}
        </p>
        <p className="text-sm text-slate-500 mb-4 flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {experience.location}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {experience.start_date} - {experience.end_date}
          </span>
        </p>
        <ul className="space-y-2">
          {experience.responsibilities.map((resp, idx) => (
            <li key={idx} className="text-slate-700 flex gap-3">
              <span className="text-purple-600 mt-1.5 flex-shrink-0">•</span>
              <span className="leading-relaxed">{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
