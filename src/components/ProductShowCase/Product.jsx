import case1 from '../../assets/cases1.png'
import { useState, useEffect } from 'preact/hooks'

export default function Product({
  title,
  description,
  children,
  customStyles,
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <figure
      class={`relative cursor-pointer overflow-hidden scale-95 transition-transform product ${customStyles} w-80 sm:w-auto`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: hovered ? 'scale(1)' : '', zIndex: '1' }}
    >
      {children}
      <figcaption class="flex flex-col ">
        <div
          class={`absolute text-center flex justify-center items-center bottom-0 top-0 right-0 left-0 transition-colors bg-opacity-50 ${
            hovered ? 'bg-forth' : ''
          }`}
        >
          <div class="py-4 h-full flex flex-col justify-center">
            <div class="flex gap-4 flex-col ">
              <h3
                class={`text-5xl translate-y-10 opacity-70 px-[78px] `}
                style={{
                  transition: '.5s',
                  opacity: hovered ? '1' : '.5',
                  transform: hovered ? 'translateY(0)' : '',
                  letterSpacing: hovered ? '10px' : '0',
                }}
              >
                {title}
              </h3>
              <p
                class={`text-2xl px-10 font-TekoLight translate-x-[100%]`}
                style={{
                  transition: '.5s',
                  transform: hovered ? 'translatex(0)' : '',
                }}
              >
                {description}
              </p>
            </div>
            <button
              class={`text-primary bg-red -translate-x-[200%] hover:text-secondary rotate hover:scale-110 `}
              style={{
                transition: '.5s',
                transform: hovered ? 'translatex(0)' : '',
              }}
            >
              <span>Learn More</span> <span> &rarr; </span>
            </button>
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
