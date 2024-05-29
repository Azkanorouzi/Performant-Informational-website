import savGhatehLogo from '../../assets/logo en full.svg'
import { useEffect, useRef, useState } from 'preact/hooks'

export default function NavToggleBtn({ closed, setClosed }) {
  const overLayRef = useRef(null)
  useEffect(() => {
    if (!closed) {
      overLayRef.current.style.display = 'block'
      return
    }
    setTimeout(() => {
      overLayRef.current.style.display = 'none'
    }, 500)
  }, [overLayRef, closed])
  return (
    <>
      <div
        class="w-screen h-[120vh]  hidden lg:fixed top-0 left-0 right-0 bottom-0  transition-opacity -z-20 text-secondary bg-black"
        style={{
          opacity: closed ? '0' : '0.5',
        }}
        ref={overLayRef}
      ></div>
      <div>
        <button
          class="bg-primary p-8 px-10 text-2xl hover:bg-opacity-100 cursor-poitner transition-colors hidden lg:block text-secondary"
          onClick={() => setClosed(false)}
        >
          <i class="bi bi-list "></i>
        </button>
      </div>
      <section
        class={`bg-primary z-10 text-secondary flex fixed right-0 top-0 h-screen overflow-scroll  flex-col p-10 w-[300px] gap-10 transition-transform ${
          closed && 'translate-x-full'
        }`}
      >
        <div class="gap-3 flex  flex-col">
          <img
            src={savGhatehLogo.src}
            alt="SAV GHATEH"
            class="w-[200px] mb-5"
          />
          <p class="text-2xl ">
            We have been processing steel for over 25 years
          </p>
        </div>

        <ContactBarInfo
          text="Call"
          secondaryText="+98 21 443 720 82"
          tertiaryText="+98 912 869 55 23"
          icon="bi bi-telephone"
        />
        <hr />
        <ContactBarInfo
          text="Address"
          secondaryText=""
          tertiaryText="5th floor, No. 2, First Sepehr, Sepehr str., Marzdaran Blvd., Tehran, IRAN"
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
          class={`bg-primary text-4xl fixed p-[1.65rem] top-0 right-[300px] text-white hover:text-primary hover:bg-fifth cursor-pointer transition-colors ${
            closed && 'translate-x-full'
          }`}
          onClick={() => setClosed(true)}
        >
          <i class="bi bi-x-lg text-secondary"></i>
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
