export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          © {currentYear} Hunter Ward. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Built with React, Rails, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
