import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiGraphql, SiDocker } from "react-icons/si";

export default function SkillsGrid() {
  const skills = [
    { icon: <SiReact className="w-10 h-10" />, name: "React" },
    { icon: <SiTypescript className="w-10 h-10" />, name: "TypeScript" },
    { icon: <SiTailwindcss className="w-10 h-10" />, name: "Tailwind CSS" },
    { icon: <SiNodedotjs className="w-10 h-10" />, name: "Node.js" },
    { icon: <SiGraphql className="w-10 h-10" />, name: "GraphQL" },
    { icon: <SiDocker className="w-10 h-10" />, name: "Docker" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full">
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
