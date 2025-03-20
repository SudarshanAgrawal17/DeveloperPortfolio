import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import SkillsGrid from "@/components/SkillsGrid";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import CodeElements from "@/components/CodeElements";
import ExperienceTimeline from "@/components/ExperienceTimeline";

const projects = [
  {
    title: "Expense Management Application",
    description: "Full-stack expense management application to track daily user expenses categorywise",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "https://github.com/Ananya-Saini/ExpenseManagementApp",
    image: "/project-1.jpg"
  },
  {
    title: "Image Steganography",
    description: "Desktop application for embedding and retrieving secret text into/from image files",
    techStack: ["Java", "LSB algorithm", "Swing"],
    link: "https://github.com/SudarshanAgrawal17/Image-Steganography",
    image: "/project-2.jpg"
  },
  {
    title: "Song Recognition System",
    description: "Python-based system for identifying songs from audio samples with high accuracy",
    techStack: ["Python", "speech_recognition", "spleeter"],
    link: "https://github.com/SudarshanAgrawal17/song-recognition",
    image: "/project-3.jpg"
  },
  {
    title: "Student Management App",
    description: "Console application for managing student records using MySQL database",
    techStack: ["Java", "MySQL", "OOPs", "JDBC"],
    link: "https://github.com/SudarshanAgrawal17/StudentManagementApp",
    image: "/project-4.jpg"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <CodeElements />

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-20 min-h-[80vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight word-spacing-wide gradient-text-light dark:gradient-text-dark">
            <AnimatedText text="Hi, I'm Sudarshan Agrawal" />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed word-spacing-wide gradient-text-light dark:gradient-text-dark">
            <AnimatedText 
              text="A Computer Science graduate passionate about full-stack development and innovative solutions"
              delay={0.5}
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
            <a href="mailto:sudarshanagrawal8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              sudarshanagrawal8@gmail.com
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <span className="text-muted-foreground">Chandausi, India</span>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <span className="text-muted-foreground">+91-9411855745</span>
          </div>
          <SocialLinks />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text-light dark:gradient-text-dark">
            Experience
          </h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 bg-muted/10">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text-light dark:gradient-text-dark">
            Skills & Technologies
          </h2>
          <SkillsGrid />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text-light dark:gradient-text-dark">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-muted/10">
        <div className="container mx-auto px-4 max-w-md relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text-light dark:gradient-text-dark">
            Get in Touch
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground relative z-10">
        <p>© {new Date().getFullYear()} Sudarshan Agrawal. All rights reserved.</p>
      </footer>
    </div>
  );
}