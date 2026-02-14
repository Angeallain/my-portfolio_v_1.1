import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Maawah Platform",
      year: "2026 — HackIn 8 (1st Place)",
      desc: "Web platform helping rebuild Gaza by connecting needs, resources and people.",
      skills: ["React", "Tailwind", "Collaboration"],
      link: "https://github.com/Angeallain/Maawah"
    },
    {
      name: "Smart Recommendation System",
      year: "2025 - ECSEL Expo Hackathon (3rd Place) ",
      desc: "Built a recommendation system to predict users’ next purchases, with an interactive web interface and small AI chatbot.",
      skills: ["Python", "FastAPI", "Tailwind", "Figma", "AI", "Backend", "Frontend", "Data"],
      link: "https://github.com/Angeallain/ECSEL-Expo-Hackathon-Smart-Recommendation-System-2025-"
    },
    {
      name: "AI Chatbot Project",
      year: "2025 – Fourth Year of University",
      desc: "A conversational AI chatbot built following a FreeCodeCamp tutorial, integrating modern AI tools and vector search.",
      skills: ["Node.js", "React.js", "MongoDB", "Gemini", "AI", "Frontend", "Backend", "Database"],
      link: "https://github.com/Angeallain/AI-Chatbot-Project"
    },
    {
      name: "Malak's_Bookstore Web Application",
      year: "2025 – Third Year of University",
      desc: "An e-commerce web app for browsing and purchasing books, with an admin interface for managing products and orders.",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Fullstack", "E-commerce"],
      link: "https://github.com/Angeallain/my_bookstore"
    },
    {
      name: "Orthophonist Practice Management",
      year: "2024 – Second Year of University",
      desc: "A Java desktop app for managing patient records, appointments, and sessions in an orthophonist practice.",
      skills: ["Java", "GUI", "Data", "Organization"],
      link: "https://github.com/Angeallain/Orthophonist_Practice_Management"
    },
    {
      name: "Sports Club Management Application",
      year: "2024 – Second Year of University",
      desc: "A Java desktop application to manage members, events, and reporting for a sports club.",
      skills: ["Java", "OOP", "Desktop", "Teamwork"],
      link: "https://github.com/Angeallain/2CP-Projet-Pluridisciplinaire"
    },
    {
      name: "Quiz & Logic Game",
      year: "2023 – First Year of University",
      desc: "A web-based quiz and logic game developed as a team of four, focusing on interactive gameplay and problem-solving.",
      skills: ["HTML", "CSS", "JavaScript", "Web", "Logic", "Collaboration"],
      link: "https://angeallain.github.io/our-site"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-beige dark:bg-gray-800 rounded-2xl shadow"
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-orange-500">{p.year}</p>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.skills.map(s => (
                  <span key={s} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                    {s}
                  </span>
                ))}
              </div>

              <a href={p.link} className="inline-block mt-6 text-orange-500 font-semibold">
                View Project →
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}