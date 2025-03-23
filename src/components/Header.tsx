import { ReactComponent as SearchIcon } from "../assets/img/icons/search.svg"
import { ReactComponent as MenuIcon } from "../assets/img/icons/menu.svg"

import { Link } from "react-scroll"

const Header = () => {
  const IS_SMOOTH_SCROLL = true
  const IS_HASH_SPY = true
  const HEADER_HEIGHT = 72
  const DURATION_SCROLL = 500

  return (
    <div className="h-[var(--header-height)] sticky top-0 bg-milky z-50">
      <div className="container flex justify-between py-5">
        <div className="flex items-center gap-x-10 lg:gap-x-20 font-normal select-none">
          <div className="font-logo text-2xl text-green cursor-pointer">
          <Link 
            to="splash" 
            smooth={IS_SMOOTH_SCROLL} 
            duration={DURATION_SCROLL}
            hashSpy={false}
            offset={-HEADER_HEIGHT}
          >
            CozyKnit
          </Link>
          </div>
          <nav className="max-md:hidden flex gap-x-10 text-xl [&>*]:cursor-pointer">
            <Link 
              to="aboutMe" 
              smooth={IS_SMOOTH_SCROLL} 
              duration={DURATION_SCROLL}
              hashSpy={IS_HASH_SPY}
              offset={-HEADER_HEIGHT}
            >
              Обо мне
            </Link>
            <Link 
              to="collection" 
              smooth={IS_SMOOTH_SCROLL} 
              duration={DURATION_SCROLL}
              hashSpy={IS_HASH_SPY}
              offset={-HEADER_HEIGHT}
            >
              Коллекция
            </Link>
            <Link 
              to="yarn" 
              smooth={IS_SMOOTH_SCROLL} 
              duration={DURATION_SCROLL}
              hashSpy={IS_HASH_SPY}
              offset={-HEADER_HEIGHT}
            >
              О пряже
            </Link>
            <Link 
              to="contact" 
              smooth={IS_SMOOTH_SCROLL} 
              duration={DURATION_SCROLL}
              hashSpy={IS_HASH_SPY}
            >
              Напишите мне
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
