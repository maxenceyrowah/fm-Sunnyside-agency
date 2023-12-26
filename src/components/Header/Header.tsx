import HeaderButton from "./HeaderButton";
import Logo from "./Logo";
import NavBar from "./NavBar";

import ArrowBack from "../../assets/images/icon-arrow-down.svg";

const Header = () => (
  <header className="bg-agency-desktop h-screen bg-no-repeat bg-cover bg-center">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <Logo />
        </div>

        <div className="md:flex md:items-center md:gap-12">
          <NavBar />
          <HeaderButton />
        </div>
      </div>
    </div>

    <div className="flex items-center flex-col mt-40">
      <div className="text-6xl text-white font-fraunces uppercase tracking-widest">
        We are creatives
      </div>
      <div className="mt-10">
        <img src={ArrowBack} alt="" />
      </div>
    </div>
  </header>
);

export default Header;
