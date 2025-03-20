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
            whileHover={{
              scale: 1.2,
              rotate: [-2, 2],
              transition: {
                duration: 0.2,
                ease: "easeOut"
              }
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.1,
            }}
            className="flex items-center justify-center cursor-pointer"
          >
            <motion.span 
              className="font-mono text-base md:text-lg lg:text-xl 
                bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 
                dark:from-blue-300/50 dark:via-purple-300/50 dark:to-pink-300/50 
                bg-clip-text text-transparent
                hover:from-blue-400 hover:via-purple-400 hover:to-pink-400
                dark:hover:from-blue-300 dark:hover:via-purple-300 dark:hover:to-pink-300
                transition-all duration-300
                hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/40
                relative
                after:absolute after:inset-0 after:bg-gradient-to-br 
                after:from-blue-500/0 after:via-purple-500/0 after:to-pink-500/0
                after:opacity-0 after:transition-opacity after:duration-300
                hover:after:opacity-10"
              style={{
                transform: `rotate(${(index % 2) * 2 - 1}deg)`,
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