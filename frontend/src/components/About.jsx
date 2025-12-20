export default function About({ data }) {
  return (
    <section className="py-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
        About Me
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        {data.summary}
      </p>
    </section>
  );
}
