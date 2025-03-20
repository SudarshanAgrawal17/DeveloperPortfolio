import { Link } from "wouter";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold">Portfolio</a>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="#about">
            <a className="hover:text-primary transition-colors">About</a>
          </Link>
          <Link href="#skills">
            <a className="hover:text-primary transition-colors">Skills</a>
          </Link>
          <Link href="#projects">
            <a className="hover:text-primary transition-colors">Projects</a>
          </Link>
          <Link href="#contact">
            <a className="hover:text-primary transition-colors">Contact</a>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
