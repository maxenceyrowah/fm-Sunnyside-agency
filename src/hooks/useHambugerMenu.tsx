import { useState } from "react";

const useHambugerMenu = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleOpenHumbugerMenu = () => setIsOpen((prevState) => !prevState);

  return { isOpen, handleOpenHumbugerMenu };
};

export default useHambugerMenu;
