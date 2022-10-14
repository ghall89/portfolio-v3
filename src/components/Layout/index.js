import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { Nav } from './components';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <header className="p-10 mb-10 border-b w-full bg-slate-50">
      <div className="max-w-6xl	mx-auto px-8 flex flex-col md:flex-row">
        <div>
          <h1 className="text-3xl text-slate-600">Graham Hall</h1>
          <h2 className="text-xl text-slate-500">Web Developer</h2>
        </div>
        <div className="flex-grow" />
        <Nav />
      </div>
    </header>
    <div className="max-w-6xl	mx-auto px-8 flex-grow">{children}</div>
    <footer className="p-10 mt-10">
      <div className="max-w-6xl	mx-auto px-8">
        <div className="flex flex-row space-x-5 text-2xl">
          <Link href="#">
            <div className="w-6 overflow-hidden	hover:w-fit transition-width flex flex-nowrap">
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="pl-2 text-base">/ghalldev</span>
            </div>
          </Link>
          <Link href="#">
            <div className="w-6 overflow-hidden	hover:w-fit transition-width flex flex-nowrap">
              <FontAwesomeIcon icon={faGithub} />
              <span className="pl-2 text-base">/ghall89</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
