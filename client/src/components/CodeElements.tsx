import { motion } from "framer-motion";

export default function CodeElements() {
  const codeSnippets = [
    "<div>",
    "const [state, setState]",
    "interface Props",
    "npm install",
    "git commit",
    "export default",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-10">
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/50 font-mono text-sm"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight 
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
  );
}
