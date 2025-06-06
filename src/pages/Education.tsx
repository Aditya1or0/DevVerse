import { educationItems, experienceItems } from "@/constants/education";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
}) => (
  <div className="relative pl-10 pb-10 group">
    <div className="absolute left-0 top-1 w-4 h-4 bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-700 rounded-full border-2 border-white dark:border-gray-800 transition-transform group-hover:scale-110"></div>
    <div className="text-sm text-gray-500 dark:text-gray-400">{year}</div>
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
      {description}
    </p>
  </div>
);

interface TimelineSectionProps {
  title: string;
  items: TimelineItemProps[];
  icon?: React.ReactNode;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({
  title,
  items,
  icon,
}) => (
  <div className="w-full md:w-1/2 p-6">
    <div className="flex items-center mb-6">
      {icon && <div className="text-blue-500 text-2xl mr-2">{icon}</div>}
      <h2 className="text-2xl font-extrabold tracking-tight mb-3 gradient-title">
        {title}
      </h2>
    </div>
    <div className="relative pl-2">
      <div className="absolute left-2.5 top-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </div>
);

const Education: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8 gap-6 max-w-6xl mx-auto">
      <TimelineSection
        title="EDUCATION"
        items={educationItems}
        icon={<FaGraduationCap />}
      />
      <TimelineSection
        title="EXPERIENCE"
        items={experienceItems}
        icon={<FaBriefcase />}
      />
    </div>
  );
};

export default Education;
