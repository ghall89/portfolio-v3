import Link from 'next/link';

const NavItem = ({ href, label }) => (
  <Link href={href}>
    <span className="underline underline-offset-4 hover:decoration-4 cursor-pointer">
      {label}
    </span>
  </Link>
);

const Nav = () => (
  <nav className="flex flex-row gap-8 mt-8">
    <NavItem href="/" label="Home" />
    <NavItem href="/blog" label="Blog" />
  </nav>
);

export default Nav;
