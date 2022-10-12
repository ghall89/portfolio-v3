import { Nav } from './components';

const Layout = ({ children }) => (
  <>
    <header className="bg-slate-400 p-10 mb-10 text-white">
      <h1 className="text-3xl ">Graham Hall</h1>
      <h2 className="text-xl">Web Developer</h2>
      <Nav />
    </header>
    <div className="container mx-auto">{children}</div>
    <footer className="bg-slate-400 p-10 mt-10 text-white">
      <h4>Footer</h4>
    </footer>
  </>
);

export default Layout;
