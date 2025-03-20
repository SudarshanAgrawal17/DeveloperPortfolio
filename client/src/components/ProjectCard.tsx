import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image: string;
}

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col">
          <CardHeader>
            <CardTitle className="group-hover:text-primary transition-colors text-lg sm:text-xl mb-2">
              {project.title}
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs sm:text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </a>
      </Card>
    </motion.div>
  );
}
