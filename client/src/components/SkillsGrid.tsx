import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiGraphql, SiDocker } from "react-icons/si";

export default function SkillsGrid() {
  const skills = [
    { 
      icon: <SiReact className="w-10 h-10 transition-colors duration-300 group-hover:text-[#61DAFB]" />, 
      name: "React",
      color: "#61DAFB" 
    },
    { 
      icon: <SiTypescript className="w-10 h-10 transition-colors duration-300 group-hover:text-[#3178C6]" />, 
      name: "TypeScript",
      color: "#3178C6"
    },
    { 
      icon: <SiTailwindcss className="w-10 h-10 transition-colors duration-300 group-hover:text-[#06B6D4]" />, 
      name: "Tailwind CSS",
      color: "#06B6D4"
    },
    { 
      icon: <SiNodedotjs className="w-10 h-10 transition-colors duration-300 group-hover:text-[#339933]" />, 
      name: "Node.js",
      color: "#339933"
    },
    { 
      icon: <SiGraphql className="w-10 h-10 transition-colors duration-300 group-hover:text-[#E10098]" />, 
      name: "GraphQL",
      color: "#E10098"
    },
    { 
      icon: <SiDocker className="w-10 h-10 transition-colors duration-300 group-hover:text-[#2496ED]" />, 
      name: "Docker",
      color: "#2496ED"
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Card className="h-full group hover:shadow-lg transition-all duration-300">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              {skill.icon}
              <h3 className="mt-4 font-medium">{skill.name}</h3>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}