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
  tagline: "I may not know your framework, but I've proven that I can figure out your shit.",
  bio: "I'm a software engineer in Washington State with five years of shipping production software. I started out in industrial plant data systems, went from never having touched Rails to shipping production code in two weeks, and built RacePicks, a hobby project that somehow grew to 200+ players. Stacks change; the job doesn't: understand the system, find the real problem, and own it all the way to production.",
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
        "Rebuilt 200+ flaky legacy Java tests from scratch in Playwright across payment processing and BI reporting as my onboarding project, then restructured CI stages and added affected-suite runs, cutting pipeline time from about an hour to 20 minutes.",
        "Automated manual test plans for a 10+ person QA team, freeing 120+ labor hours per week; presented the results to leadership.",
        "Moved on to core product work, writing integration tests for core business logic that raised coverage from 62% to 85% and caught BI reporting data bugs before they reached customers.",
      ],
    },
    {
      company: "Corporate Tools",
      role: "Software Engineer",
      location: "Spokane, WA",
      start: "May 2022",
      end: "Oct 2025",
      points: [
        "Went from zero Rails or Vue experience to shipping production code in two weeks; promoted from Junior to Software Engineer in six months.",
        "Core engineer on a small team that built an in-house communications and workflow platform for 3M+ clients, handling high-volume email ingestion and integrating 4 internal APIs; cut customer email resolution time by 40%.",
        "Led design of a dynamic form builder that turns complex government forms, with branching conditional logic and filled-PDF generation, into guided interfaces; raised submission rates 30% and was adopted by 4 product teams.",
        "Led a planned PostgreSQL-to-MongoDB cutover for form management across 150+ websites, improving load times and eliminating schema duplication.",
        "Diagnosed intermittent production failures spanning Rails and Vue microservices by tracing logs across service boundaries to an anomalous record, then working through model relationships to the root cause.",
        "Designed an email tagging and categorization system that surfaced trends in customer issues, giving product and support concrete data to prioritize with.",
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
      dates: "Jan 2026 – Present",
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
        "A deliberately simple Jira alternative for one-person departments: the lone designer, marketer, or IT person fielding requests from an entire office. Inspired by watching someone close to me drown in requests.",
      tech: ["Rails 8", "React 19", "TypeScript", "Inertia.js", "PostgreSQL", "Tailwind", "Kamal"],
      href: "https://github.com/hunterward98/cue",
      dates: "Jul 2026 – Present",
      points: [
        "Multi-tenant SaaS with org-scoped tenancy (acts_as_tenant plus composite foreign keys), per-assignee boards with WIP limits, configurable cue lifecycles, @-mentions, hooks, and audit trails.",
        "Enforces 100% line and branch coverage across Rails and React as a hard CI gate with no exemptions, alongside strict TypeScript and a pinned React Doctor score of 100.",
        "Built primarily with AI agents under a documented workflow: 18 architecture decision records, detailed feature plans, and a self-improvement loop that turns repeated mistakes into agent instructions.",
        "Designed to run on a single low-cost VPS via Kamal, using Rails 8's Solid Queue and Solid Cache instead of Redis to keep hosting costs down.",
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
