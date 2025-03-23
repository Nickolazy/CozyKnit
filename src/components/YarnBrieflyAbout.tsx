import React from 'react'

const YarnBrieflyAbout = () => {
  return (
    <div className="relative bg-white text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl select-none">
      <div className="container py-12 font-playfair text-justify font-medium tracking-wide leading-relaxed
        flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20 xl:gap-32">
        <p>
          Пряжа, с которой я работаю, подходит для любого времени года: она 
          обеспечивает <span className="italic-word">комфорт</span> и <span className="italic-word">лёгкость</span> осенью 
          и весной, оставаясь  <span className="italic-word">мягкой</span> и  <span className="italic-word">удобной</span> в 
          любое время года.
        </p>

        <img src="src/assets/img/static_images/main_page/yarnBrieflyAbout.png" loading="lazy"
          className="max-sm:xl:w-full sm:w-1/2 -ml-9 lg:-mr-16 xl:-mr-20"
        />
      </div>
    </div>
  )
}

export default YarnBrieflyAbout
