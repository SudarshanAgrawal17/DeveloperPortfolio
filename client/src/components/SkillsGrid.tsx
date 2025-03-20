import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DiJava, DiPython, DiHtml5, DiCss3, DiReact, DiNodejs, DiMongodb, DiMysql, DiGithub, DiDocker } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

export default function SkillsGrid() {
  const skills = [
    { 
      icon: <DiJava className="w-10 h-10 transition-colors duration-300 group-hover:text-[#007396]" />, 
      name: "Java",
      category: "Languages"
    },
    { 
      icon: <DiPython className="w-10 h-10 transition-colors duration-300 group-hover:text-[#3776AB]" />, 
      name: "Python",
      category: "Languages"
    },
    { 
      icon: <DiHtml5 className="w-10 h-10 transition-colors duration-300 group-hover:text-[#E34F26]" />, 
      name: "HTML5",
      category: "Web Development"
    },
    { 
      icon: <DiCss3 className="w-10 h-10 transition-colors duration-300 group-hover:text-[#1572B6]" />, 
      name: "CSS3",
      category: "Web Development"
    },
    { 
      icon: <DiReact className="w-10 h-10 transition-colors duration-300 group-hover:text-[#61DAFB]" />, 
      name: "React.js",
      category: "Web Development"
    },
    { 
      icon: <DiNodejs className="w-10 h-10 transition-colors duration-300 group-hover:text-[#339933]" />, 
      name: "Node.js",
      category: "Web Development"
    },
    { 
      icon: <SiTailwindcss className="w-10 h-10 transition-colors duration-300 group-hover:text-[#06B6D4]" />, 
      name: "Tailwind CSS",
      category: "Web Development"
    },
    { 
      icon: <DiMongodb className="w-10 h-10 transition-colors duration-300 group-hover:text-[#47A248]" />, 
      name: "MongoDB",
      category: "Database"
    },
    { 
      icon: <DiMysql className="w-10 h-10 transition-colors duration-300 group-hover:text-[#4479A1]" />, 
      name: "MySQL",
      category: "Database"
    },
    { 
      icon: <DiGithub className="w-10 h-10 transition-colors duration-300 group-hover:text-[#181717]" />, 
      name: "Git/GitHub",
      category: "Tools"
    },
    { 
      icon: <DiDocker className="w-10 h-10 transition-colors duration-300 group-hover:text-[#2496ED]" />, 
      name: "Docker",
      category: "Tools"
    }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <div className="space-y-12">
      {categories.map((category, categoryIndex) => (
        <div key={category}>
          <h3 className="text-xl font-semibold mb-6 text-primary/80">{category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills
              .filter(skill => skill.category === category)
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (categoryIndex * 0.1) + (index * 0.1) }}
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
        </div>
      ))}
    </div>
  );
}