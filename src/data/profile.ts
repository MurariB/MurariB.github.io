// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Murari Bhadragiri",
  title: "Senior Software Engineer",
  tagline: ".NET · React · Microservices · AWS · Agentic AI",
  location: "Poole, United Kingdom",
  // Split so simple scrapers don't pick the address out of the page source.
  emailUser: "murari418",
  emailDomain: "gmail.com",
  linkedin: "https://www.linkedin.com/in/murari-bhadragiri-32175732/",
  github: "https://github.com/MurariB",
  // Export the CV from Word as PDF into public/ with this exact name.
  cv: "/Murari-Bhadragiri-CV.pdf",
  photo: "/profile.jpeg",
  about: [
    "I'm a software engineer with 14+ years of experience designing and building web applications and microservices, mostly in the .NET ecosystem, with hands-on front-end work in React, TypeScript and Angular. Today I lead the design of a transport intelligence and account-based ticketing platform at Arrive, working with a Scrum team across the UK and France.",
    "I enjoy turning messy business requirements into clean, scalable architecture, then seeing it through: APIs, front-end components, integration layers, code reviews and mentoring. I care about maintainable code, clear communication, and learning fast.",
    "I design and run agentic development workflows: pipelines of specialised AI agents that refine requirements, write tests, implement, review and release software under strict quality gates. At Arrive I apply them to product development for our open-payments and account-based ticketing systems, and my own product, Tally Plate, is built entirely this way. I'm also a STEM Ambassador, helping young people see where a career in technology can take them.",
  ],
};

export const stats = [
  { value: "14+", label: "Years building software" },
  { value: "8", label: "Developers & testers led on one team" },
  { value: "2", label: "Countries in my current Scrum team" },
  { value: "AWS", label: "Certified Solutions Architect" },
];

export type Role = {
  title: string;
  company: string;
  client?: string;
  location: string;
  period: string;
  points: string[];
  tech?: string[];
};

export const experience: Role[] = [
  {
    title: "Senior Software Engineer / Technical Lead",
    company: "Arrive (formerly Flowbird)",
    location: "Poole, UK",
    period: "Jun 2022 – Present",
    points: [
      "Lead the design and development of a Transport Intelligence Platform, solving complex architectural and business challenges.",
      "Coordinate a cross-functional Scrum team across the UK and France in a fast-paced Agile environment.",
      "Translate high-level business requirements into scalable technical solutions with strong architectural foundations.",
      "Deliver end-to-end solutions: backend APIs, front-end components and integration layers.",
      "Review code for quality, performance and best practice, and mentor developers across the team.",
      "Apply agentic AI development workflows (multi-agent Claude Code pipelines) to product development for open-payments and account-based ticketing (ABT) systems.",
    ],
    tech: [".NET Core", "ASP.NET Core Web API", "React", "Material UI", "EF Core", "Redis", "RabbitMQ", "Keycloak", "Hangfire", "Docker", "Jenkins", "AWS", "Claude Code"],
  },
  {
    title: "Technical Lead",
    company: "Tata Consultancy Services",
    client: "Vitality",
    location: "Bournemouth, UK",
    period: "Feb 2019 – May 2022",
    points: [
      "Technical architect for the Papillon member care and claims administration platform.",
      "Gathered and finalised requirements with the business, then produced HLDs and LLDs for the offshore team.",
      "Designed .NET REST APIs and built critical components of the claims administration system.",
      "Led a team of 6 developers and 2 testers: estimation, delivery planning, design and code reviews, and weekly client alignment.",
    ],
    tech: [".NET Core", "Microservices", "Confluent Kafka", "Redis", "PostgreSQL", "SonarQube", "Jenkins", "Ansible"],
  },
  {
    title: "Senior Developer",
    company: "Tata Consultancy Services",
    client: "PruHealth",
    location: "Chennai, India",
    period: "Apr 2016 – Jan 2019",
    points: [
      "Built .NET MVC views, view models and controllers alongside an Angular 5 front end.",
      "Implemented security, session expiry and exception handling; inspected and tuned site performance.",
      "Worked with Entity Framework 6 (code first) and WCF services; owned code reviews and unit testing.",
    ],
    tech: ["C#", "ASP.NET MVC", "Angular 5", "React", "EF6", "WCF", "Autofac"],
  },
  {
    title: "Onsite Developer",
    company: "Tata Consultancy Services",
    client: "Standard Life",
    location: "Bournemouth, UK",
    period: "Apr 2015 – Mar 2016",
    points: [
      "Onsite coordination with the client, including production setup and monitoring with Splunk and Dynatrace.",
    ],
  },
  {
    title: "Developer",
    company: "Tata Consultancy Services",
    client: "Standard Life",
    location: "Chennai, India",
    period: "Jun 2012 – Apr 2015",
    points: [
      "Developed views, models and parsers in C# with ASP.NET MVC 4 and AngularJS.",
    ],
    tech: ["C#", "ASP.NET MVC 4", "AngularJS", "Redis", "IndexedDB"],
  },
  {
    title: "Trainee",
    company: "Tata Consultancy Services",
    location: "Chennai, India",
    period: "Mar 2012 – May 2012",
    points: ["ASP.NET foundation training."],
  },
];

