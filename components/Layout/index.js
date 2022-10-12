import Link from 'next/link';

const Layout = ({ children }) => (
  <div className="container mx-auto">
    <header>
      <h1>Header</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
    {children}
    <footer>
      <h4>Footer</h4>
    </footer>
  </div>
);

export default Layout;
