import React, { useState, useEffect } from 'react'

import { ReactComponent as StarIcon } from "../assets/img/icons/star.svg"
import { ReactComponent as FullRectIcon } from "../assets/img/icons/fullRect.svg"
import { ReactComponent as EmptyRectIcon } from "../assets/img/icons/emptyRect.svg"

const YarnAbout = () => {
  const AMOUNT_OF_STARS = 5
  const AMOUNT_OF_INFO_SECTIONS = 3

  const [activeInfoSection, setActiveInfoSection] = useState(0)

  const infoSections = [
    "Каждое изделие изготовлено с любовью и вниманием к деталям, что гарантирует его высокое качество и долговечность. Каждая вещь аккуратно упакована и отправлена с максимальной заботой, чтобы доставить вам радость.",
    "Каждое изделие изготовлено с любовью и вниманием к деталям, что гарантирует его высокое качество и долговечность. Каждая вещь аккуратно упакована и отправлена с максимальной заботой, чтобы доставить вам радость.",
    "Каждое изделие изготовлено с любовью и вниманием к деталям, что гарантирует его высокое качество и долговечность. Каждая вещь аккуратно упакована и отправлена с максимальной заботой, чтобы доставить вам радость."
  ]


  return (
    <div id="yarnAbout" className="bg-beige">
      <div className="container relative h-[calc(100vh-(var(--header-height)))] flex items-center 
        py-12 text-2xl xl:text-3xl 2xl:text-4xl select-none"
      >
        <img src="src/assets/img/static_images/main_page/yarnAbout.png" loading="lazy"
          className="max-lg:w-full h-[calc(100vh-(var(--header-height)))] absolute  max-lg:inset-0 lg:left-0 lg:top-0 
          object-cover max-lg:blur-[2px]"
        />
        <div className="lg:hidden w-full h-[calc(100vh-(var(--header-height)))] absolute inset-0 bg-black opacity-60"></div>

        <div className="max-lg:hidden w-1/2"></div>
        <div className="flex flex-col items-center w-full lg:w-1/2 gap-y-12 z-10">
          <div className="flex gap-x-2.5 text-golden">
            {
              [...Array(AMOUNT_OF_STARS)].map((_, index) => ( <StarIcon key={index} /> ))
            }
          </div>

          <div className="font-playfair text-center font-medium tracking-wide leading-relaxed
            text-lightBeige lg:text-black">
            { 
              infoSections.length >= activeInfoSection ? infoSections[activeInfoSection] : ""
            }
          </div>
          <div className="flex gap-x-1.5 text-lightBeige lg:text-lightGreen">
            {
              [...Array(AMOUNT_OF_INFO_SECTIONS)].map((_, index) => (
                index === activeInfoSection ? <FullRectIcon key={index} /> : <EmptyRectIcon key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default YarnAbout
