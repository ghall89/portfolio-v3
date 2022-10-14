import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const Nav = () => {
  const router = useRouter();

  const NavItem = ({ href, label }) => {
    const isActivePath = useMemo(() => {
      if (router.pathname === href) {
        return 'decoration-4';
      }
      return 'hover:decoration-4';
    }, [href]);

    return (
      <Link href={href}>
        <span
          className={`underline underline-offset-4 cursor-pointer ${isActivePath}`}
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <nav className="flex flex-row gap-8 mt-8">
      <NavItem href="/" label="Home" />
      <NavItem href="/work" label="My Work" />
      <NavItem href="/blog" label="Blog" />
    </nav>
  );
};

export default Nav;
