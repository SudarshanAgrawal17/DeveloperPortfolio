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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-8 pointer-events-none select-none -z-10"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2,
          }}
        >
          <span 
            className="text-primary/30 font-mono text-lg md:text-xl lg:text-2xl whitespace-nowrap"
            style={{
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
            }}
          >
            {snippet}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}