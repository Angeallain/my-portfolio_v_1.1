import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { dark, setDark } = useTheme();

  const links = [
    { name: "About",      id: "about"      },
    { name: "Education",  id: "education"  },
    { name: "Projects",   id: "projects"   },
    { name: "Experience", id: "experience" },
    { name: "Contact",    id: "contact"    },
  ];

  useEffect(() => {
    const observers = [];

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const linkClass = (id) =>
    `transition-colors duration-200 hover:text-amber-600 ${
      active === id ? "text-orange-500 font-semibold" : ""
    }`;

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1
          onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setActive(""); }}
          className="font-bold text-lg cursor-pointer transition-colors duration-200 hover:text-amber-600"
        >
          Malak's Portfolio
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={linkClass(l.id)}
            >
              {l.name}
            </button>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="transition-colors duration-200 hover:text-amber-600"
          >
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>

        {/* Mobile — hamburger + theme toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="transition-colors duration-200 hover:text-amber-600"
          >
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="transition-colors duration-200 hover:text-amber-600"
          >
            {open ? <X/> : <Menu/>}
          </button>
        </div>

      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden p-6 flex flex-col gap-4 bg-white dark:bg-gray-900">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={linkClass(l.id)}
            >
              {l.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}