import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex justify-left space-x-6 mt-8">
      <a
        href="https://www.linkedin.com/in/julio-duran-3ab5871b4"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-400 hover:text-blue-600 transition-colors"
      >
        <FaLinkedin size={22} />
      </a>
      <a
        href="https://github.com/duranjulio2004"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="mailto:duranjulio2004@gmail.com"
        aria-label="Email"
        className="text-gray-400 hover:text-red-600 transition-colors"
      >
        <FaEnvelope size={22} />
      </a>
    </div>
  );
}
