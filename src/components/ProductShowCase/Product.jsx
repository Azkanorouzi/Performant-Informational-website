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
      class={`relative cursor-pointer overflow-hidden scale-100 lg:scale-95 transition-transform product ${customStyles} w-80 sm:w-auto`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: hovered ? 'scale(1)' : '', zIndex: '1' }}
    >
      {children}
      <figcaption class="flex flex-col ">
        <div
          class={`absolute text-center flex justify-center items-center bottom-0 top-0 right-0 left-0 transition-colors bg-opacity-50 bg-forth  ${
            hovered ? 'bg-forth' : ' bg-forth lg:bg-[rgba(255,255,255,0)]'
          }`}
        >
          <div class="py-4 h-full flex flex-col justify-center">
            <div class="flex gap-4 flex-col ">
              <h3
                class={`text-5xl lg:translate-y-10 opacity-100 lg:opacity-70 px-[78px]`}
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
                class={`text-2xl px-10 font-TekoLight lg:translate-x-[100%]`}
                style={{
                  transition: '.5s',
                  transform: hovered ? 'translatex(0)' : '',
                }}
              >
                {description}
              </p>
            </div>
            <button
              class={`text-primary bg-red lg:-translate-x-[200%] hover:text-secondary rotate hover:scale-110 `}
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
export function ProductStatic({ src, alt, title }) {
  return (
    <div class="relative">
      <img src={src} alt={alt} class="lg:max-w-[350px] " />
      <a
        class="bottom-0 right-0 left-0 bg-sixth py-4  lg:py-8 bg-opacity-45 backdrop-blur-sm absolute lg:text-2xl flex justify-center lg:gap-10 gap-5 items-center hover:text-primary transition-colors"
        role={'button'}
      >
        <p> {title} </p>
        <span>&rarr;</span>
      </a>
    </div>
  )
}
