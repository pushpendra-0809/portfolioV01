export const personalInfo = {
  name: "Pushpendra Kumar Verma",
  title: "Computer Science Undergraduate & Full-Stack Developer",
  tagline: "Building scalable web applications, adaptive AI systems, and robust software solutions.",
  location: "Ghaziabad, Uttar Pradesh, India",
  phone: "+91-6388257450",
  email: "vermapushpendra0809@gmail.com",
  github: "https://github.com/pushpendra0809",
  linkedin: "https://linkedin.com/in/pushpendra-verma-apps",
  cgpa: "9.21",
  about: "I am a Computer Science & Engineering undergraduate at ABES Engineering College, Ghaziabad with a strong academic foundation (9.21 CGPA). I have hands-on experience in full-stack development, Python backend frameworks, and AI API integrations. As an active hackathon competitor, I have secured a Top 10 finish in QuantCraft (among 1100+ teams) and qualified as a National Finalist in HackIndia 2024. Additionally, I serve as the General Secretary of AGORA, the premier collegiate debating society.",
  stats: [
    { label: "B.Tech CGPA", value: "9.21", sub: "ABESEC (1st Year)" },
    { label: "Hackathon Standing", value: "Top 10", sub: "QuantCraft (1100+ Teams)" },
    { label: "National Finalist", value: "HackIndia '24", sub: "Yojana AI Project" },
    { label: "Leadership", value: "GenSec", sub: "AGORA Debating Society" }
  ]
};

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "ABES Engineering College, Ghaziabad",
    timeline: "2024 – 2028",
    score: "9.21 CGPA",
    scoreLabel: "1st Year CGPA",
    details: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Discrete Mathematics, Database Systems.",
      "Consistently maintained academic excellence with top-tier ranking in the department."
    ]
  },
  {
    degree: "Class XII (Senior Secondary) — ISC",
    institution: "St. Lawrence School, Unnao",
    timeline: "2024",
    score: "78.55%",
    scoreLabel: "ISC Board",
    details: [
      "Subjects: Physics, Chemistry, Mathematics, and Computer Science."
    ]
  },
  {
    degree: "Class X (Secondary School) — ICSE",
    institution: "St. Lawrence School, Unnao",
    timeline: "2022",
    score: "90.80%",
    scoreLabel: "ICSE Board (Distinction)",
    details: [
      "Awarded High Distinction with strong performance in Mathematics and Computer Applications."
    ]
  }
];

export const skillCategories = [
  {
    category: "Languages & Core",
    icon: "Code2",
    skills: ["C++", "Python", "Java", "C", "JavaScript (ES6+)", "Data Structures & Algorithms", "OOP"]
  },
  {
    category: "Web & Frameworks",
    icon: "Layers",
    skills: ["React.js", "Vite", "FastAPI", "Node.js", "Express.js", "Tailwind CSS", "RESTful APIs"]
  },
  {
    category: "Databases & AI",
    icon: "Brain",
    skills: ["MongoDB", "Google Gemini API", "RAG Architecture", "Prompt Engineering", "Vector Search"]
  },
  {
    category: "Tools & Game Engines",
    icon: "Cpu",
    skills: ["Git", "GitHub", "VS Code", "Google Colab", "Godot Engine", "Unity", "Postman"]
  }
];

