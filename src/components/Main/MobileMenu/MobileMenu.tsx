const MobileMenu = ({ isOpen }: { isOpen: Boolean }) => {
  return (
    <>
      {isOpen ? (
        <div className="flex flex-col gap-5 bg-white p-[50px] m-auto text-center">
          <ul className="flex flex-col gap-10">
            <li>
              <a className="text-dark-grayish" href="/">
                About
              </a>
            </li>

            <li>
              <a className="text-dark-grayish" href="/">
                Services
              </a>
            </li>

            <li>
              <a className="text-dark-grayish" href="/">
                Projects
              </a>
            </li>
          </ul>

          <div className="">
            <button className="bg-primary-yellow text-black rounded-full text-[15px] pt-2 pb-2 pl-8 pr-8 uppercase font-fraunces hover:bg-grayish-blue hover:text-white">
              Contact
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
