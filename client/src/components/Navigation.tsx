import { Link as ScrollLink } from "react-scroll";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { to: "experience", label: "Experience" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  const handleDownloadResume = () => {
    const resumePath = '/Sudarshan_Agrawal_Resume.pdf';
    console.log('Attempting to download from:', resumePath);
    
    // Direct download approach
    const link = document.createElement('a');
    link.href = resumePath;
    link.setAttribute('download', 'Sudarshan_Agrawal_Resume.pdf');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed w-full z-50 top-0 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={handleDownloadResume}
          className="flex items-center gap-2 text-xl font-bold cursor-pointer hover:text-primary transition-colors"
        >
          <Download size={20} />
          Resume
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {item.label}
            </ScrollLink>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-muted rounded-md transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="hover:text-primary transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
