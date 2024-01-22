import Info from '../ui/Info.astro'
import Logo from '../ui/Logo.astro'
import { useState } from 'preact/hooks'

export default function NavToggleBtn({ closed, setClosed }) {
  return (
    <>
      <div>
        <button
          class="bg-primary p-8 px-10 text-2xl border-white border-l-2 bg-opacity-50 hover:bg-opacity-100 cursor-poitner transition-colors hidden lg:block"
          onClick={() => setClosed(false)}
        >
          <i class="bi bi-list "></i>
        </button>
      </div>
      <section
        class={`bg-tertiary z-10 text-secondary flex fixed justify-center right-0 top-0  flex-col p-10 w-[300px] gap-10 transition-transform ${
          closed && 'translate-x-full'
        }`}
      >
        <div class="gap-3 flex  flex-col">
          <i class="bi bi-gem text-5xl gap-4 text-secondary"></i>
          <h2 class="text-4xl">LANTAN</h2>
          <p class="text-2xl ">
            We have been processing steel for over 25 years
          </p>
        </div>

        <ContactBarInfo
          text="Call"
          secondaryText="+021 44456700"
          tertiaryText="+98 9129959510"
          icon="bi bi-telephone"
        />
        <hr />
        <ContactBarInfo
          text="Address"
          secondaryText="22 Division st, Ny 10562 IR"
          tertiaryText="25 Division st, Ny 10002 USA"
          icon="bi bi-geo-alt"
        />
        <hr />
        <ContactBarInfo
          text="Email"
          secondaryText="test1@gmail.com"
          tertiaryText="test2@gmail.com"
          icon="bi bi-envelope"
        />
        <button
          class={`bg-primary text-4xl fixed p-[1.65rem] top-0 right-[300px] text-white hover:text-primary hover:bg-secondary cursor-pointer transition-colors ${
            closed && 'translate-x-full'
          }`}
          onClick={() => setClosed(true)}
        >
          <i class="bi bi-x-lg"></i>
        </button>
      </section>
    </>
  )
}
function ContactBarInfo({ text, secondaryText, tertiaryText, icon }) {
  return (
    <div class="font-TekoLight text-3xl">
      <div class="flex gap-4 mb-3">
        <i class={icon}></i>

        <h3>{text}</h3>
      </div>

      <span class={'text-sm block font-mono mb-3'}>{secondaryText}</span>
      <span class={'text-sm block font-mono'}>{tertiaryText}</span>
    </div>
  )
}
