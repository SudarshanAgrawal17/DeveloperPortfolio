import { motion } from "framer-motion";

export default function CodeElements() {
  const codeSnippets = [
    "<div>",
    "const [state, setState]",
    "interface Props",
    "npm install",
    "git commit",
    "export default",
    "function App()",
    "useEffect(() => {})",
    "import React",
    "const router",
    "<Component />",
    "async/await",
    ".map((item) =>",
    "useState()",
    "return (",
    "onClick={() => {}}",
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none h-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 h-full">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.5, 0.7, 0.5],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.1,
            }}
          >
            <motion.span
              className="font-mono text-base md:text-lg lg:text-xl
                bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 
                dark:from-blue-300/60 dark:via-purple-300/60 dark:to-pink-300/60 
                bg-clip-text text-transparent
                transition-all duration-300"
              whileHover={{
                scale: 1.1,
                rotate: 3,
                transition: { type: "spring", stiffness: 200 }
              }}
              style={{
                transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                textShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
              }}
            >
              {snippet}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}