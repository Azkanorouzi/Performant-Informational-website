import { useState, useEffect } from 'preact/hooks'
import NavToggleBtn from './NavToggleBtn'

export default function StickyNavbar({ children }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [closed, setClosed] = useState(true)
  const [scrollPos, setScrollPos] = useState(window.pageYOffset)

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
    links.forEach(function (link) {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active')
      }
    })
  }, [window.location.pathname])

  const navbarStyle = {
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
    background:
      window.pageYOffset > 400 && visible ? 'rgba(0,0,0,0.3)' : 'unset',
    position: 'fixed',
    backdropFilter: scrollPos > 400 ? 'blur(10px)' : 'unset',
    transition: 'background 1s, all .3s',
    top: 0,
    width: '100%',
    zIndex: 10,
    boxShadow: scrollPos > 400 ? '2px 2px 2px rgba(0,0,0,0.3)' : 'unset',
  }

  return (
    <nav
      class="pl-6 bg-opacity-30    border-secondary text-secondary flex transition-all z-40"
      style={{ boxShadow: 'inner', ...navbarStyle }}
    >
      {children}
      <NavToggleBtn closed={visible ? closed : true} setClosed={setClosed} />
    </nav>
  )
}
