export default function About() {
  const skills = [
    { name: "Html/CSS", value: 90 },
    { name: "JavaScript", value: 80 },
    { name: "SQL", value: 75 },
    { name: "UI/UX", value: 70 },
    { name: "Java", value: 65 },
    { name: "Php", value: 65 },
    { name: "Python", value: 60 },
    { name: "React", value: 50 },
    { name: "Node.js", value: 50 }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            I'm a dedicated software engineering student with a passion for creating elegant solutions 
            to complex problems. My journey in tech started with curiosity and has evolved into a 
            commitment to continuous learning and innovation.
          </p>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            I specialize in full-stack development, with experience in modern web technologies 
            and software architecture. I'm always eager to take on new challenges 
            and collaborate on exciting projects.
          </p>
        </div>

        <div className="space-y-5">
          {skills.map(skill => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>

              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-orange-500 rounded-full"
                  style={{ width:`${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
