import HeroSvg from "@/components/hero-svg";
import SocialLinks from "@/components/social-links";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden m-3 p-3">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* TOP LEFT CORNER */}
        <div className="absolute top-0 left-0 p-4">
          {/* Dotted Pattern */}
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-purple-400 opacity-60"
              ></div>
            ))}
          </div>
          {/* Corner accent line */}
          <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-purple-400 to-transparent opacity-50"></div>
          <div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-purple-400 to-transparent opacity-50"></div>
        </div>

        {/* TOP RIGHT CORNER */}
        <div className="absolute top-0 right-0 p-4">
          {/* Sun/Theme toggle inspired element */}
          <div className="absolute top-2 right-2 w-8 h-8 border-2 border-yellow-400 rounded-full opacity-60">
            <div className="absolute inset-1 bg-yellow-400 rounded-full opacity-40"></div>
          </div>
          {/* Geometric shapes */}
          <div className="absolute top-8 right-8 w-6 h-6 border-2 border-orange-400 rotate-45 opacity-70"></div>
          <div className="absolute top-12 right-12 w-4 h-4 bg-orange-400 rotate-45 opacity-80"></div>
          {/* Corner accent lines */}
          <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-l from-orange-400 to-transparent opacity-50"></div>
          <div className="absolute top-0 right-0 w-1 h-20 bg-gradient-to-b from-orange-400 to-transparent opacity-50"></div>

          {/* Curved corner element */}
          <svg
            className="absolute top-0 right-0 w-24 h-24 text-orange-300 opacity-50"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M0 0 Q 50 0 50 50 Q 50 0 100 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* BOTTOM LEFT CORNER */}
        <div className="absolute bottom-0 left-0 p-4">
          {/* Geometric elements */}
          <div className="absolute bottom-8 left-4 w-8 h-8 border-2 border-purple-500 rotate-12 opacity-60"></div>
          <div className="absolute bottom-12 left-8 w-5 h-5 bg-pink-400 rounded-full opacity-70"></div>
          <div className="absolute bottom-4 left-12 w-6 h-6 bg-purple-600 opacity-30 rotate-45"></div>

          {/* Corner accent lines */}
          <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-purple-400 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1 h-20 bg-gradient-to-t from-purple-400 to-transparent opacity-50"></div>

          {/* Curved corner element */}
          <svg
            className="absolute bottom-0 left-0 w-28 h-28 text-purple-400 opacity-40"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M0 100 Q 0 50 50 50 Q 0 50 0 0"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* BOTTOM RIGHT CORNER */}
        <div className="absolute bottom-0 right-0 p-4">
          {/* Complex geometric pattern */}
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-700 opacity-30 rotate-45"></div>
          <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-orange-400 opacity-50 rotate-12"></div>
          <div className="absolute bottom-12 right-12 w-4 h-4 bg-pink-500 rounded-full opacity-80"></div>
          <div className="absolute bottom-2 right-16 w-6 h-6 border-2 border-purple-400 rounded-full opacity-60"></div>

          {/* Corner accent lines */}
          <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-to-l from-orange-400 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-1 h-20 bg-gradient-to-t from-orange-400 to-transparent opacity-50"></div>

          {/* Curved corner element */}
          <svg
            className="absolute bottom-0 right-0 w-24 h-24 text-orange-300 opacity-45"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M100 100 Q 50 100 50 50 Q 50 100 0 100"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* EDGE ELEMENTS - Middle of edges */}
        {/* Top edge */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>

        {/* Right edge */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-4 bg-orange-400 rotate-45 opacity-60"></div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-pink-500 rounded-full opacity-70"></div>

        {/* Left edge */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-4 bg-purple-500 rotate-45 opacity-50"></div>
      </div>

      {/* CONTENT AREA DECORATIVE ELEMENTS */}
      <div className="relative">
        {/* Content Area Edge Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* CONTENT TOP LEFT */}
          <div className="absolute top-0 left-0">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-purple-400 opacity-60"></div>
              <div className="w-2 h-2 rounded-full bg-purple-300 opacity-50"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500 opacity-40"></div>
            </div>
            <div className="mt-2 w-3 h-3 border border-purple-400 rotate-45 opacity-50"></div>
          </div>

          {/* CONTENT TOP RIGHT */}
          <div className="absolute top-0 right-0">
            <div className="w-4 h-4 bg-orange-400 opacity-60 rotate-45"></div>
            <div className="mt-1 w-3 h-3 border border-orange-300 rounded-full opacity-50"></div>
            <div className="absolute top-2 right-6 w-2 h-2 bg-yellow-400 rounded-full opacity-70"></div>
          </div>

          {/* CONTENT BOTTOM LEFT */}
          <div className="absolute bottom-0 left-0">
            <div className="w-5 h-5 border-2 border-purple-500 opacity-40 rotate-12"></div>
            <div className="mt-1 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-6 w-2 h-2 bg-purple-600 rotate-45 opacity-50"></div>
          </div>

          {/* CONTENT BOTTOM RIGHT */}
          <div className="absolute bottom-0 right-0">
            <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-pink-500 opacity-50 rotate-45"></div>
            <div className="mt-1 w-6 h-6 border border-orange-400 opacity-40 rotate-12"></div>
            <div className="absolute bottom-2 right-8 w-3 h-3 bg-pink-500 rounded-full opacity-70"></div>
            <div className="absolute bottom-6 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
          </div>

          {/* CONTENT EDGE MIDPOINTS */}
          {/* Top edge of content */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-50"></div>

          {/* Right edge of content */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-2 bg-orange-400 rotate-45 opacity-50"></div>

          {/* Bottom edge of content */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-500 rounded-full opacity-60"></div>

          {/* Left edge of content */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rotate-45 opacity-40"></div>

          {/* Subtle connecting lines around content */}
          <div className="absolute top-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-transparent opacity-30"></div>
          <div className="absolute top-0 right-0 w-12 h-0.5 bg-gradient-to-l from-orange-400 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-transparent opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-orange-400 to-transparent opacity-30"></div>
        </div>

        {/* Your Original Content - Updated Layout */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 px-4 py-2">
          {/* Left Column - Text Content */}
          <div className="flex-1 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-3 gradient-title">
              Hi!, I'm <span>Aditya Sharma</span>
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-200/50 mb-3">
              Hi there! I'm Aditya Sharma, a passionate and driven Computer
              Science graduate from R.D. Engineering College, Ghaziabad (2020 –
              July 2024). Currently, I am a Software Developer Intern at MeeTri
              Infotech, where I'm gaining hands-on experience working on
              real-world projects and expanding my skill set in both front-end
              and back-end technologies.
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-200/50 mb-4">
              I'm particularly passionate about web development, and I thrive on
              the challenge of building user-friendly, functional, and scalable
              web applications. I enjoy working with both frontend and backend
              technologies, and I'm always looking for ways to improve the
              performance and usability of my projects.
            </p>

            {/* Social Links moved here */}
            <div className="mt-10">
              <SocialLinks />
            </div>
          </div>

          {/* Right Column - Hero SVG */}
          <div className="flex-1 flex items-center justify-center max-w-sm lg:max-w-md xl:max-w-lg">
            <div className="w-full max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] aspect-square">
              <HeroSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
