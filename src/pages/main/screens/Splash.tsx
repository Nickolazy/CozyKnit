import { Link } from "react-scroll"

import Button from "@/components/Button"

import  { 
  IS_SMOOTH_SCROLL, 
  IS_HASH_SPY,
  HEADER_HEIGHT,
  DURATION_SCROLL
} from "@/constants"

const Splash = () => {
  return (
    <div id="splash" className="h-[calc(100vh-(var(--header-height)))]">
      <div className="relative bg-beige h-[calc(100vh-(var(--header-height)))] lg:h-[calc(80vh-(var(--header-height)))]">
        <div className="container relative h-full flex max-sm:justify-center items-center font-playfair select-none"> 

          <div className="flex flex-col items-center sm:items-end gap-y-5 z-10 text-lightBeige lg:text-green">
            <p className="font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-wide lg:tracking-normal">
              Ручная работа с 
              <br /> 
              душой и теплом
            </p>
            <p className="uppercase font-bold italic text-base lg:text-xl">
              С любовью для ваших близких
            </p>
          </div>

          
          <img src="src/assets/img/static_images/main_page/knittedHeart.png" loading="lazy" 
            className="max-lg:w-full h-[calc(100vh-(var(--header-height)))] absolute max-lg:inset-0 lg:right-0 lg:top-0 
              object-cover max-lg:blur-[2px]"
          />
          <div className="lg:hidden w-full h-[calc(100vh-(var(--header-height)))] absolute inset-0 bg-black opacity-60"></div>

          <div className="absolute max-lg:right-9 bottom-40 lg:bottom-0 lg:translate-y-1/2 z-10">
            <Link
              to="collection" 
              smooth={IS_SMOOTH_SCROLL} 
              duration={DURATION_SCROLL}
              hashSpy={IS_HASH_SPY}
              offset={-HEADER_HEIGHT}
            >
              <Button text="Откройте уют" icon="arrow" />
            </Link>
          </div>

        </div>
      </div>

      <div className="hidden lg:block w-full h-1/5 absolute bottom-0 bg-darkBeige -z-10"></div>
    </div>
  )
}

export default Splash
