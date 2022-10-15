import Link from 'next/link';

const H1 = ({ children, className }) => (
  <h1 className={`font-medium text-4xl ${className}`}>{children}</h1>
);
const H2 = ({ children, className }) => (
  <h2 className={`font-semibold text-3xl  ${className}`}>{children}</h2>
);
const H3 = ({ children, className }) => (
  <h3 className={`font-bold text-2xl  ${className}`}>{children}</h3>
);
const H4 = ({ children, className }) => (
  <h4 className={`font-bold text-xl ${className}`}>{children}</h4>
);

const P = ({ children, className }) => (
  <p className={`my-5 ${className}`}>{children}</p>
);

const InlineLink = ({ href, target, children }) => (
  <Link href={href} target={target}>
    <span className="text-sky-500 underline hover:text-sky-800 cursor-pointer">
      {children}
    </span>
  </Link>
);

const LinkButton = ({ onClick, children }) => (
  <button
    className="text-sky-500 underline hover:text-sky-800 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </button>
);

export { H1, H2, H3, H4, P, InlineLink, LinkButton };
