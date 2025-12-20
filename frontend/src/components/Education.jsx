import EducationItem from './EducationItem';

export default function Education({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-16">
      <h2 className="font-display text-4xl sm:text-5xl font-bold mb-12 text-primary-900">
        Education
      </h2>
      <div className="space-y-6">
        {data
          .sort((a, b) => {
            // Make college degree show first
            if (!a.credential_id && b.credential_id) return -1;
            if (a.credential_id && !b.credential_id) return 1;
            return 0;
          })
          .map((education) => (
            <EducationItem key={education.id} education={education} />
          ))}
      </div>
    </section>
  );
}
