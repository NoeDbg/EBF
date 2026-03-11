const links = [
  ['About', '#about'],
  ['Team', '#team'],
  ['Events', '#events'],
  ['Fund Tracker', '#fund-tracker'],
  ['Newsletter', '#newsletter'],
  ['Contact', '#contact']
] as const;

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <p className="logo">EBF</p>
        <nav>
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
