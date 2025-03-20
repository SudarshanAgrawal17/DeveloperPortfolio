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
  ];

  return (
    <div className="fixed inset-0 -z-10">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-8">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              delay: index * 0.2,
            }}
          >
            <span 
              className="font-mono text-lg md:text-xl lg:text-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 dark:from-blue-400/50 dark:via-purple-400/50 dark:to-pink-400/50 bg-clip-text text-transparent hover:from-blue-500/70 hover:via-purple-500/70 hover:to-pink-500/70 dark:hover:from-blue-300/80 dark:hover:via-purple-300/80 dark:hover:to-pink-300/80 transition-colors duration-300"
              style={{
                transform: `rotate(${Math.random() * 6 - 3}deg)`,
              }}
            >
              {snippet}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}