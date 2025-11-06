import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Lightbulb, Brain, Trophy } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Quiz Zone",
    icon: <Trophy className="w-6 h-6 text-[#FFD700]" />,
    desc: "Test your crypto IQ with short challenges.",
    color: "#FFD700",
  },
  {
    id: 2,
    title: "Word of the Day",
    icon: <BookOpen className="w-6 h-6 text-[#4BD0FF]" />,
    desc: "Learn a new crypto term every day.",
    color: "#4BD0FF",
  },
  {
    id: 3,
    title: "Myth vs Fact",
    icon: <Brain className="w-6 h-6 text-[#C7A94A]" />,
    desc: "Uncover truths behind common crypto myths.",
    color: "#C7A94A",
  },
  {
    id: 4,
    title: "Fun Facts",
    icon: <Lightbulb className="w-6 h-6 text-[#00FFC6]" />,
    desc: "Discover surprising moments in blockchain history.",
    color: "#00FFC6",
  },
];

const KnowledgeMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener("openKnowledge", open);
    return () => window.removeEventListener("openKnowledge", open);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-[#0F0F0F]/90 border border-[#1A1A1A] rounded-3xl p-8 w-[90%] max-w-2xl text-center text-white shadow-[0_0_40px_rgba(0,255,198,0.2)]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#00FFC6] to-[#4BD0FF] bg-clip-text text-transparent">
              Crypto Knowledge Hub
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveCard(item.id)}
                  className="cursor-pointer p-6 bg-[#141414] border border-gray-800 rounded-2xl hover:border-[#00FFC6]/50 transition-all"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    {item.icon}
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
            >
              ✖
            </button>

            {/* Inner modal for each section */}
            <AnimatePresence>
              {activeCard && (
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center items-center bg-[#0D0D0D]/95 backdrop-blur-lg rounded-3xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{
                      background: `linear-gradient(90deg, ${categories.find((c) => c.id === activeCard)?.color}, #ffffff)`,
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {categories.find((c) => c.id === activeCard)?.title}
                  </h3>

                  <p className="text-gray-300 max-w-md text-center mb-8">
                    {categories.find((c) => c.id === activeCard)?.desc}
                  </p>

                  {/* Placeholder content — replace later */}
                  <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6 w-full max-w-md">
                    <p className="text-gray-400 text-sm">
                      Coming soon: Interactive content for{" "}
                      <span className="text-[#00FFC6] font-medium">
                        {categories.find((c) => c.id === activeCard)?.title}
                      </span>
                      .
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveCard(null)}
                    className="mt-6 bg-transparent border border-gray-700 text-gray-300 px-6 py-2 rounded-full hover:border-[#00FFC6] hover:text-[#00FFC6] transition-all"
                  >
                    ← Back
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KnowledgeMenu;
