import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and TypeScript",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://project-one.com",
    image: "/project-1.jpg"
  },
  {
    title: "Project Two",
    description: "Full-stack application with real-time features",
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    link: "https://project-two.com",
    image: "/project-2.jpg"
  },
  {
    title: "Project Three",
    description: "Mobile-first e-commerce platform",
    techStack: ["React Native", "GraphQL", "AWS"],
    link: "https://project-three.com",
    image: "/project-3.jpg"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 min-h-[80vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <AnimatedText text="Hi, I'm [Your Name]" />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            <AnimatedText 
              text="A full-stack developer crafting beautiful and functional web experiences"
              delay={0.5}
            />
          </p>
          <SocialLinks />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <SkillsGrid />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
