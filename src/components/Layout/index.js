import { Footer, Nav } from './components';

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
    <Footer />
  </div>
);

export default Layout;
