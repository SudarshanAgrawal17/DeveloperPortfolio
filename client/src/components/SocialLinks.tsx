import { SiGithub, SiInstagram, SiLeetcode, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function SocialLinks() {
  const links = [
    {
      icon: <SiGithub className="w-5 h-5" />,
      href: "https://github.com/SudarshanAgrawal17",
      label: "GitHub",
    },
    {
      icon: <SiLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/sudarshan-agrawal-b3b074212/",
      label: "LinkedIn",
    },
    {
      icon: <SiInstagram className="w-5 h-5" />,
      href: "https://www.instagram.com/sudarshannagrawal/",
      label: "Instagram",
    },
    {
        icon: <SiLeetcode className="w-5 h-5" />,
        href: "https://leetcode.com/u/sudarshanag/",
        label: "Leetcode",
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