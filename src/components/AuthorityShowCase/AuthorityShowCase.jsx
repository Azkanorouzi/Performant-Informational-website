import { useState } from 'preact/hooks'

export default function AuthorityShowCase() {
  const [textIndex, setTextIndex] = useState(0)
  return (
    <article class="flex justify-center items-center gap-24">
      <div class="flex gap-3 flex-col text-forth border-l-primary">
        <strong
          class={`text-7xl  hover:text-primary  border-l-4 border-transparent pl-5 ${
            textIndex === 0
              ? 'border-l-primary text-primary -translate-x-10 '
              : ''
          }`}
          style={{ transition: '.3s' }}
          role="button"
          onClick={() => setTextIndex(0)}
        >
          01 CONTROL
        </strong>
        <strong
          class={`text-7xl  hover:text-primary border-l-4 border-transparent pl-5 ${
            textIndex === 1
              ? 'border-l-primary text-primary -translate-x-10'
              : ''
          }`}
          style={{ transition: '.3s' }}
          role="button"
          onClick={() => setTextIndex(1)}
        >
          02 MANAGEMENT
        </strong>
        <strong
          class={`text-7xl  hover:text-primary  border-l-4 border-transparent pl-5 ${
            textIndex === 2
              ? 'border-l-primary text-primary -translate-x-10'
              : ''
          }`}
          style={{ transition: '.3s' }}
          role="button"
          onClick={() => setTextIndex(2)}
        >
          03 PROTECT
        </strong>
        <strong
          class={`text-7xl  hover:text-primary border-l-4 border-transparent pl-5 ${
            textIndex === 3
              ? 'border-l-primary text-primary -translate-x-10'
              : ''
          }`}
          style={{ transition: '.3s' }}
          role="button"
          onClick={() => setTextIndex(3)}
        >
          04 INNOVATION
        </strong>
        <strong
          class={`text-7xl  hover:text-primary  border-l-4 border-transparent pl-5 ${
            textIndex === 4
              ? 'border-l-primary text-primary -translate-x-10'
              : ''
          }`}
          style={{ transition: '.3s' }}
          role="button"
          onClick={() => setTextIndex(4)}
        >
          05 STRATEGY
        </strong>
      </div>
      <div class={`w-96 h-96  flex flex-col gap-4 justify-center `}>
        {textIndex === 0 && (
          <div class="flex gap-2 flex-col unBlur text-forth">
            <strong class="text-3xl">Security of supply</strong>
            <p class="mb-2 text-xl font-TekoLight">
              Our in-house team of scientists is constantly fine-tuning the
              adopted methods and processes and guarantees that only top-quality
              powder is obtained. In the case of tungsten in particular.
            </p>
            <strong class="text-3xl"> CAREFUL USE OF NATURAL RESOURCES </strong>
            <p class="text-xl font-TekoLight">
              The input material for the recovery process consists of sintered
              hard tungsten carbide scrap, as well as soft scrap such as
              powders. Whether in electronics, coating technology, or
              high-temperature furnaces, where regular metals reach their
              limits, the refractory metals, alloys
            </p>
          </div>
        )}
        {/* --------------- */}
        {textIndex === 1 && (
          <div class="flex gap-2 flex-col unBlur text-forth">
            <strong class="text-3xl ">
              ALUMINUM VS. STEEL. BENEFITS OF BOTH
            </strong>
            <p class="text-xl font-TekoLight">
              Powder coating is a popular industrial finish that can be used to
              coat a variety of materials, including metals, plastics, and
              ceramics. Powder coating typically works by applying the dry
              powder onto an item using an electric charge. This charge keeps
              the powder coat as tight as possible to the exterior. The powder
              itself will contain resin and pigments for coloring, as well as
              other potential additives that help to reach the desired levels of
              thickness, hardness or shine. The process used to make the powder
              coating stick to the surface starts by pushing the powder through
              a spray gun with compressed air.
            </p>
          </div>
        )}
        {/* --------------- */}
        {textIndex === 2 && (
          <div class="flex gap-2 flex-col unBlur text-forth">
            <strong class="text-3xl">WHEN IS IT USED?</strong>
            <p class="text-xl font-TekoLight">
              {' '}
              The added resistance to rust and corrosion that is provided by
              powder coatings allow the surfaces of steel beams, appliances,
              outdoor furniture, and similarly exposed material to stay clean
              and protected for much longer. There is a wide range of reasons as
              to why using powder coating may be the right option for the
              material you are looking to cover. Because the coating is sealed
              onto the substrate with its electrostatic charge, the coating is
              held much tighter to the substrate.{' '}
            </p>
          </div>
        )}
        {/* --------------- */}
        {textIndex === 3 && (
          <div class="flex gap-2 flex-col unBlur text-forth">
            <strong class="text-3xl">
              THE INDUSTRIAL PROCESSES MOVE TOWARDS AUTOMATION
            </strong>
            <p class="text-xl font-TekoLight">
              Heat resistance, low thermal expansion, high thermal conductivity,
              good corrosion resistance and wear resistance, high density,
              radiation absorption, outstanding purity – these are the decisive
              properties that we perfect depending. When recently asked for him
              advice on making good career choices he said, “When you think
              about where you want to go to work, you should really think about
              what you want to do, not what seems fashionable or prestigious at
              the moment. It’s important, right from the start of your career,
              to do what you enjoy. It should be fun.
            </p>
          </div>
        )}
        {/* --------------- */}
        {textIndex === 4 && (
          <div class="flex gap-2 flex-col unBlur text-forth">
            <strong class="text-3xl">SECURITY OF SUPPLY</strong>
            <p class="text-xl font-TekoLight mb-2">
              Our in-house team of scientists is constantly fine-tuning the
              adopted methods and processes and guarantees that only top-quality
              powder is obtained. In the case of tungsten in particular.
            </p>
            <strong class="text-3xl">CAREFUL USE OF NATURAL RESOURCES</strong>
            <p class="text-xl font-TekoLight">
              The input material for the recovery process consists of sintered
              hard tungsten carbide scrap, as well as soft scrap such as
              powders. Whether in electronics, coating technology, or
              high-temperature furnaces, where regular metals reach their
              limits, the refractory metals, alloys.
            </p>
          </div>
        )}
      </div>
    </article>
  )
}
