export default function Header({ data }) {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
          {data.name}
        </h1>
        <p className="text-xl sm:text-2xl mb-6 text-indigo-100">
          {data.title}
        </p>

        <div className="flex flex-wrap gap-4 text-sm sm:text-base text-indigo-100">
          {data.email && (
            <a href={`mailto:${data.email}`} className="hover:text-white transition-colors">
              ✉ {data.email}
            </a>
          )}
          {data.phone && (
            <span>📞 {data.phone}</span>
          )}
          {data.location && (
            <span>📍 {data.location}</span>
          )}
        </div>

        <div className="flex gap-4 mt-6">
          {data.github && (
            <a
              href={`https://${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              GitHub
            </a>
          )}
          {data.linkedin && (
            <a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
