import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://discordapp.com/users/arshuix", icon: <FaDiscord /> },
  { href: "https://in.linkedin.com/in/arsh-singhal-316450209", icon: <FaLinkedin /> },
  { href: "https://github.com/uixarsh", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © Made with Love by uixarsh.
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
