import { motion } from "framer-motion";
import profile from "./profile.png";
import leaves from "./leaves.png";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text content — centered on mobile, left-aligned on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold">
            Lazib Malak
          </h1>

          <h2 className="text-xl text-orange-500 mt-3">
            Software Engineering Student
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-sm mx-auto md:mx-0 text-pretty">
            Passionate about building innovative solutions and learning new technologies.
            Currently pursuing my degree in Software Engineering with a focus on full-stack development & AI learning.
          </p>

          <div className="flex gap-4 mt-8 justify-center md:justify-start flex-wrap">
            <a href="https://github.com/Angeallain" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg">
              <Github size={20} />
              GitHub
            </a>

            <a href="https://linkedin.com/in/lazib-malak" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border rounded-lg">
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a href="https://drive.google.com/drive/folders/1iOtR23HhJWiP7w5FTE_Gh6YLELnGBUJX"
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg">
              <FileText size={20} />
              CV
            </a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center"
        >
          <img
            src={profile}
            alt="Lazib Malak"
            className="rounded-3xl shadow-xl relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-full"
          />

          {/* Leaves on mobile: tucked under the profile image */}
          <img
            src={leaves}
            alt=""
            className="
              pointer-events-none select-none
              absolute
              -bottom-10
              left-1/2
              -translate-x-1/2
              w-[280px]
              z-0
              opacity-90
              md:hidden
            "
          />
        </motion.div>

      </div>
       
      {/* Desktop leaves — outside the grid, absolute to the section */}
      <img
      src={leaves}
      alt=""
      className="
        hidden md:block
        pointer-events-none select-none
        absolute
        bottom-0

        left-[50%]
        lg:left-[45%]
        xl:left-[40%]

        -translate-x-[10%]

        w-[450px]
        lg:w-[550px]
        xl:w-[620px]

        z-0
        opacity-90
      "
    />
    {/* Mobile leaves — shown below sm, hidden from md up */}
    <img
      src={leaves}
      alt=""
      className="
        block md:hidden
        pointer-events-none select-none
        absolute
        -bottom-14
        left-1/2
        -translate-x-1/2
        w-[420px]
        sm:w-[500px]
        z-0
        opacity-90
      "
    />
    </section>
  );
}