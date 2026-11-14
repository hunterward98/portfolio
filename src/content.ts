// All site copy lives here. Edit this file; the page is rendered from it at build time.

export interface Link {
  label: string;
  href: string;
  /** Original-controller face button: A green, B red, X blue, Y yellow. */
  button?: "A" | "B" | "X" | "Y";
}

export interface Experience {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  points: string[];
}

export interface Project {
  name: string;
  blurb: string;
  tech: string[];
  href?: string;
  dates?: string;
  points?: string[];
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
  education: { school: string; degree: string; years?: string }[];
  certifications: string[];
}

export const content: Content = {
  name: "Hunter Ward",
  role: "Software Engineer",
  tagline: "Product-focused engineer building enterprise web apps end-to-end.",
  bio: "Product-focused software engineer with over five years of experience building enterprise web applications end-to-end in Ruby on Rails, Java Spring Boot, React, and Vue. Currently building and obsessing over RacePicks, a fantasy motorsport platform for the most intense racing fans. Based in Washington State.",
  links: [
    { label: "resume", href: "resume.pdf", button: "A" },
    { label: "github", href: "https://github.com/hunterward98", button: "X" },
    { label: "linkedin", href: "https://www.linkedin.com/in/your-handle", button: "Y" },
    { label: "email", href: "mailto:hunterdward98@gmail.com", button: "B" },
  ],
  experience: [
    {
      company: "OpenEye (Alarm.com)",
      role: "Software Engineer in Test",
      location: "Liberty Lake, WA",
      start: "Apr 2026",
      end: "Present",
      points: [
        "Migrated 200+ legacy Java tests to Playwright across payment processing and business-intelligence reporting features, cutting CI time by over 60%.",
        "Spearheaded the test initiative for the core SaaS product, raising coverage from 62% to 85%.",
        "Automated manual test plans with Playwright, saving 120+ labor hours per week.",
      ],
    },
    {
      company: "Corporate Tools",
      role: "Software Engineer",
      location: "Spokane, WA",
      start: "May 2022",
      end: "Oct 2025",
      points: [
        "Reduced customer email resolution time by 40% by building an in-house communications and workflow platform serving 3M+ clients.",
        "Increased client form submission rates 30% by leading design of a dynamic form builder that turns complex government forms into guided interfaces; later adopted by 4 product teams.",
        "Led a PostgreSQL-to-MongoDB migration for form management across 150+ websites, improving load times and eliminating schema duplication.",
        "Designed an email tagging and categorization system that surfaced trends in customer issues, informing product and support priorities with concrete data.",
        "Traced and resolved production bugs across a Ruby on Rails and Vue microservices architecture, following failures through service boundaries to root cause.",
        "Mentored junior developers through code reviews, sprint planning, and pair programming.",
      ],
    },
    {
      company: "Process Innovations",
      role: "Application Engineer",
      location: "Remote",
      start: "Jul 2021",
      end: "Apr 2022",
      points: [
        "Migrated five NRG natural gas power plants in Southern California to new domains during an ownership transfer, preserving historical data and reconfiguring monitoring systems.",
        "Set up real-time monitoring and alerting for the largest nitrogen fertilizer plant in the US, enabling preventative maintenance and increasing operational uptime.",
      ],
    },
  ],
  projects: [
    {
      name: "RacePicks",
      blurb:
        "Fantasy motorsport platform supporting 5 racing series and multi-tenant leagues with RBAC and OAuth2/JWT auth. Sole engineer, owning it from code to production.",
      tech: ["Spring Boot", "React", "PostgreSQL", "AWS"],
      href: "https://racepicks.net",
      dates: "Jan 2026 – Present",
      points: [
        "Own production end-to-end on AWS (CloudFront, S3, Elastic Beanstalk, RDS): deploys, 90 zero-downtime schema migrations, monitoring, and incident response.",
        "Led incident response for a production data-integrity failure: restored lost user records from RDS snapshots with custom SQL tooling, then built pick-safety checks and deletion guards.",
        "Reconfigured the Tomcat web server to cut outage recovery time to two minutes.",
        "Brought integration and JUnit test coverage to 92%.",
      ],
    },
  ],
  skills: [
    { group: "languages", items: ["Ruby", "Java", "TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"] },
    { group: "frameworks", items: ["Ruby on Rails", "Spring Boot", "React", "Vue", "Playwright", "Tailwind"] },
    { group: "databases", items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"] },
    {
      group: "tools",
      items: ["Git", "AWS", "Docker", "GitLab CI/CD", "Sidekiq", "Postman", "Jira", "Claude Code", "GitHub Copilot"],
    },
  ],
  education: [{ school: "Gonzaga University", degree: "B.S. Computer Engineering, Minor in Computer Science" }],
  certifications: ["NCEES Engineer in Training (EIT), Computer Engineering · Washington State"],
};
