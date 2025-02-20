
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold hover-translate">
            Muhammad Sohail
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/CallSohail"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-translate"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadsohail951/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-translate"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:muhammad.sohail951@gmail.com"
              className="hover-translate"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:+33771234567" className="hover-translate">
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://drive.google.com/file/d/1OxmD0QWmGYYe4H7ExnykNhqJviGBDFSu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-translate"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
