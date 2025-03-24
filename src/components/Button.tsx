import React, { useState, useEffect } from "react"

interface ButtonProps {
  text: string
  icon: string
}

const Button: React.FC<ButtonProps> = ({ text, icon }) => {
  const [Icon, setIcon] = useState<React.FC | null>(null)

  useEffect(() => {
    import(`../assets/img/icons/${icon}.svg`)
      .then((module) => setIcon(() => module.ReactComponent))
      .catch((err) => console.error("Ошибка загрузки иконки:", err))
  }, [icon])

  return (
    <button type="button" className="inline-flex items-center gap-x-5 font-playfair font-medium text-base lg:text-lg 
      text-white select-none px-5 py-2.5 lg:py-4 max-lg:border max-lg:border-white bg-green rounded-full 
      cursor-pointer active:scale-[0.98] transition duration-100"
    >
      <p className="max-w-40 truncate">
        {text}
      </p>

      {Icon && <Icon />}
    </button>
  )
}

export default Button
