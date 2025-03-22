import { useTranslation } from "react-i18next";
import { ReactComponent as SearchIcon } from "../assets/img/icons/search.svg"
import { ReactComponent as MenuIcon } from "../assets/img/icons/menu.svg"

import { Link } from "react-scroll"

const Header = () => {
  const IS_SMOOTH_SCROLL = true
  const IS_HASH_SPY = true
  const DURATION_SCROLL = 500

  const { t } = useTranslation()

  return (
    <div className="h-[var(--header-height)] sticky top-0 bg-milky z-50">
      <div className="container flex justify-between py-5">
        <div className="flex items-center gap-x-10 lg:gap-x-20 select-none">
          <div className="font-logo font-normal text-2xl text-green cursor-pointer">
          <Link 
            to="splash" 
            smooth={IS_SMOOTH_SCROLL} 
            duration={DURATION_SCROLL}
            hashSpy={false}
          >
            CozyKnit
          </Link>
          </div>
          <nav className="max-md:hidden flex gap-x-10 [&>*]:cursor-pointer">
            <Link 
              to="aboutMe" 
              smooth={IS_SMOOTH_SCROLL} 
              duration={DURATION_SCROLL}
              hashSpy={IS_HASH_SPY}
            >
              {t('menu.about')}
            </Link>
            <Link 
              to="collection" 
              smooth={IS_SMOOTH_SCROLL} 
              duration={DURATION_SCROLL}
              hashSpy={IS_HASH_SPY}
            >
              {t('menu.collection')}
            </Link>
            <Link 
              to="yarn" 
              smooth={IS_SMOOTH_SCROLL} 
              duration={DURATION_SCROLL}
              hashSpy={IS_HASH_SPY}
            >
              {t('menu.yarn')}
            </Link>
            <Link 
              to="contact" 
              smooth={IS_SMOOTH_SCROLL} 
              duration={DURATION_SCROLL}
              hashSpy={IS_HASH_SPY}
            >
              {t('menu.contact')}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-x-8 text-green">
          <SearchIcon className="btn-icon" />
          <MenuIcon className="md:hidden btn-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
