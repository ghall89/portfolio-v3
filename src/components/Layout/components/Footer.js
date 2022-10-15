import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLink = ({ href, icon, label }) => (
  <a href={href} target="_blank">
    <div className="group flex flex-nowrap text-blue-400 cursor-pointer">
      <FontAwesomeIcon icon={icon} />
      <span className="pl-2 text-base transition-opacity opacity-0 group-hover:opacity-100">
        /{label}
      </span>
    </div>
  </a>
);

const Footer = () => (
  <footer className="p-10 mt-10">
    <div className="max-w-6xl	mx-auto px-8">
      <div className="flex flex-row space-x-5 text-2xl">
        <SocialLink
          href="https://www.linkedin.com/in/ghalldev/"
          icon={faLinkedin}
          label="ghalldev"
        />
        <SocialLink
          href="https://github.com/ghall89"
          icon={faGithub}
          label="ghall89"
        />
      </div>
    </div>
  </footer>
);

export default Footer;
