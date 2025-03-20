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
    <>
      {/* Top section elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-10">
        {codeSnippets.slice(0, 5).map((snippet, index) => (
          <motion.div
            key={`top-${index}`}
            className="absolute text-primary/50 font-mono text-sm"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * (window.innerHeight / 2)
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Middle section elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-10 translate-y-[100vh]">
        {codeSnippets.slice(5, 10).map((snippet, index) => (
          <motion.div
            key={`middle-${index}`}
            className="absolute text-primary/50 font-mono text-sm"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * (window.innerHeight / 2)
            }}
            animate={{
              x: [0, 30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Bottom section elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-10 translate-y-[200vh]">
        {codeSnippets.slice(10).map((snippet, index) => (
          <motion.div
            key={`bottom-${index}`}
            className="absolute text-primary/50 font-mono text-sm"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * (window.innerHeight / 2)
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, -20, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>
    </>
  );
}