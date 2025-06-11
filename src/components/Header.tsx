import { useState, useEffect, useMemo } from "react";
import { useTheme } from "../hooks/useTheme";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>("home");
  const navItems = useMemo(() => ["Home", "About", "Skills", "Projects", "Contact"], []);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map((item) => {
        const route = item.toLowerCase();
        const el = document.getElementById(route);
        if (!el) return { route, offset: Infinity };
        const rect = el.getBoundingClientRect();
        return { route, offset: Math.abs(rect.top) };
      });
      // Find the section closest to the top (but not past it)
      const visible = offsets.filter(o => {
        const el = document.getElementById(o.route);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 80; // header height
      });
      if (visible.length > 0) {
        // Section closest to top
        const current = visible.reduce((a, b) => (a.offset < b.offset ? a : b));
        setActiveNav(current.route);
      } else {
        // Default to first section
        setActiveNav(navItems[0].toLowerCase());
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900/90 text-gray-100 border-gray-700"
          : "bg-white/90 text-gray-900 border-gray-200"
      } border-b`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
            <a
            href="#"
            className={`text-2xl font-bold bg-gradient-to-r from-blue-600/50 to-pink-500/60 bg-clip-text text-transparent ${
              theme === "dark" ? "brightness-150" : ""
            }`}
            >
            BaoQG
            </a>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const route = item.toLowerCase();
              const isActive = activeNav === route;
              return (
                <a
                  key={item}
                  href={`/${route}`}
                  className={`font-medium transition-colors ${
                    theme === "dark"
                      ? isActive
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "hover:text-blue-400"
                      : isActive
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "hover:text-blue-600"
                  } pb-1`}
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById(route);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                    window.history.replaceState(null, '', `/${route}`);
                  }}
                >
                  {item}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center space-x-6">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                theme === "dark"
                  ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                theme === "dark"
                  ? "bg-gray-700 text-gray-100 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-4 py-4 border-t transition-colors ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const route = item.toLowerCase();
                const isActive = activeNav === route;
                return (
                  <a
                    key={item}
                    href={`/${route}`}
                    className={`font-medium transition-colors ${
                      theme === "dark"
                        ? isActive
                          ? "text-primary-400 font-bold"
                          : "hover:text-primary-400"
                        : isActive
                          ? "text-primary-600 font-bold"
                          : "hover:text-primary-600"
                    }`}
                    onClick={e => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      const el = document.getElementById(route);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                      window.history.replaceState(null, '', `/${route}`);
                    }}
                  >
                    {item}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
