import { motion, AnimatePresence } from "framer-motion";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop with click handler */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
          onClick={closeModal}
          aria-hidden="true"
        />
        
        <motion.div
          className="relative z-10 w-full max-w-4xl rounded-2xl bg-gradient-to-l from-midnight to-navy border border-white/10 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()} // Prevent click propagation to backdrop
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-midnight/80 hover:bg-gray-700 transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>

          {/* Project image */}
          <div className="relative aspect-video bg-gray-800">
            <img 
              src={image} 
              alt={title} 
              className="object-cover w-full h-full"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Project content */}
          <div className="p-6 sm:p-8">
            <h2 className="mb-4 text-3xl font-bold text-white">{title}</h2>
            
            <div className="space-y-4">
              <p className="text-lg text-neutral-300">{description}</p>
              
              {subDescription?.map((subDesc, index) => (
                <p key={index} className="text-neutral-400">
                  {subDesc}
                </p>
              ))}
            </div>

            {/* Tags and CTA */}
            <div className="flex flex-col items-start justify-between gap-6 mt-8 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-3">
                {tags?.map((tag) => (
                  <Tag key={tag.id} tag={tag} />
                ))}
              </div>

              <ProjectLink href={href} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Extracted components for better readability and reusability
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-white"
  >
    <path
      fillRule="evenodd"
      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const Tag = ({ tag }) => (
  <div 
    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-midnight/50 hover:bg-midnight transition-colors"
    title={tag.name}
  >
    {tag.path && (
      <img
        src={tag.path}
        alt={tag.name}
        className="w-6 h-6 rounded-sm"
        loading="lazy"
      />
    )}
    <span className="text-sm text-neutral-300">{tag.name}</span>
  </div>
);

const ProjectLink = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 font-medium text-white transition-colors rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-midnight"
  >
    View Project
    <ArrowIcon />
  </a>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
      clipRule="evenodd"
    />
  </svg>
);

export default ProjectDetails;