const NavBar = () => {
  return (
    <nav aria-label="Global" className="hidden md:block">
      <ul className="flex items-center gap-6">
        <li>
          <a className="text-white transition hover:text-white/75" href="/">
            About
          </a>
        </li>

        <li>
          <a className="text-white transition hover:text-white/75" href="/">
            Services
          </a>
        </li>

        <li>
          <a className="text-white transition hover:text-white/75" href="/">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
