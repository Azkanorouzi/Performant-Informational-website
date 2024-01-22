import { useEffect } from 'preact/hooks'
import Product from './Product'

export default function Creation({ children }) {
  return (
    <>
      <div class="text-4xl flex-col flex gap-10">
        <div class="flex gap-5 flex-col justify-center items-center text-center">
          <h2 class=" text-primary text-3xl font-TekoLight">WHAT WE OFFER</h2>
          <hr class="w-44 text-primary"></hr>
          <p class="font-TekoMedium px-60">
            WE HAVE BEEN PROCESSING STEEL FOR OVER 25 YEARS
          </p>
        </div>
        {/* Products */}
        <section class="flex  justify-center gap-10 width-4xl transition-transform ">
          {children}
        </section>
      </div>
      <div class="flex"></div>
    </>
  )
}
