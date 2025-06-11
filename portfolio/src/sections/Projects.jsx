import { useState, useRef } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);
  
  // Mouse follower animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 100 });
  const springY = useSpring(y, { damping: 15, stiffness: 100 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  // Filter projects by category
  const filteredProjects = activeCategory === "all" 
    ? myProjects 
    : myProjects.filter(project => project.categories?.includes(activeCategory));

  // Get unique categories
  const categories = ["all", ...new Set(myProjects.flatMap(project => project.categories || []))];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-20 px-4 sm:px-8 max-w-7xl mx-auto"
    >
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          My Selected Projects
        </motion.h2>
        
        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent h-px w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Project 
            key={project.id} 
            {...project} 
            setPreview={setPreview} 
          />
        ))}
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-0 left-0 z-50 pointer-events-none w-64 h-40 md:w-80 md:h-56"
            style={{ x: springX, y: springY }}
          >
            <motion.img
              src={preview}
              className="w-full h-full object-cover rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
              alt="Project preview"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;