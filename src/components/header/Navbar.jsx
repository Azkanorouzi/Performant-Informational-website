import { useState, useEffect } from 'preact/hooks'
import NavToggleBtn from './NavToggleBtn'

export default function StickyNavbar({ children }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [closed, setClosed] = useState(true)
  const [scrollPos, setScrollPos] = useState(window.pageYOffset)
  const isWhite =
    window.location.pathname.length === 1 ||
    window.location.pathname.includes('contacts') ||
    window.location.pathname.includes('about') ||
    window.location.pathname.includes('projects') ||
    window.location.pathname.includes('coringrig') || 
    window.location.pathname.includes('rods') ||
    window.location.pathname.includes('drillingAccessories') ||
    window.location.pathname.includes('coreBarrels') ||
    window.location.pathname.includes('reamingShells')

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset)
      setVisible(prevScrollPos > scrollPos || scrollPos < 400)
      setClosed(true)
      setPrevScrollPos(scrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  useEffect(() => {
    const currentPath = window.location.pathname
    const links = document.querySelectorAll('.nav-link')

    // Setting the active class for the navbar
    links.forEach(function (link) {
      console.log(link.href)
      if (link.getAttribute('href') === (currentPath.slice(0, -1) || '/')) {
        link.classList.add(isWhite ? 'text-secondary' : 'text-sixth')
      }
    })
    // Changing the navbar logo based on the current path
    const navLogo = document.querySelector('.nav-logo')
    const navLogoGrey = document.querySelector('.nav-logo-grey')

    // Hiding the navbar logo based on the current path (there will be two logos, grey - red, the red one is only apparent on index)
    if (isWhite) {
      navLogoGrey.classList.add('hidden')
    } else navLogo.classList.add('hidden')
  }, [window.location.pathname])

  const navbarStyle = {
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
    background:
      window.pageYOffset > 200 && visible && !isWhite
        ? 'rgba(255,255,255,0.3)'
        : window.pageYOffset > 200 && visible
        ? 'rgba(0,0,0,0.3)'
        : 'unset',
    position: 'fixed',
    backdropFilter: scrollPos > 200 ? 'blur(10px)' : 'unset',
    '-webkit-backdrop-filter': scrollPos > 200 ? 'blur(10px)' : 'unset',
    '-moz-backdrop-filter': scrollPos > 200 ? 'blur(10px)' : 'unset',
    '-o-backdrop-filter': scrollPos > 200 ? 'blur(10px)' : 'unset',
    transition: 'background 1s, all .3s',
    top: 0,
    width: '100%',
    zIndex: 60,
    boxShadow: scrollPos > 200 ? '2px 2px 2px rgba(0,0,0,0.3)' : 'unset',
  }

  return (
    <nav
      class={`bg-opacity-30    border-secondary  flex transition-all  p-3 lg:py-0 lg:pr-0 xl:pl-16 lg:pl-5 navbar ${
        isWhite ? 'text-secondary' : 'text-sixth'
      }`}
      style={{ boxShadow: 'inner', ...navbarStyle }}
    >
      {children}
      <NavToggleBtn closed={visible ? closed : true} setClosed={setClosed} />
    </nav>
  )
}
