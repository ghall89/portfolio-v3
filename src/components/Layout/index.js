import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { Nav } from './components';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-slate-400 p-10 mb-10 text-white">
      <div className="max-w-6xl	 mx-auto px-8">
        <h1 className="text-3xl ">Graham Hall</h1>
        <h2 className="text-xl">Web Developer</h2>
        <Nav />
      </div>
    </header>
    <div className="max-w-6xl	mx-auto px-8 flex-grow">{children}</div>
    <footer className="bg-slate-400 p-10 mt-10 text-white relative bottom-0">
      <div className="max-w-6xl	mx-auto px-8">
        <div className="flex flex-row space-x-5 text-2xl">
          <Link href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
