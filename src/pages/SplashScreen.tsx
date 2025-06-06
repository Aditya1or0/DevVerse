import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 100);

    // Complete splash screen after 3.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600); // Wait for fade-out animation
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  // Glitch effect for text
  const glitchVariants = {
    visible: {
      opacity: 1,
      x: [0, -2, 2, -1, 1, 0],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  // Floating shapes animation
  const shapeVariants = {
    float: (i: number) => ({
      x: [0, Math.random() * 50 - 25],
      y: [0, -150],
      opacity: [0, 1, 0],
      transition: {
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
        delay: i * 0.5,
      },
    }),
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-600 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      // style={{
      //   background:
      //     "radial-gradient(circle at center, #1a1a2e 0%, #0f0f23 70%, #000 100%)",
      // }}
      style={{
        background:
          "radial-gradient(circle at center, #1a1a1a 0%, #0d0d0d 70%, #000 100%)",
      }}
    >
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={shapeVariants}
            animate="float"
            className={`absolute w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-blue-500/50 opacity-50`}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "0",
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-8">
        {/* Logo/Icon Animation */}
        <div className="mb-8 relative">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 5, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative"
          >
            <Cpu
              size={48}
              className="text-cyan-400"
              style={{
                filter: "drop-shadow(0 0 15px rgba(34, 211, 238, 0.5))",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-24 h-24 border border-cyan-400/20 rounded-full animate-spin"
                style={{ animationDuration: "4s" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Main Text with Glitch Effect */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          variants={glitchVariants}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
        >
          Aditya's Portfolio
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg text-gray-300 font-light tracking-wide mb-6"
        >
          Innovating the Web, One Project at a Time
        </motion.p>

        {/* Circular Progress Indicator */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#2d2d44"
              strokeWidth="8"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeDasharray="283"
              strokeDashoffset={283 - (progress / 100) * 283}
              strokeLinecap="round"
              initial={{ strokeDashoffset: 283 }}
              animate={{ strokeDashoffset: 283 - (progress / 100) * 283 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-gray-300">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 bg-cyan-400 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Bottom Signature */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wider">
          Designed with Passion by Aditya
        </p>
      </motion.div>
    </div>
  );
};
