const NavBar = () => {
  return (
    <nav aria-label="Global" className="hidden md:block">
      <div className="flex gap-5">
        <ul className="flex items-center gap-10">
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

        <div className="sm:flex sm:gap-4">
          <button className="bg-white text-black rounded-full text-[15px] pt-2 pb-2 pl-8 pr-8 uppercase font-fraunces hover:bg-grayish-blue hover:text-white">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
