import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import avatarImg from "../assets/images/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector-removebg-preview.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-card lg:pl-5"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-primary"
            >
              Hi, I'm{" "}
              <span className="text-primary-600 dark:text-primary-500">
                Quach Gia Bao
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-secondary"
            >
              <TypeAnimation
                sequence={[
                  "Software Engineer 💻",
                  1000,
                  "Coffee-Powered Coder ☕",
                  1000,
                  "Sleeping? What is that? 😴",
                  1000,
                  "I compile dreams while the world sleeps. 🌍",
                  1000,
                  "Passion ignites me, purpose propels me 🔥",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mb-8 max-w-lg text-secondary"
            ></motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex space-x-4"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-primary-600 text-primary-600 rounded-full font-medium hover:text-white transition-all dark:border-primary-500 dark:text-primary-500 dark:hover:bg-gray-700"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="md:w-1/2 relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-100">
                <img
                  src={avatarImg}
                  alt="Quach Gia Bao 3D Cartoon Avatar"
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-6">
              {[
                {
                  icon: <FiGithub size={24} />,
                  url: "https://github.com/baoqg9104",
                },
                {
                  icon: <FiLinkedin size={24} />,
                  url: "https://www.linkedin.com/in/gia-b%E1%BA%A3o-qu%C3%A1ch-b1b536330/",
                },
                {
                  icon: <FiFacebook size={24}/>,
                  url: "https://www.facebook.com/gbao307/",
                }
                // { icon: <FiTwitter size={24} />, url: "#" },
                // { icon: <FiDribbble size={24} />, url: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-purple-100 hover:text-primary-600 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
