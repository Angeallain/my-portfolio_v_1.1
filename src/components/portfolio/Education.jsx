import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      name: "Software Engineering",
      school: "USTHB",
      years: "2024 - 2027 (Expected)",
      courses: "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development, Software Architecture, Networks."
    },
    {
      name: "Preparatory classes in Computer Science",
      school: "ESI Algiers",
      years: "2022 - 2024",
      courses: "Relevant coursework: Data Structures, Algorithms,Mathematics, Web Development, Software Architecture."
    },
    {
      name: "Baccalaureate Degree",
      school: "Mohammed Lamine Debaghine High School - Algiers",
      years: "2019 - 2022",
      courses: "Mathematics, Grade: 17,53/20"
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-beige dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12"
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 bg-amber-50 dark:bg-gray-900 rounded-2xl shadow"
            >
              <h3 className="font-semibold text-lg">{e.name}</h3>
              <p className="text-sm text-gray-500">{e.school}</p>
              <p className="text-sm">{e.years}</p>
              <p className="text-sm mt-2">{e.courses}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}