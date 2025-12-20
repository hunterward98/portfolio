# Clear existing data
Profile.destroy_all
About.destroy_all
Experience.destroy_all
Project.destroy_all
Skill.destroy_all

puts "Creating profile..."
Profile.create!(
  name: "Hunter Ward",
  title: "Software Engineer",
  email: "hunterdward98@gmail.com",
  location: "Spokane, WA",
  linkedin: "https://www.linkedin.com/in/hunter-ward-eit/",
  github: "github.com/hunterward98"
)

puts "Creating about section..."
About.create!(
  summary: "Full-stack software developer with over 3 years of experience building modern web applications. Passionate about creating elegant solutions to complex problems using Ruby on Rails. Experienced in developing scalable applications within a microservices architecture, collaborating with cross-functional teams, and delivering high-quality code."
)

puts "Creating experiences..."
Experience.create!(
  company: "Corporate Tools",
  position: "Software Engineer",
  location: "Spokane, WA",
  start_date: "May 2022",
  end_date: "October 2025",
  responsibilities: [
    "Developed an in-house communications platform for our customer support representatives which improved communication efficiency by up to 40%.",
    "Collaborated closely with product and UI/UX designers to develop a dynamic form builder and PDF system that improved client form submission rates and grew company product offerings.",
    "Used my combined experience to revamp legal services, lawoncall.com, where I made more features for client forms that reduced call and email volume. Overhauled legal services in our client portal and assisted with an upgrade to Vue 3.",
    "Participated in code reviews and occasionally mentored junior developers or interns.",
    "Developed extensively with Ruby on Rails and Vue within a microservices architecture to meet product and company goals."
  ]
)

Experience.create!(
  company: "Process Innovations",
  position: "Application Engineer",
  location: "Remote",
  start_date: "July 2021",
  end_date: "April 2022",
  responsibilities: [
    "Collaborated with plant and process engineers to deliver real-time equipment monitoring solutions.",
    "Maintained, upgraded, and enhanced customer PI Systems as an administrator solving complex networking problems, developing intuitive visualizations, and fine-tuned alert systems.",
    "Developed plant diagrams showcasing real-time data to provide high level views of euipment health with multiple UIs, where some users were provided more critical or detailed information than others.",
    "Saved companies hundreds of thousands in cost by notifying of premature equipment failure, adding alerts for maintence based on current or previous data, and aggregating databases to summarize history."
  ]
)

Experience.create!(
  company: "Washington River Protection Solutions",
  position: "Software Engineer Intern",
  location: "Richland, WA",
  start_date: "June 2019",
  end_date: "August 2020",
  responsibilities: [
    "Alleviated tech debt by fixing outdated unit tests, updating QA quidelines, and fixing standing bugs for a waste treatment simulation program.",
    "Architected notification system based on real-time data from nuclear waste tank farms, preventing up to 56 million gallons of nuclear waste leaking into the Columbia River and devastating the West Coast.",
    "Developed administrator tools in C# to reduce database costs by summarizing history, and moving data points to a lower-cost platform.",
    "Created visualizations and analyses with the PI System to cater to engineers of various disciplines and skill levels to provide them with information they needed."
  ]
)

puts "Creating projects..."
Project.create!(
  name: "Portfolio Website",
  description: "A modern, responsive portfolio website built with React and Rails. Features a resume-style layout and mostly serves as a way to show that I know how to use Rails and React.",
  technologies: ["React", "Ruby on Rails", "Tailwind CSS", "SQLite"],
  github_url: "https://github.com/hunterward98/portfolio",
  live_url: nil
)

Project.create!(
  name: "Inheritance",
  description: "A game I made in Java to gain more experience with the language and flex my creativity.",
  technologies: ["LibGDX", "Java", "Asset Creation", "FL Studio"],
  github_url: "https://github.com/hunterward98/java_game",
  live_url: nil
)

puts "Creating skills..."
Skill.create!(
  category: "Frontend",
  items: ["Vue", "React", "JavaScript", "Yarn", "TypeScript", "HTML/CSS", "Tailwind CSS", "Vite"]
)

Skill.create!(
  category: "Backend",
  items: ["Ruby on Rails", "Node.js", "Sidekiq", "RESTful APIs"]
)

Skill.create!(
  category: "Database",
  items: ["PostgreSQL", "SQLite", "MongoDB", "Redis"]
)

Skill.create!(
  category: "Tools and DevOps",
  items: ["Git", "GitHub/Gitlab", "Docker", "VS Code", "Linux", "CI/CD"]
)

Skill.create!(
  category: "Certifications",
  items: ["PI System Administrator", "Engineer In Training"]
)

Skill.create!(
  category: "Other",
  items: ["Agile/Scrum", "Test-Driven Development", "Problem Solving"]
)

puts "Seed data created successfully!"
puts "Profile: #{Profile.count}"
puts "About: #{About.count}"
puts "Experiences: #{Experience.count}"
puts "Projects: #{Project.count}"
puts "Skills: #{Skill.count}"
