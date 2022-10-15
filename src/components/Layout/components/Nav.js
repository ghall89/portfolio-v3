import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const Nav = () => {
  const router = useRouter();

  const NavItem = ({ href, label }) => {
    const isActivePath = useMemo(() => {
      if (router.pathname === href) {
        return 'border-sky-400';
      }
      return 'hover:border-sky-300';
    }, [href]);

    return (
      <Link href={href}>
        <span
          className={`border-b-4 underline-offset-4 cursor-pointer transition-colors ${isActivePath}`}
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <nav className="flex flex-row gap-8 mt-8 justify-self-end">
      <NavItem href="/" label="Home" />
      <NavItem href="/projects" label="Projects" />
      <NavItem href="/blog" label="Blog" />
    </nav>
  );
};

export default Nav;
