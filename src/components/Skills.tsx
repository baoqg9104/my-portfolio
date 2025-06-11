import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import FastAPIIcon from "../assets/images/FastAPI.png";
import PhoenixFrameworkIcon from "../assets/images/Phoenix Framework.png";
import PythonIcon from "../assets/images/Python.png";
import SQLServerIcon from "../assets/images/Microsoft SQL Server.png";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <StackIcon name="react" className="w-6" /> },
      { name: "Vue", icon: <StackIcon name="vuejs" className="w-6" /> },
      {
        name: "Tailwind CSS",
        icon: <StackIcon name="tailwindcss" className="w-6" />,
      },
      {
        name: "Bootstrap",
        icon: <StackIcon name="bootstrap5" className="w-6" />,
      },
      { name: "HTML", icon: <StackIcon name="html5" className="w-6" /> },
      { name: "CSS", icon: <StackIcon name="css3" className="w-6" /> },
      {
        name: "JavaScript",
        icon: <StackIcon name="js" className="w-6" />,
      },
      {
        name: "TypeScript",
        icon: <StackIcon name="typescript" className="w-6" />,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: ".NET Core", icon: <StackIcon name="netcore" className="w-6" /> },
      {
        name: "FastAPI",
        icon: <img src={FastAPIIcon} className="w-6" />,
      },
      {
        name: "Phoenix",
        icon: <img src={PhoenixFrameworkIcon} className="w-6" />,
      },
      { name: "C#", icon: <StackIcon name="c#" className="w-6" /> },
      { name: "Python", icon: <img src={PythonIcon} className="w-6" /> },
      { name: "Java", icon: <StackIcon name="java" className="w-6" /> },
      { name: "Elixir", icon: <StackIcon name="elixir" className="w-6" /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: <StackIcon name="postgresql" className="w-6" /> },
      { name: "SQL Server", icon: <img src={SQLServerIcon} className="w-6" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-secondary transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            My Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl shadow-lg overflow-hidden border border-custom transition-colors duration-300"
            >
              <div className="bg-gradient-to-l from-pink-100 to-pink-500 p-4">
                <h3 className="text-xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">
                  {skillCategory.category}
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary rounded-full text-secondary transition-colors duration-300"
                    >
                      <span className="text-lg flex items-center justify-center">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
