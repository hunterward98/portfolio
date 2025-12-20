export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-primary-900 via-primary-700 to-slate-900 text-white py-12 mt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wIDI0djIgMC0yem0tMiAwdjItMnptLTIgMHYyLTJ6bS0yIDB2Mi0yem0tMiAwdjItMnptLTIgMHYyLTJ6bS0yIDB2Mi0yem0tMiAwdjItMnptLTIgMHYyLTJ6bS0yIDB2Mi0yem0tMiAwdjItMnptLTIgMHYyLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-primary-100 text-sm mb-2">
            © {currentYear} Hunter Ward. All rights reserved.
          </p>
          <p className="text-primary-200/70 text-xs flex items-center justify-center gap-2">
            <span>Built with</span>
            <span className="text-accent-300 font-semibold">React</span>
            <span>•</span>
            <span className="text-accent-300 font-semibold">Rails</span>
            <span>•</span>
            <span className="text-accent-300 font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
