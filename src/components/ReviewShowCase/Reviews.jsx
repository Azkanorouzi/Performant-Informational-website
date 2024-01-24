import { useState } from 'preact/hooks'

const MAX = 1
const MIN = 0
export default function Reviews() {
  const [index, setIndex] = useState(0)
  return (
    <div class="bg-forth bg-opacity-30 backdrop-blur-lg w-[800px] flex flex-col gap-10 justify-center text-left p-14 translate-x-0">
      <div class="flex gap-5 flex-col ">
        <h2 class=" text-primary text-3xl font-TekoLight">TESTIMONIAL</h2>
        <hr class="w-44 text-primary"></hr>
        <p class="font-TekoMedium text-3xl">WHAT OUR CUSTOMERS SAY</p>
      </div>
      <div class="flex ">
        <div
          class={`gap-10 flex flex-col transition-all ${
            index === 0
              ? 'opacity-100 translate-x-0'
              : 'translate-x-16 opacity-0'
          }`}
        >
          <p class="text-xl font-TekoMedium">
            1 These wire forms can be crafted from a variety of materials,
            including plain, stainless or galvanized steel to meet your exact
            performance needs. Using automated manufacturing equipment, Marlin
            Steel can produce consistent, reliable results.
          </p>
          <div>
            <strong class="text-2xl">Top Regan</strong>
            <p>Client of agency</p>
          </div>
        </div>
        <div
          class={`gap-10 flex flex-col absolute transition-all ${
            index === 1
              ? 'opacity-100 -translate-x-0'
              : '-translate-x-16 opacity-0'
          } `}
        >
          <p class="text-xl font-TekoMedium">
            2 These wire forms can be crafted from a variety of materials,
            including plain, stainless or galvanized steel to meet your exact
            performance needs. Using automated manufacturing equipment, Marlin
            Steel can produce consistent, reliable results.
          </p>
          <div>
            <strong class="text-2xl">Top Regan</strong>
            <p>Client of agency</p>
          </div>
        </div>
      </div>
      <div class="text-primary text-5xl flex ">
        <button
          class={`transition-transform ${
            index !== MIN ? 'hover:-translate-x-1 hover:text-secondary' : ''
          } `}
          onClick={() => setIndex((i) => (i === MIN ? i : i - 1))}
          disabled={index === MIN}
          style={{
            opacity: index === MIN ? 0.6 : 1,
          }}
        >
          &larr;
        </button>
        <button
          class={`transition-transform ${
            index !== MAX ? 'hover:translate-x-1 hover:text-secondary' : ''
          } `}
          onClick={() => setIndex((i) => (i === MAX ? i : i + 1))}
          disabled={index === MAX}
          style={{
            opacity: index === MAX ? 0.6 : 1,
          }}
        >
          &rarr;
        </button>
      </div>
    </div>
  )
}
