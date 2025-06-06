import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";

type Tag = {
  name: string;
};

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
};

export const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-[#111]/50 border border-border p-5 rounded-2xl sm:w-[360px] w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative w-full h-[230px] group">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black/70 hover:bg-black/90 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-colors duration-200"
            >
              {/* GitHub Icon */}
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="..." /> {/* icon path shortened for brevity */}
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-foreground font-bold text-[24px] mb-2">{name}</h3>
          <p className="text-muted-foreground text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className="text-[12px] px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground font-medium"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
