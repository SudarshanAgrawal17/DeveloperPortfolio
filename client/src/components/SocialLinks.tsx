import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function SocialLinks() {
  const links = [
    {
      icon: <SiGithub className="w-5 h-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <SiLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <SiX className="w-5 h-5" />,
      href: "https://x.com/yourusername",
      label: "X (formerly Twitter)",
    },
  ];

  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <Button
          key={link.label}
          variant="ghost"
          size="icon"
          asChild
          className="transition-all duration-300 hover:scale-110"
        >
          <a 
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  );
}