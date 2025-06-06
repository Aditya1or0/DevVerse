import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6  rounded-2xl hover:bg-gray-750 transition-colors">
          <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
          <div className="text-gray-400 text-sm">Years Experience</div>
        </div>
        <div className="text-center p-6  rounded-2xl hover:bg-gray-750 transition-colors">
          <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
          <div className="text-gray-400 text-sm">Projects Completed</div>
        </div>
        <div className="text-center p-6  rounded-2xl hover:bg-gray-750 transition-colors">
          <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
          <div className="text-gray-400 text-sm">Technologies</div>
        </div>
        <div className="text-center p-6  rounded-2xl hover:bg-gray-750 transition-colors">
          <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
          <div className="text-gray-400 text-sm">Learning Mode</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
