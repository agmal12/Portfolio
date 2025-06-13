import React, { useState, useCallback } from "react";
import ProjectDetails from "./ProjectDetails";
import { motion } from "framer-motion";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags = [],
  setPreview,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const handleMouseEnter = useCallback(() => setPreview(image), [image, setPreview]);
  const handleMouseLeave = useCallback(() => setPreview(null), [setPreview]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div
        className="flex flex-col items-start justify-between py-8 transition-all duration-300 sm:flex-row sm:items-center sm:py-10 hover:bg-white/5 hover:px-4 hover:rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mb-4 sm:mb-0">
          <h3 className="text-2xl font-medium text-white">{title}</h3>
          <TagsList tags={tags} />
        </div>
        
        <ReadMoreButton onClick={openModal} title={title} />
      </div>

      <Divider />

      <AnimatedModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        description={description}
        subDescription={subDescription}
        image={image}
        tags={tags}
        href={href}
      />
    </motion.div>
  );
};

// Extracted components for better organization
const TagsList = ({ tags }) => (
  <div className="flex flex-wrap gap-3 mt-3 text-sand">
    {tags.map((tag) => (
      <span 
        key={tag.id}
        className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm"
      >
        {tag.name}
      </span>
    ))}
  </div>
);

const ReadMoreButton = ({ onClick, title }) => (
  <motion.button
    whileHover={{ x: 5 }}
    onClick={onClick}
    className="flex items-center gap-2 group"
    aria-label={`Read more about ${title}`}
  >
    <span className="font-medium transition-all duration-300 group-hover:text-white">
      Read More
    </span>
    <ArrowIcon />
  </motion.button>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
  >
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);

const Divider = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
);

const AnimatedModal = ({ isOpen, onClose, ...props }) => (
  isOpen && <ProjectDetails {...props} closeModal={onClose} />
);

export default React.memo(Project);