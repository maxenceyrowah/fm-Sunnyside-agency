const HeaderButton = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="sm:flex sm:gap-4">
        <button className="bg-white text-black rounded-full pt-2 pb-2 pl-8 pr-8 uppercase font-fraunces">
          Contact
        </button>
      </div>

      <div className="block md:hidden">
        <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeaderButton;
