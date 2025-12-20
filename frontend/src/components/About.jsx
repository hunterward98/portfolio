export default function About({ data }) {
  return (
    <section className="py-16 animate-slide-up">
      <div className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-xl p-8 sm:p-12 border-2 border-primary-100">
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8 text-primary-900">
          About Me
        </h2>
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
          {data.summary}
        </p>
      </div>
    </section>
  );
}
