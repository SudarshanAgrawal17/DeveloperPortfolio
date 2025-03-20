import { motion } from "framer-motion";
import { BriefcaseIcon, GraduationCapIcon, AwardIcon } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tata Consultancy Services",
      date: "Expected to Join",
      type: "Full-time",
      description: "Selected through campus placement with offer letter in hand.",
      icon: <BriefcaseIcon className="w-6 h-6" />,
      current: true
    },
    {
      title: "IT & Web Development Intern",
      company: "BasketHunt Private Limited",
      date: "09/2023 - 11/2023",
      type: "Remote",
      description: "Enhanced user experience by implementing responsive design with Tailwind CSS for React.js full-stack project. Contributed to rapid development of front-end solutions using WordPress.",
      icon: <BriefcaseIcon className="w-6 h-6" />,
      current: false
    },
    {
      title: "IoT Workshop Lead",
      company: "I.E.E.E. Student Branch",
      date: "09/2022",
      description: "Collaborated with a team of 6 members to conduct an IoT workshop for approximately 150 students, providing guidance and technical support.",
      icon: <GraduationCapIcon className="w-6 h-6" />,
      current: false
    },
    {
      title: "Project Demonstration",
      company: "NAAC Accreditation Council",
      date: "08/2022",
      description: "Presented an IoT-based smart dustbin as part of a team to NAAC officials, receiving positive feedback on innovation.",
      icon: <AwardIcon className="w-6 h-6" />,
      current: false
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />

        {/* Timeline items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 p-2 rounded-full ${exp.current ? 'bg-primary' : 'bg-primary/20'}`}>
                <div className="text-background">
                  {exp.icon}
                </div>
              </div>

              {/* Content */}
              <div className={`bg-card p-6 rounded-lg shadow-lg border ${exp.current ? 'border-primary' : 'border-transparent'}`}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">{exp.date}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium">{exp.company}</span>
                  {exp.type && (
                    <>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{exp.type}</span>
                    </>
                  )}
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
