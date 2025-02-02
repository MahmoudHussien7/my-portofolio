import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="px-8 md:px-16 py-20 max-w-[1440px] mx-auto">
      {/* Top Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-300 pb-8">
        {/* Logo */}
        <div className="md:col-span-1 flex flex-col space-y-4 justify-between">
          <h2 className="text-3xl font-bold italic font-mono">My Portofolio</h2>
          <p>+201026376434</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a href="about" className="hover:text-black">
                About Us
              </a>
            </li>
            <li>
              <a href="contact" className="hover:text-black">
                Services
              </a>
            </li>
            <li>
              <a href="projects" className="hover:text-black">
                Portfolio
              </a>
            </li>
            <li>
              <a href="contact" className="hover:text-black">
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="https://aura-opal.vercel.app/"
                className="hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a
                href="https://www.facebook.com/mahmoud.hessen11/"
                className="hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Mahmouudhussien"
                className="hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mahmoud-hussien-7a5088349/"
                className="hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mahmouudhussien1/"
                className="hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MahmoudHussien7"
                className="hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Footer Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-gray-600 text-sm">
        <p>© 2025. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black">
            Terms of Service
          </a>
          <a href="#" className="hover:text-black">
            Cookies Settings
          </a>
        </div>
        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/mahmoud.hessen11/"
            className="hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/mahmouudhussien1/"
            className="hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://x.com/Mahmouudhussien"
            className="hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmoud-hussien-7a5088349/"
            className="hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/MahmoudHussien7"
            className="hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
