import { motion } from "framer-motion";
import { projects } from "@/constants/projects";
import { ProjectCard } from "@/components/project-card";

const Projects = () => {
  return (
    <div className="px-6 py-10">
      <motion.div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-3 gradient-title">
          Projects
        </h2>
      </motion.div>

      <div className="mt-10 flex gap-7 mb-20 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
