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
  /** Short "outside of work" paragraph shown under the bio. */
  outside: string;
  /** Longer version for the terminal's `cat hobbies.txt`. */
  hobbies: [topic: string, detail: string][];
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
  tagline: "I'm a builder that can solve problems before you even see them.",
  bio: "I'm an experienced software engineer that got started out in industrial plant data systems. I had never touched a web framework, just embedded systems, and fell in love. I'm honest when I don't know something, but I have always found a way.",
  outside:
    "To keep my mind fresh, I use my hands. I particularly enjoy wrenching on older cars, where I've extended my problem solving to diagnose drive train or suspension issues and address weak points before they become a problem.",
  hobbies: [
    ["cars", "late-'90s, kept alive with my own wrenches rather than traded in"],
    ["motorsport", "obviously (see: RacePicks)"],
    ["games", "the original Halo games, Old School RuneScape, anything with an older art style"],
    ["hands", "Lego and woodworking when it's not wrenches"],
  ],
  links: [
    { label: "resume", href: "resume.pdf", button: "A" },
    { label: "github", href: "https://github.com/hunterward98", button: "X" },
    { label: "linkedin", href: "https://www.linkedin.com/in/hunter-ward-eit/", button: "Y" },
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
        "Raised integration test coverage of core features from as low as 5% up to 81% in a matter of weeks, writing over 200 tests for business-critical REST endpoints, finding over 20 defects.",
        "Moved 9-suite Playwright pipeline from Bamboo to GitHub Actions to replace expiring PATs with GitHub App Tokens, reducing test flakiness, and test run time by over 20 minutes, allowing devs to capture potential errors at PR time.",
        "Automated manual test plans for a 30+ person QA team, freeing 120+ labor hours per release.",
        "Built and shipped AI agent workflows to standardize test writing across a 120+ person engineering team, allowing for new features to have tests written above industry standards.",
      ],
    },
    {
      company: "Corporate Tools",
      role: "Software Engineer",
      location: "Spokane, WA",
      start: "May 2022",
      end: "Oct 2025",
      points: [
        "Core engineer on a small team that built an in-house communications and workflow platform for 3M+ clients, handling high-volume email ingestion and integrating internal APIs so representatives had a central location to communicate with and manage a client.",
        "Led design of a dynamic form builder that converted complex government forms into guided interfaces to improve user submission rates; later adopted by 4 product teams.",
        "Led a planned PostgreSQL-to-MongoDB cutover for form management across 150+ websites, improving load times and eliminating overly complex database schema and model management.",
        "Diagnosed intermittent production failures spanning Rails and Vue microservices by tracing logs across service boundaries to an anomalous record, then working through model relationships to the root cause.",
        "Designed an email tagging and categorization system that surfaced trends in customer communications, giving product and support concrete data to prioritize features and bugs.",
        "Mentored junior developers during onboarding and in early career, serving as a go-to resource for two core business products, or as just a friendly pair programmer."
      ],
    },
    {
      company: "Process Innovations",
      role: "Application Engineer",
      location: "Remote",
      start: "Jul 2021",
      end: "Apr 2022",
      points: [
        "Migrated plant data historian and monitoring systems for five NRG natural gas power plants in Southern California during an ownership transfer, preserving historical data.",
        "Architected C# integration with OSIsoft PI API to allow customers to maintain and clean up their PI system, saving tens of thousands in license and infrastructure costs across multiple companies.",
        "Set up real-time monitoring and alerting for the largest nitrogen fertilizer plant in the US, enabling preventative maintenance and increasing operational uptime.",
      ],
    },
  ],
  projects: [
    {
      name: "RacePicks",
      blurb:
        "A fantasy motorsport platform that started as a hobby project and grew to 200+ users, 25+ leagues, and 28,000+ picks through word of mouth and racing communities. Sole engineer: design, code, infrastructure, and incident response.",
      tech: ["Spring Boot", "React", "PostgreSQL", "AWS"],
      href: "https://racepicks.net",
      dates: "Dec 2025 – Present",
      points: [
        "Built the scoring engine and a results pipeline that normalizes public and paid race-data APIs from 5 racing series into one model, with multi-tenant leagues, RBAC, and OAuth2/JWT auth.",
        "When a bad migration wiped out records for many users, restored them from RDS snapshots with custom SQL tooling in under two days, then added pick-safety checks and deletion guards to prevent a repeat.",
        "Own production end-to-end on AWS (CloudFront, S3, Elastic Beanstalk, RDS), including 90 zero-downtime schema migrations.",
        "Reconfigured Tomcat to cut outage recovery from 10–30 minutes to 2, backed by 92% integration and unit test coverage.",
      ],
    },
    {
      name: "Cue",
      blurb:
        "An open-source, deliberately simple Jira alternative for one-person departments. Remarkably convenient for someone with 30+ regular clients, like the sole marketing role at a real estate office.",
      tech: ["Rails 8", "React 19", "TypeScript", "Inertia.js", "PostgreSQL", "Tailwind", "Kamal"],
      href: "https://github.com/hunterward98/cue",
      dates: "Jul 2026 – Present",
      points: [
        "Multi-tenant SaaS with org-scoped tenancy (acts_as_tenant plus composite foreign keys), per-assignee boards with WIP limits, configurable cue lifecycles, @-mentions, hooks, and audit trails.",
        "Enforces 100% line and branch coverage across Rails and React as a hard CI gate with no exemptions; emphasizing the test driven development philosophy.",
        "Designed to run on a single low-cost VPS via Kamal, using Rails 8's Solid Queue and Solid Cache instead of Redis to keep hosting costs down.",
      ],
    },
  ],
  skills: [
    { group: "languages", items: ["Ruby", "Java", "TypeScript", "C++", "JavaScript", "Python", "SQL", "HTML", "CSS"] },
    { group: "frameworks", items: ["Ruby on Rails", "Spring Boot", "React", "Vue", "Fast API", "Playwright", "Tailwind"] },
    { group: "databases", items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"] },
    {
      group: "tools",
      items: ["Git", "AWS", "Docker", "GitLab CI/CD", "Sidekiq", "Postman", "Jira", "Claude Code", "GitHub Copilot"],
    },
  ],
  education: [{ school: "Gonzaga University", degree: "B.S. Computer Engineering, Minor in Computer Science" }],
  certifications: ["NCEES Engineer in Training (EIT), Computer Engineering · Washington State"],
};
