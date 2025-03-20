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
    link: "https://github.com",
    image: "/project-1.jpg"
  },
  {
    title: "Image Steganography",
    description: "Desktop application for embedding and retrieving secret text into/from image files",
    techStack: ["Java", "LSI algorithm", "Image Processing"],
    link: "https://github.com",
    image: "/project-2.jpg"
  },
  {
    title: "Song Recognition System",
    description: "Python-based system for identifying songs from audio samples with high accuracy",
    techStack: ["Python", "speech_recognition", "pyfolder"],
    link: "https://github.com",
    image: "/project-3.jpg"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <CodeElements />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 min-h-[80vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            <AnimatedText text="Hi, I'm Sudarshan Agrawal" />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
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

      {/* Education Section */}
      <section id="education" className="relative py-20 bg-muted/10">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="grid gap-6 max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">B.Tech in Computer Science Eng.</h3>
                <span className="text-muted-foreground">8.5/10</span>
              </div>
              <p className="text-muted-foreground">Graphic Era University, Dehradun</p>
              <p className="text-sm text-muted-foreground">06/2024</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">12th, C.B.S.E</h3>
                <span className="text-muted-foreground">85.6%</span>
              </div>
              <p className="text-muted-foreground">R.R.K. Sr. Sec. School, Chandausi</p>
              <p className="text-sm text-muted-foreground">07/2020</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">10th, C.B.S.E</h3>
                <span className="text-muted-foreground">87.0%</span>
              </div>
              <p className="text-muted-foreground">R.R.K. Sr. Sec. School, Chandausi</p>
              <p className="text-sm text-muted-foreground">05/2018</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Experience
          </h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 bg-muted/10">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <SkillsGrid />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-muted/10">
        <div className="container mx-auto px-4 max-w-md relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
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