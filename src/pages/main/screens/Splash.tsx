const Splash = () => {
  return (
    <>
      <div className="relative bg-beige h-[calc(100vh-(var(--header-height)))]">
        <div className="container h-full flex items-center font-playfair"> 
          <p className="font-semibold text-6xl">
            Ручная работа с душой и теплом
          </p>
          <p className="uppercase italic text-xl">
            С любовью для ваших близких
          </p>
        </div>
      </div>
      <div className="w-full h-1/5 absolute bottom-0 bg-darkBeige"> </div>
    </>
  )
}

export default Splash
