import case1 from '../../assets/cases1.png'
import { useState } from 'preact/hooks'

export default function Product({ title, description, children }) {
  const [hovered, setHovered] = useState(false)

  return (
    <figure
      class={` relative cursor-pointer overflow-hidden scale-95 transition-transform ${
        hovered && 'scale-100'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <figcaption class="flex flex-col ">
        <div class="absolute text-center flex justify-center items-center bottom-0 top-0 right-0 left-0 ">
          <div class="py-4">
            <div class="flex gap-4 flex-col">
              <h3
                class={`text-5xl translate-y-10 opacity-70  ${
                  hovered && 'opacity-100 translate-y-0'
                }`}
                style={{ transition: '.5s' }}
              >
                {title}
              </h3>
              <p
                class={`text-3xl font-TekoLight translate-x-[100%]  ${
                  hovered && 'translate-x-0 '
                }`}
                style={{ transition: '.5s' }}
              >
                {description}
              </p>
            </div>
            <button
              class={`text-tertiary bg-red -translate-x-[200%]`}
              onClick={() => alert('hi')}
              style={{ transition: '.5s' }}
            >
              <span>Learn More</span> <span> &rarr; </span>
            </button>
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
