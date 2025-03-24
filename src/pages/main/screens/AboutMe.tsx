const AboutMe = () => {
  return (
    <div id="aboutMe" className="bg-white text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl select-none">
      <div className="container py-12 space-y-10 lg:space-y-16 font-playfair text-justify font-medium tracking-wide leading-relaxed">
        <div className="flex flex-col lg:flex-row max-lg:items-center gap-x-20">
          <p>
            Вдохновленная традициями моей бабушки, я начала вязать в 4 года. 
            С тех пор вязание стало моим любимым занятием. Каждое изделие я 
            создаю с <span className="italic-word">душой</span> и <span className="italic-word">любовью</span>, 
            используя вязальную машину, спицы и крючок. 
          </p>

          <img src="src/assets/img/static_images/main_page/me.png" loading="lazy" 
            className="mt-10 sm:w-1/2 md:w-1/3 max-sm:lg:w-full"
          />
        </div>

        <div className="flex gap-x-40">
          <img src="src/assets/img/static_images/main_page/cozyKnitting.png" loading="lazy" 
            className="hidden lg:block -mt-40"
          />

          <p className="text-right">
            Я вкладываю в каждую вещь частичку себя, чтобы она дарила 
            вам <span className="italic-word">уют</span> и <span className="italic-word">радость</span> в 
            любое время года.
          </p>
        </div>
      </div>

    </div>
  )
}

export default AboutMe