export type Project = {
  name: string;
  org: string;
  role: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

// Personal project, shown as the large featured card.
export const tallyPlate = {
  name: "Tally Plate",
  badge: "Personal product · Built with a multi-agent AI pipeline",
  summary:
    "Recipe costing, allergen management and food-label software for independent UK kitchens. I built it solo, end to end, using an agentic development workflow I designed: a pipeline of specialised Claude Code agents that takes each backlog task from refinement to a reviewed, tested, merged pull request.",
  // Set this to the live site URL to show a "Visit site" button.
  url: "",
  features: [
    "Recipe costing with gross-profit and pricing calculations",
    "Allergen roll-up across recipes, treated as safety-critical (fail safe)",
    "Food labels and a public allergen menu with QR code",
    "AI supplier-bill scanning and recipe import (Claude API)",
    "Multi-tenant kitchens with owner and team roles, plus an audit log",
  ],
  pipeline: [
    { step: "Refine", agents: "Requirements analyst turns a backlog item into acceptance criteria" },
    { step: "Build", agents: "Tests written per acceptance criterion first, then the implementation" },
    { step: "Review", agents: "Architecture, security, performance, coding-standards, UI and acceptance reviewers run in parallel" },
    { step: "Verify", agents: "One verify script runs every gate: format, build, unit, integration, e2e, audit" },
    { step: "Release", agents: "Release-manager agent merges only on green CI; an orchestrator resumes the plan from saved state" },
  ],
  guardrails:
    "Agents never deploy to production, touch secrets or weaken a test or gate. Production releases need my approval.",
  tech: [".NET 10", "Clean Architecture", "CQRS", "PostgreSQL", "React", "TypeScript", "Keycloak", "RabbitMQ", "Redis", "OpenTelemetry", "Docker", "Caddy", "Playwright", "k6", "Claude Code"],
};

export const projects: Project[] = [
  {
    name: "Account-Based Ticketing & Transport Intelligence Platform",
    org: "Arrive (formerly Flowbird)",
    role: "Senior Software Engineer / Technical Lead",
    summary:
      "A platform for account-based ticketing and open-loop payments in public transport, with a transport intelligence layer for operators.",
    highlights: [
      "Led architecture and design across backend services, front end and integrations.",
      "Event-driven microservices with RabbitMQ (EasyNetQ), Redis caching and Hangfire background jobs.",
      "Identity and access through Keycloak; React + Material UI operator front end.",
      "Containerised with Docker and delivered through Jenkins to AWS.",
      "Agentic AI development workflows used to build open-payments and ABT features.",
    ],
    tech: [".NET Core", "React", "RabbitMQ", "Redis", "Keycloak", "AWS", "Agentic AI"],
  },
  {
    name: "Papillon: Member Care & Claims Administration",
    org: "Vitality (via TCS)",
    role: "Technical Lead / Architect",
    summary:
      "Member care and claims administration system for a UK health and life insurer.",
    highlights: [
      "Owned high- and low-level designs and reviewed the team's designs and code.",
      "Designed the .NET REST APIs and built the critical claims components.",
      "Microservices on .NET Core with Confluent Kafka, Redis and PostgreSQL.",
      "Led 6 developers and 2 testers across onsite and offshore teams.",
    ],
    tech: [".NET Core", "Kafka", "Redis", "PostgreSQL", "Microservices"],
  },
  {
    name: "Member Web Platform",
    org: "PruHealth (via TCS)",
    role: "Senior .NET & Angular Developer",
    summary:
      "Customer-facing health insurance web application built on ASP.NET MVC with an Angular front end.",
    highlights: [
      "Built MVC features end to end, from data access to UI.",
      "Implemented security, session expiry and exception handling.",
      "Profiled and tuned site performance.",
    ],
    tech: ["ASP.NET MVC", "Angular 5", "EF6", "WCF"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["C#", ".NET / .NET Core", "ASP.NET Core Web API", "Entity Framework Core", "WCF", "Hangfire", "RestSharp"] },
  { group: "Architecture", items: ["Microservices", "Event-driven design", "CQRS", "Repository & Unit of Work", "REST API design", "HLD / LLD"] },
  { group: "Frontend", items: ["React", "TypeScript", "Angular", "Material UI", "HTML / CSS / SCSS", "Jest"] },
  { group: "Messaging & Data", items: ["RabbitMQ / EasyNetQ", "Confluent Kafka", "Redis", "PostgreSQL", "SQL"] },
  { group: "Cloud & DevOps", items: ["AWS", "Docker", "Jenkins", "Ansible", "Git", "SonarQube"] },
  { group: "Security & Delivery", items: ["Keycloak", "Agile / Scrum", "Jira", "Confluence", "LucidChart"] },
  { group: "AI & Agentic Development", items: ["Claude Code", "Multi-agent pipelines", "Subagents & custom commands", "MCP", "AI code review", "Claude API"] },
];

export const stem = {
  role: "STEM Ambassador",
  org: "STEM Learning UK",
  since: "Jan 2026",
  summary:
    "As an approved STEM Ambassador, I volunteer in schools, at events and online to show young people what a career in software engineering and technology looks like.",
  impact: [
    { value: "15", label: "Activities completed" },
    { value: "38", label: "Volunteering hours" },
    { value: "1,616", label: "Young people reached" },
    { value: "7", label: "Organisations engaged" },
  ],
  impactNote: "Figures from my STEM Ambassador dashboard, Nov 2025 to Nov 2026.",
  highlights: [
    { title: "South West STEM Conference: Roots and Robots", detail: "Delivered presentations and activities · Bournemouth · Nov 2026" },
    { title: "St Edward's School Careers & Apprenticeship Fair", detail: "Talked with students about tech careers · Oct 2026" },
    { title: "Year 7 Engineering Day, Bournemouth School for Girls", detail: "Mentored Year 7 students for a full engineering day · Jun 2026" },
    { title: "I'm a Computer Scientist / Engineer / Mathematician, Get me out of here!", detail: "Live online sessions answering students' questions · Jun–Jul 2026" },
    { title: "Mentoring support", detail: "Mentoring for young adults (19+) · Jun 2026" },
  ],
};

export const certifications = [
  { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", date: "Nov 2023", url: "https://www.linkedin.com/in/murari-bhadragiri-32175732/details/certifications/" },
  { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", date: "Jan 2021", url: "https://www.linkedin.com/in/murari-bhadragiri-32175732/details/certifications/" },
  { name: "Microsoft Certified Solutions Developer (MCSD)", issuer: "Microsoft", date: "Feb 2014" },
];

export const education = {
  degree: "B.Tech, Electronics and Communications",
  school: "MVGR College of Engineering, Andhra Pradesh, India",
  year: "2011",
  note: "Silver medal for academic excellence, 2008–09",
};

export const awards = [
  "Best Team: Tata Consultancy Services",
  "Best Developer: Tata Consultancy Services",
  "Star of the Quarter: Tata Consultancy Services",
];
