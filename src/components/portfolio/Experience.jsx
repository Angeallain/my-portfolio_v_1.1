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
      name: "NODEX — 3-Day Remote Hackathon",
      location: "Remote",
      time: "2026",
      points: [
          "Collaborated with a team to build an offline-first decentralized mesh communication platform",
          "Developed peer-to-peer communication using Flutter, Bluetooth/Wi-Fi Direct, and Google Nearby Connections",
          "Implemented multi-hop message routing, device discovery, and AES-256-GCM encrypted communication",
          "Achieved 3rd place in the hackathon"
      ]
    },
    {
      name: "Algérie Télécom — Support AT",
      location: "Algiers",
      time: "March 2026 - June 2026",
      points: [
          "Completed a 3-month software development internship with Mansour Imene, contributing to both front-end and back-end development of a customer support and ticket management platform",
          "Developed and integrated React-based interfaces with a Node.js REST API for authentication, ticket management, notifications, profiles, and role-based access",
          "Worked on authentication features including OTP verification, JWT-based authentication, password reset, and protected routes",
          "Contributed to backend development with Node.js and MySQL, including ticket assignment, SLA management, attachments, statistics, notifications, and audit logs",
          "Used Docker to containerize and run the application and its supporting services",
          "Collaborated on API integration, debugging, testing, and improving consistency between front-end and back-end components"
      ]
    },
    {
      name: "Multidisciplinary Project — MCP & IIoT",
      location: "USTHB - Algiers",
      time: "March 2026 - June 2026",
      points: [
          "Worked as part of a 5-member team on a project combining Model Context Protocol (MCP), Industrial IoT, Large Language Models, and Edge-Fog-Cloud architectures",
          "Designed and implemented an industrial monitoring and predictive maintenance use case for an Oil & Gas pipeline environment",
          "Designed a relational database using TimescaleDB to store and analyze industrial time-series data from machines and sensors",
          "Implemented an MCP server to provide structured and controlled access to industrial data and operations",
          "Integrated an AI agent capable of querying and analyzing industrial data through natural language",
          "Developed automated analytical reports covering system status, risk and alert analysis, pipeline performance, critical machines, and maintenance recommendations",
          "Worked with technologies including MCP, TimescaleDB, LLMs, SQL, Python, and distributed system concepts"
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