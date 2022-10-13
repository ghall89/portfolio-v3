import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const Nav = () => {
  const router = useRouter();

  const NavItem = ({ href, label }) => {
    const isActivePath = useMemo(() => {
      if (router.pathname === href) {
        return 'underline underline-offset-4 decoration-4 cursor-pointer';
      }
      return 'underline underline-offset-4 hover:decoration-4 cursor-pointer';
    }, [href]);

    return (
      <Link href={href}>
        <span className={isActivePath}>{label}</span>
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
