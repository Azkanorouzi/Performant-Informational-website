import { useState, useEffect } from 'preact/hooks'
import NavToggleBtn from './NavToggleBtn'

export default function StickyNavbar({ children }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [closed, setClosed] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos)
      setClosed(true)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const navbarStyle = {
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 10,
  }

  return (
    <nav
      class="pl-6 bg-opacity-30 bg-black backdrop-blur-lg border-b-2 border-secondary text-primary flex justify-between"
      style={{ boxShadow: 'inner', ...navbarStyle }}
    >
      {children}
      <NavToggleBtn closed={visible ? closed : true} setClosed={setClosed} />
    </nav>
  )
}
