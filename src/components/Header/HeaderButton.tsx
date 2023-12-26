const HeaderButton = ({
  handleOpenHumbugerMenu,
}: {
  handleOpenHumbugerMenu: () => void;
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="block md:hidden">
        <button
          className="rounded bg-transparent p-2 text-gray-600 transition hover:text-gray-600/75"
          onClick={handleOpenHumbugerMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white hover:text-gray-400"
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
