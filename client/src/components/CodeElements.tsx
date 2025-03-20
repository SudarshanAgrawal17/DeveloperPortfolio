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
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.1,
            }}
            className="flex items-center justify-center"
          >
            <span 
              className="font-mono text-base md:text-lg lg:text-xl bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 dark:from-blue-300/50 dark:via-purple-300/50 dark:to-pink-300/50 bg-clip-text text-transparent"
              style={{
                transform: `rotate(${(index % 2) * 2 - 1}deg)`,
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