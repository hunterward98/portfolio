export default function EducationItem({ education }) {
  return (
    <div className="bg-gradient-to-br from-white to-primary-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-primary-100">
      <h3 className="font-display text-xl font-bold text-primary-900 mb-1">
        {education.degree}
      </h3>
      {education.minors && (Array.isArray(education.minors) ? education.minors.length > 0 : education.minors) && (
        <p className="text-sm text-primary-600 font-medium mb-1">
          Minor{Array.isArray(education.minors) && education.minors.length > 1 ? 's' : ''}: {Array.isArray(education.minors) ? education.minors.join(', ') : education.minors}
        </p>
      )}
      <p className="text-lg text-accent-600 font-semibold mb-2">
        {education.school}
      </p>
      <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
        {education.location && (
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {education.location}
          </span>
        )}
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {education.credential_id ? 'Issued' : 'Graduated'} {education.graduation_date}
        </span>
        {education.credential_id && (
          <span className="font-medium text-primary-700">
            License: {education.credential_id}
          </span>
        )}
      </div>

      {education.verification_url && (
        <div className="mb-4">
          <a
            href={education.verification_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-accent-600 font-semibold text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Verify Credential
          </a>
        </div>
      )}

      {education.honors && education.honors.length > 0 && (
        <div className="mb-3">
          <h4 className="font-semibold text-slate-700 mb-1">Honors & Awards:</h4>
          <ul className="space-y-1">
            {education.honors.map((honor, idx) => (
              <li key={idx} className="text-slate-600 flex gap-2">
                <span className="text-accent-500">•</span>
                <span>{honor}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
