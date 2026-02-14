import { motion } from "framer-motion";

export default function Experience() {
  const exp = [
    {
      name: "Scientific Club ESI — Design Department",
      location: "Algiers",
      time: "2022 - Present",
      points: [
        "Designed visual assets for events",
        "Collaborated on event organization",
        "Contributed to creative projects"
      ]
    },
    {
      name: "HackIn 8 — CSE Internal Hackathon Winner",
      location: "ESI - Algiers",
      time: "February 2026",
      points: [
        "Collaborated with a team to find a solution to help rebuild Gaza",
        "Created with the team (mostly in Front-end dev) a Web platform helping rebuild Gaza by connecting needs, resources and people",
        "Presented our solution and won 1st Place"
      ]
    },
    {
      name: "Excel Expo Hackathon 3rd Place Winner",
      location: "Safex - Algiers",
      time: "October 2025",
      points: [
        "Built a smart recommendation system to predict user purchases",
        "Developed backend with FastAPI and frontend with Tailwind CSS",
        "Integrated a small AI chatbot to provide recommendations and insights"
      ]
    },
    {
      name: "Startup Weekend Participant",
      location: "GoMyCode - Algiers",
      time: "September 2025",
      points: [
        "Developed a project from idea to prototype in an intensive event",
        "Collaborated with team members to solve real-world challenges",
        "Gained experience in rapid prototyping and innovation"
      ]
    },
    {
      name: "Entrepreneurship Project 1st Place Winner",
      location: "Ecole Nationale Supérieure d'Informatique (ESI) - Algiers",
      time: "December 2024",
      points: [
        "Selected among top projects in START pre-incubation program",
        "Refined project ideas and developed entrepreneurial skills",
        "Collaborated with mentors and coaches to improve project quality"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-beige dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {exp.map((e, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 bg-amber-50 dark:bg-gray-900 rounded-2xl shadow"
            >
              <h3 className="text-xl font-semibold">{e.name}</h3>
              <p className="text-sm text-gray-500">{e.location}</p>
              <p className="text-sm text-orange-500">{e.time}</p>

              <ul className="mt-4 list-disc ml-5 text-gray-600 dark:text-gray-300">
                {e.points.map((p, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    {p}
                  </motion.li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}