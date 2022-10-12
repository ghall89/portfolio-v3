import { Nav } from './components';

const Layout = ({ children }) => (
  <>
    <header className="bg-slate-400 p-10 mb-10 text-white">
      <div className="max-w-6xl	 mx-auto px-8">
        <h1 className="text-3xl ">Graham Hall</h1>
        <h2 className="text-xl">Web Developer</h2>
        <Nav />
      </div>
    </header>
    <div className="max-w-6xl	 mx-auto px-8">{children}</div>
    <footer className="bg-slate-400 p-10 mt-10 text-white">
      <div className="max-w-6xl	 mx-auto px-8">
        <h4>Footer</h4>
      </div>
    </footer>
  </>
);

export default Layout;
