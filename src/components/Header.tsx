import { useTranslation } from "react-i18next"

import { ReactComponent as SearchIcon } from "../assets/img/icons/search.svg";
import { ReactComponent as MenuIcon } from "../assets/img/icons/menu.svg";

const Header = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-milky">
      <div className="container flex justify-between px-8 py-5">
        <div className="flex items-center gap-x-10 select-none">
          <div className="font-logo font-normal text-2xl text-green">
            CozyKnit
          </div>
          <div className="max-md:hidden flex gap-x-10">
            <a href="#about">{ t('menu.about') }</a>
            <a href="#collection">{ t('menu.collection') }</a>
            <a href="#yarn">{ t('menu.yarn') }</a>
            <a href="#contact">{ t('menu.contact') }</a>
          </div>
        </div>

        <div className="flex items-center gap-x-8 text-green">
          <SearchIcon />
          <MenuIcon className="md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Header;
