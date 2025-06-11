import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600/50 to-pink-500/60 bg-clip-text text-transparent"
            >
              BaoQG
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {[
              {
                icon: <FiGithub size={20} />,
                url: "https://github.com/baoqg9104",
              },
              {
                icon: <FiLinkedin size={20} />,
                url: "https://www.linkedin.com/in/gia-b%E1%BA%A3o-qu%C3%A1ch-b1b536330/",
              },
              { icon: <FiFacebook size={20} />, url: "https://www.facebook.com/gbao307/" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