export const projects = [
  {
    id: "trinity",
    title: "TRINITY — Adaptive AI Technical Interviewer",
    category: "AI & Full Stack",
    timeline: "August 2024",
    badge: "Flagship",
    description: "An adaptive technical interview evaluation platform built using React, Python FastAPI, and Google Gemini API to automate candidate technical assessments with dynamic difficulty scaling.",
    highlights: [
      "Engineered an adaptive difficulty scaling algorithm that dynamically adjusts interview complexity based on candidate response depth.",
      "Implemented a RAG (Retrieval-Augmented Generation) knowledge engine for real-time semantic evaluation and scorecard generation.",
      "Built a secure proctoring mechanism including full-screen lockdown and tab-switch detection telemetry."
    ],
    techStack: ["React", "Vite", "Python", "FastAPI", "Google Gemini API", "RAG", "Tailwind CSS"],
    github: "https://github.com/pushpendra0809"
  },
  {
    id: "yojana-ai",
    title: "Yojana AI — Government Scheme Navigator",
    category: "Web3 & AI",
    timeline: "April 2024",
    badge: "HackIndia Finalist",
    description: "An AI-powered citizen portal integrated with Web3 technology to address challenges in discovering, understanding, and accessing central and state government benefit schemes.",
    highlights: [
      "Built an intuitive conversational AI interface to match citizen profiles against eligibility criteria.",
      "Integrated decentralized verification for seamless scheme eligibility processing.",
      "Selected as National Finalist at HackIndia 2024 out of nationwide competitive submissions."
    ],
    techStack: ["React.js", "Node.js", "AI LLM APIs", "Web3 Integration", "MongoDB"],
    github: "https://github.com/pushpendra0809"
  },
  {
    id: "nirvana",
    title: "NIRVANA — 24-Hour Hackathon Platform",
    category: "Full Stack & AI",
    timeline: "May 2024",
    badge: "Top 10 / 1100+ Teams",
    description: "A rapid-deployment web platform developed during the 24-hour QuantCraft 2024 Hackathon to solve real-world problem statements under high-intensity constraints.",
    highlights: [
      "Engineered end-to-end frontend and backend architecture in 24 hours.",
      "Ranked among the Top 10 teams nationwide out of 1100+ participating teams at Galgotias University."
    ],
    techStack: ["React.js", "Node.js", "REST APIs", "Modern UI", "Cloud Services"],
    github: "https://github.com/pushpendra0809"
  },
  {
    id: "dharohar",
    title: "DHAROHAR — 2D Historical Educational Game",
    category: "Game Development",
    timeline: "September 2024",
    badge: "SIH Internal",
    description: "A 2D interactive storytelling and educational game developed using Godot Engine, focusing on ancient Indian heritage, culture, and the legacy of Nalanda University.",
    highlights: [
      "Implemented interactive NPC dialogue systems, branching narrative choices, and educational quests.",
      "Created puzzle and quiz mechanics for engaging history learning.",
      "Showcased at the SIH (Smart India Hackathon) Internal College Hackathon."
    ],
    techStack: ["Godot Engine", "GDScript", "2D Physics", "Pixel Art", "Dialogue System"],
    github: "https://github.com/pushpendra0809"
  }
];

export const achievements = [
  {
    title: "HackIndia Hackathon (National)",
    organization: "ABES Engineering College",
    role: "National Finalist",
    year: "2024",
    description: "Selected as National Finalist for Yojana AI, presenting before a panel of industry veterans."
  },
  {
    title: "QuantCraft Hackathon (National)",
    organization: "Galgotias University",
    role: "Top 10 Finish",
    year: "2024",
    description: "Secured Top 10 ranking among 1100+ participating teams in a 24-hour national hackathon."
  }
];

export const certifications = [
  {
    name: "Adobe University Hackathon",
    issuer: "Adobe",
    date: "August 2024"
  },
  {
    name: "Decode SIH",
    issuer: "Smart India Hackathon",
    date: "August 2024"
  },
  {
    name: "VizDatahon",
    issuer: "Data & Analytics Summit",
    date: "August 2024"
  }
];

export const extracurricular = [
  {
    title: "AGORA: The Debating Society of ABESEC",
    role: "General Secretary (GenSec)",
    period: "2024 – Present",
    description: "Heading executive operations, organizing collegiate debate tournaments, conducting public speaking workshops, and representing the college in national parliamentary debate circuits."
  },
  {
    title: "Athenaeum 1.0 (Flagship Conventional Debate)",
    role: "Organizing Committee Member",
    period: "2024",
    description: "Managed event operations, participant registrations, adjudication panels, and logistics for the major inter-college debate tournament."
  }
];
