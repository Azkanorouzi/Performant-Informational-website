import Product from './Product'
import Gallery from '../ui/Gallery'
import { useEffect, useState } from 'preact/hooks'

export default function Products() {
  const [index, setIndex] = useState(0)

  function goNext(max) {
    setIndex((index) => {
      if (index >= max - 1) return 0
      return index + 1
    })
  }
  function goBack(min) {
    setIndex((index) => {
      if (index <= min) return 2
      return index - 1
    })
  }
  return (
    <>
      <div class="flex gap-11 lg:gap-2 flex-row lg:flex-col lg:w-[1200px] xl:text-left text-center xl:items-start  items-center ">
        <h2 class=" lg:text-6xl font-oswald text-5xl ">Services</h2>

        <p class="font-oswaldLight  text-lg  w-96  xl:text-left text-center hidden lg:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          reiciendis, aliquid vero blanditiis eos
        </p>
        <div class="gap-2 flex lg:hidden z-50">
          <button
            class="border border-secondary w-12 h-12 text-xl flex justify-center items-center hover:bg-secondary hover:text-primary "
            onClick={() => goBack(0)}
          >
            <span class=" h-6">&larr;</span>
          </button>
          <button
            class="border border-secondary w-12 h-12 text-xl flex justify-center items-center hover:bg-secondary hover:text-primary"
            onClick={() => goNext(3)}
          >
            <span class=" h-6">&rarr;</span>
          </button>
        </div>
      </div>
      <section class="flex  justify-center  width-4xl transition-transform overflow-scroll z-50">
        <div class="flex flex-col justify-center gap-8 items-center">
          <div class="flex  gap-5 flex-col md:flex-row products flex-wrap justify-center">
            <Product
              title={'MACHINING STEEL'}
              description={
                'Metal elements that need to be shaped must be machined in an adquate way'
              }
              customStyles={`unBlur lg:flex  ${
                index === 0 ? 'flex' : 'hidden lg:flex'
              }`}
            >
              <div class="img1"></div>
            </Product>
            <Product
              title={'Rhino'}
              description={
                'Through our years of experience, we have also learned that while each chanel has'
              }
              customStyles={`unBlur  lg:flex ${
                index === 1 ? 'flex' : 'hidden lg:flex'
              }`}
            >
              <div class="img2"></div>
            </Product>
            <div class="flex gap-10 flex-row">
              <Product
                title={'METALS MATERIALS'}
                description={
                  'On our way to cooporate with the customer we offer int field of building a product'
                }
                customStyles={`unBlur lg:flex ${
                  index === 2 ? 'flex' : 'hidden lg:flex'
                }`}
              >
                <div class="img3"></div>
              </Product>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
