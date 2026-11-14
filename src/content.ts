// All site copy lives here. Edit this file; the page is rendered from it at build time.

export interface Link {
  label: string;
  href: string;
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  points: string[];
}

export interface Project {
  name: string;
  blurb: string;
  tech: string[];
  href?: string;
}

export interface Content {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  links: Link[];
  experience: Experience[];
  projects: Project[];
  skills: { group: string; items: string[] }[];
  education: { school: string; degree: string; years: string }[];
}

export const content: Content = {
  name: "Hunter Ward",
  role: "Software Engineer",
  tagline: "I build reliable software and occasionally make it shiny.",
  bio: "Placeholder bio. Two or three sentences about what you work on, what you care about, and what you're looking for next.",
  links: [
    { label: "resume", href: "resume.pdf" },
    { label: "github", href: "https://github.com/hunterward98" },
    { label: "linkedin", href: "https://www.linkedin.com/in/your-handle" },
    { label: "email", href: "mailto:you@example.com" },
  ],
  experience: [
    {
      company: "Company Name",
      role: "Software Engineer",
      start: "2024",
      end: "now",
      points: [
        "Placeholder: an impact-focused bullet with a number in it.",
        "Placeholder: another thing you shipped and why it mattered.",
      ],
    },
    {
      company: "Previous Company",
      role: "Software Engineering Intern",
      start: "2023",
      end: "2023",
      points: ["Placeholder: what you built during the internship."],
    },
  ],
  projects: [
    {
      name: "Project One",
      blurb: "Placeholder: one sentence on what it does and what's interesting about it.",
      tech: ["TypeScript", "WebGL"],
      href: "https://github.com/hunterward98",
    },
    {
      name: "Project Two",
      blurb: "Placeholder: one sentence on what it does and what's interesting about it.",
      tech: ["Ruby on Rails", "React"],
    },
    {
      name: "Project Three",
      blurb: "Placeholder: one sentence on what it does and what's interesting about it.",
      tech: ["Go", "SQLite"],
    },
  ],
  skills: [
    { group: "languages", items: ["TypeScript", "Ruby", "Python", "SQL"] },
    { group: "frameworks", items: ["React", "Rails", "Node"] },
    { group: "tools", items: ["Git", "Docker", "Linux", "AWS"] },
  ],
  education: [{ school: "University Name", degree: "B.S. Computer Science", years: "2019 – 2023" }],
};
