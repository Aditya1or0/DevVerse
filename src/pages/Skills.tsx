import { skillsData } from "@/constants/skills";

interface Skill {
  icon: React.ReactNode;
  name: string;
  level: number;
}

interface SkillCategoryData {
  category: string;
  skills: Skill[];
}

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="group relative bg-[#121212]/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
    <div className="flex items-center gap-3 mb-3">
      <div className="text-2xl">{skill.icon}</div>
      <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
    </div>

    {/* Progress bar */}
    <div className="relative">
      <div className="w-full bg-gray-700/50 rounded-full h-2 mb-2">
        <div
          className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-400 text-right">{skill.level}%</div>
    </div>

    {/* Hover glow effect */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </div>
);

const SkillCategory = ({
  category,
  skills,
}: {
  category: string;
  skills: Skill[];
}) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent mb-6 flex items-center gap-2">
      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
      {category}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill: Skill, index: number) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2 gradient-title">
          Technical Skills
        </h1>
        <p className="text-xs sm:text-sm lg:text-base dark:text-gray-200/50">
          Technologies and tools I work with to bring ideas to life
        </p>
      </div>

      {skillsData.map((category: SkillCategoryData, index: number) => (
        <SkillCategory
          key={index}
          category={category.category}
          skills={category.skills}
        />
      ))}

      {/* Decorative elements */}
      <div className="relative mt-12">
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-1/3 w-1 h-1 bg-cyan-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-700"></div>
      </div>
    </div>
  );
};

export default Skills;
