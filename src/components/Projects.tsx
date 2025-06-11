import { useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import Modal from "react-modal";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  links: {
    live: string;
    code: string;
  };
};

Modal.setAppElement("#root");

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: string[] = ["All", "Web", "Desktop", "Mobile"];

  const projects: Project[] = [
    {
      id: 1,
      title: "SWP Mentor Booking",
      category: "Web",
      image: "src\\assets\\images\\swp.png",
      description:
        "A web application developed for SWP391 course that allows students to book mentor sessions based on required skills using wallet points. The system includes features for account management project group creation mentor scheduling feedback and reporting optimizing mentor support and improving student learning outcomes.",
      tags: ["React", "TypeScript", "TailwindCSS", "C#", "ASP.NET Core Web API", "SQL Server"],
      links: {
        live: "",
        code: "https://github.com/baoqg9104/SWP-Mentor-Booking_Frontend",
      },
    },
    {
      id: 2,
      title: "Job Finder App",
      category: "Desktop",
      image: "src\\assets\\images\\job finder.png",
      description:
        "This is a WPF (.NET 8) desktop application for job finding and recruitment management. It allows users to sign up, apply for jobs, upload CVs, and manage job postings. Companies can post jobs, view applicants, and manage company information. The app uses a SQL Server database and supports PDF and Word CV viewing.",
      tags: ["C#", "WPF", "SQL Server"],
      links: {
        live: "",
        code: "https://github.com/baoqg9104/Job-Finder",
      },
    },
    {
      id: 3,
      title: "Calculator App",
      category: "Web",
      image: "src\\assets\\images\\calculator.png",
      description: "",
      tags: ["HTML", "CSS", "JavaScript"],
      links: {
        live: "https://baoqg9104.github.io/CalculatorZ/",
        code: "https://github.com/baoqg9104/CalculatorZ",
      },
    },
    {
      id: 4,
      title: "Music Player App",
      category: "Web",
      image: "src\\assets\\images\\music.png",
      description: "",
      tags: ["React", "TypeScript", "Bootstrap"],
      links: {
        live: "https://baoqg9104.github.io/MusicZ/",
        code: "https://github.com/baoqg9104/MusicZ",
      },
    },
    {
      id: 5,
      title: "Chat App",
      category: "Web",
      image: "src\\assets\\images\\chatapp.png",
      description: "ChitChat is a modern real-time chat application built with Vue 3, TypeScript, and Vite. It provides a seamless and responsive user experience for messaging, featuring a clean and intuitive interface. The application is designed to support real-time communication using WebSocket technology and includes essential features like user authentication, chat channels, and message history.",
      tags: ["Vue", "TypeScript", "TailwindCSS", "Elixir", "Phoenix", "PostgreSQL", "WebSocket"],
      links: {
        live: "",
        code: "https://github.com/baoqg9104/chat-app-frontend",
      },
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "var(--color-bg-secondary)",
      border: "1px solid var(--color-border)",
      borderRadius: "0.5rem",
      padding: "2rem",
      maxWidth: "800px",
      width: "90%",
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-primary transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-secondary shadow-md rounded-full p-1 border border-custom transition-colors duration-300">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-primary-600 to-pink-500 text-white"
                    : "text-secondary hover:bg-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-custom"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary rounded-full text-xs text-secondary transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openModal(project)}
                    className="text-primary-600 hover:text-primary-800 dark:hover:text-primary-400 font-medium transition-colors duration-300 hover:underline cursor-pointer"
                  >
                    View Details
                  </button>
                  <div className="flex space-x-3">
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300" />
                    </a>
                    {project.links.live ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300" />
                      </a>
                    ) : (
                      <span
                        className="text-gray-400 cursor-not-allowed opacity-50"
                        title="Live demo not available"
                      >
                        <FiExternalLink className="transition-colors duration-300" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          ...customStyles,
          content: {
            ...customStyles.content,
            maxWidth: "1000px", // tăng bề ngang modal trên desktop
            width: "95%",
          },
        }}
        contentLabel="Project Details"
      >
        {selectedProject && (
          <div className="relative p-4 md:p-10 rounded-2xl bg-secondary shadow-2xl max-w-5xl mx-auto animate-fadeIn">
            {/* Nút close lớn ở góc phải trên */}
            <button
              onClick={() => setModalIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-primary-600 bg-white/80 hover:bg-primary-100 rounded-full p-3 shadow-lg transition-colors duration-300 z-20 border border-gray-200 cursor-pointer"
              aria-label="Close modal"
            >
              <FiX size={28} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center items-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-w-md rounded-2xl shadow-lg border border-gray-200 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-primary leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-base text-gray-600 mb-5 leading-relaxed text-justify">
                  {selectedProject.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-primary text-sm uppercase tracking-wider">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium border border-primary-200 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-6">
                  {selectedProject.links.live ? (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-pink-500 text-white rounded-lg font-semibold shadow hover:from-primary-700 hover:to-pink-600 transition-colors duration-300 gap-2 text-lg drop-shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-200"
                    >
                      <FiExternalLink className="text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
                      <span className="font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                        Live Demo
                      </span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center justify-center px-6 py-3 bg-gray-300 text-gray-400 rounded-lg font-semibold shadow gap-2 text-lg cursor-not-allowed"
                    >
                      <FiExternalLink className="text-2xl" />
                      <span className="font-bold tracking-wide">Live Demo</span>
                    </button>
                  )}
                  <a
                    href={selectedProject.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold shadow hover:bg-primary-600 hover:text-white dark:hover:bg-gray-700 transition-colors duration-300 gap-2 text-lg focus:outline-none focus:ring-4 focus:ring-primary-200"
                  >
                    <FiGithub className="text-xl" />
                    <span className="transition-colors duration-300 group-hover:text-white">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
