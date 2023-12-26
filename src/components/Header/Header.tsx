import HeaderButton from "./HeaderButton";
import Logo from "./Logo";
import NavBar from "./NavBar";

import { ArrowDown } from "../../configs/icons";
import useHambugerMenu from "../../hooks/useHambugerMenu";
import { HumbugerView } from "../Main/MobileMenu";

const Header = () => {
  const { handleOpenHumbugerMenu, isOpen } = useHambugerMenu();

  return (
    <header className="md:bg-agency-desktop bg-agency-mobile md:h-screen h-full bg-no-repeat bg-cover bg-center">
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <NavBar />
            <HeaderButton {...{ handleOpenHumbugerMenu }} />
          </div>
        </div>
      </section>

      <HumbugerView {...{ isOpen }} />

      <section className="flex items-center flex-col md:mt-40 mt-10">
        <div className="md:text-6xl text-center text-4xl text-white font-fraunces uppercase tracking-widest">
          We are creatives
        </div>
        <div className="md:mt-10 md:mb-0 mt-[15px] mb-60">
          <ArrowDown />
        </div>
      </section>
    </header>
  );
};

export default Header;
