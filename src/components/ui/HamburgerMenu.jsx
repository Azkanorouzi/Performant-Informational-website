import NavbarLink from '../header/NavbarLink.astro'
import Info from '../ui/Info.astro'
import Logo from '../ui/Logo.astro'
import { useEffect, useRef, useState } from 'preact/hooks'

export default function HamburgerMenu() {
  const overLayRef = useRef(null)
  const [closed, setClosed] = useState(true)

  return (
    <div class="lg:hidden overflow-scroll ">
      <div
        class="w-screen h-[120vh]  hidden lg:fixed top-0 left-0 right-0 bottom-0  transition-opacity -z-20"
        style={{
          opacity: closed ? '0' : '1',
        }}
        ref={overLayRef}
      ></div>
      <div></div>
      <section
        class={`bg-[#0C0C0C] opacity-90 text-secondary flex absolute justify-center right-0 top-0  flex-col p-10 w-[100vw] gap-5 landscape:gap-3 sm:gap-20 h-[110vh] landscape:justify-center transition-transform ${
          closed && 'translate-x-[100%]'
        }`}
      >
        <div class="flex  flex-col text-center text-4xl md:text-5xl ">
          <ul class="flex flex-col gap-3 landscape:gap-5 landscape:flex-row landscape:text-3xl">
            <li class="home-link">
              {' '}
              <a href="/" class="nav-link">
                {' '}
                Home{' '}
              </a>
            </li>
            <li>
              {' '}
              <a href="/products"> Products </a>
            </li>
            <li>
              {' '}
              <a href="#"> Services </a>
            </li>
            <li>
              {' '}
              <a href="#"> Projects </a>
            </li>
            <li>
              {' '}
              <a href="#"> About us </a>
            </li>
            <li>
              {' '}
              <a href="#"> Contacts </a>
            </li>
          </ul>
        </div>
        <hr />
        <div class="flex justify-center items-center text-center flex-col landscape:flex-row gap-5 hamburgermenu-contacts">
          <div class="flex gap-3 justify-center flex-wrap  landscape:flex-nowrap">
            <ContactBarInfo
              text="Call"
              secondaryText="+021 44456700"
              tertiaryText="+98 9129959510"
              icon="bi bi-telephone"
            />
            <ContactBarInfo
              text="Email"
              secondaryText="test1@gmail.com"
              tertiaryText="test2@gmail.com"
              icon="bi bi-envelope"
            />
          </div>
          <ContactBarInfo
            text="Address"
            secondaryText="22 Division st, Ny 10562 IR"
            tertiaryText="25 Division st, Ny 10002 USA"
            icon="bi bi-geo-alt"
          />
        </div>
      </section>
      <button
        class={` text-4xl absolute p-3 md:p-[1.65rem] top-0    cursor-pointer transition-colors right-0  `}
        onClick={() => setClosed((closed) => !closed)}
        style={{
          animation: closed
            ? '1s rotateFadeOut forwards'
            : '1s rotateFadeIn forwards',
          transformOrigin: 'center',
        }}
      >
        <i
          class={`bi ${closed ? 'bi-list' : 'bi-x-lg'}  text-4xl`}
          role="button"
        ></i>
      </button>
    </div>
  )
}
function ContactBarInfo({ text, secondaryText, tertiaryText, icon }) {
  return (
    <div class="font-TekoLight text-xl lg:text-3xl ">
      <div class="flex gap-2 lg:gap-4 mb-3 justify-center">
        <i class={icon}></i>

        <h3>{text}</h3>
      </div>

      <span class={'text-sm block font-mono lg:mb-3'}>{secondaryText}</span>
      <span class={'text-sm block font-mono'}>{tertiaryText}</span>
    </div>
  )
}
