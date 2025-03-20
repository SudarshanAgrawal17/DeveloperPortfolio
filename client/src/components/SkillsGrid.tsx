import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DiJava, DiPython, DiHtml5, DiCss3, DiReact, DiNodejs, DiMongodb, DiMysql, DiGithub, DiJavascript1, DiDatabase } from "react-icons/di";
import { SiTailwindcss, SiExpress, SiC, SiLeetcode, SiDatabricks, SiArduino, SiLinux, SiMysql } from "react-icons/si";

export default function SkillsGrid() {
  const skills = [
    { icon: <DiJava className="w-10 h-10 transition-colors duration-300 group-hover:text-[#007396]" />, name: "Java" },
    { icon: <SiC className="w-10 h-10 transition-colors duration-300 group-hover:text-[#A8B9CC]" />, name: "C" },
    { icon: <DiJavascript1 className="w-10 h-10 transition-colors duration-300 group-hover:text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <DiPython className="w-10 h-10 transition-colors duration-300 group-hover:text-[#3776AB]" />, name: "Python" },
    { icon: <DiHtml5 className="w-10 h-10 transition-colors duration-300 group-hover:text-[#E34F26]" />, name: "HTML5" },
    { icon: <DiCss3 className="w-10 h-10 transition-colors duration-300 group-hover:text-[#1572B6]" />, name: "CSS3" },
    { icon: <SiTailwindcss className="w-10 h-10 transition-colors duration-300 group-hover:text-[#06B6D4]" />, name: "Tailwind CSS" },
    { icon: <DiReact className="w-10 h-10 transition-colors duration-300 group-hover:text-[#61DAFB]" />, name: "React.js" },
    { icon: <DiNodejs className="w-10 h-10 transition-colors duration-300 group-hover:text-[#339933]" />, name: "Node.js" },
    { icon: <SiExpress className="w-10 h-10 transition-colors duration-300 group-hover:text-[#000000]" />, name: "Express.js" },
    { icon: <SiMysql className="w-10 h-10 transition-colors duration-300 group-hover:text-[#4479A1]" />, name: "MySQL" },
    { icon: <DiDatabase className="w-10 h-10 transition-colors duration-300 group-hover:text-[#F80000]" />, name: "JDBC" },
    { icon: <DiMongodb className="w-10 h-10 transition-colors duration-300 group-hover:text-[#47A248]" />, name: "MongoDB" },
    { icon: <DiGithub className="w-10 h-10 transition-colors duration-300 group-hover:text-[#181717]" />, name: "GitHub" },
    { icon: <SiArduino className="w-10 h-10 transition-colors duration-300 group-hover:text-[#00979D]" />, name: "Arduino Uno" },
    { icon: <SiDatabricks className="w-10 h-10 transition-colors duration-300 group-hover:text-[#FF3621]" />, name: "Data Structures" },
    { icon: <DiJava className="w-10 h-10 transition-colors duration-300 group-hover:text-[#007396]" />, name: "OOPs" },
    { icon: <DiMysql className="w-10 h-10 transition-colors duration-300 group-hover:text-[#EE0000]" />, name: "RDBMS" },
    { icon: <SiLinux className="w-10 h-10 transition-colors duration-300 group-hover:text-[#FCC624]" />, name: "OS Fundamentals" },
    { icon: <SiLeetcode className="w-10 h-10 transition-colors duration-300 group-hover:text-[#FFA116]" />, name: "Solved 500+ problems on LeetCode" },
  ];

  return (
    <div className="space-y-12 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="h-full group hover:shadow-lg transition-all duration-300">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                {skill.icon}
                <h3 className="mt-4 font-medium text-sm">{skill.name}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}