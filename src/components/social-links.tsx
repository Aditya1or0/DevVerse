import { Links } from "@/constants/social-links";
import { Code, Github, Linkedin, Mail, Phone } from "lucide-react";

const socialLinks = [
  {
    href: Links.Mail,
    icon: Mail,
    color: "hover:text-purple-400 hover:border-purple-400",
  },
  {
    href: Links.LinkedIn,
    icon: Linkedin,

    color: "hover:text-blue-400 hover:border-blue-400",
  },
  {
    href: Links.Github,
    icon: Github,
    color: "hover:text-orange-400 hover:border-orange-400",
  },
  {
    href: Links.CodeChef,
    icon: Code,
    color: "hover:text-pink-400 hover:border-pink-400",
  },
  {
    href: "#",
    icon: Phone,
    color: "hover:text-green-400 hover:border-green-400",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-6">
      {socialLinks.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-xl 
              bg-white/10 backdrop-blur-sm border border-white/20 
              transition-all duration-300 ease-out 
              hover:scale-110 hover:bg-white/20 hover:shadow-lg hover:shadow-sky-500/25
              dark:bg-gray-900/30 dark:border-gray-700/50 dark:hover:bg-gray-800/50
              ${link.color}`}
          >
            <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />

            {/* Subtle glow effect */}
            <div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/0 to-cyan-400/0 
              group-hover:from-sky-400/20 group-hover:to-sky-400/20 
              transition-all duration-300 pointer-events-none"
            ></div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
