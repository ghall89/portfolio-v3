import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLink = ({ href, icon, label }) => (
  <Link href={href}>
    <div className="w-6 overflow-hidden	hover:w-fit transition-width flex flex-nowrap">
      <FontAwesomeIcon icon={icon} />
      <span className="pl-2 text-base">/{label}</span>
    </div>
  </Link>
);

const Footer = () => (
  <footer className="p-10 mt-10">
    <div className="max-w-6xl	mx-auto px-8">
      <div className="flex flex-row space-x-5 text-2xl">
        <SocialLink href="#" icon={faLinkedin} label="ghalldev" />
        <SocialLink href="#" icon={faGithub} label="ghall89" />
      </div>
    </div>
  </footer>
);

export default Footer;
