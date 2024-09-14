import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const location = useLocation()
  const navItems = ['Home', 'Bikes', 'Equipment', 'Services', 'Shop']
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
      scrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-light tracking-wider">
          SERENITY SPOKES
        </Link>
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`text-white text-sm uppercase tracking-wider transition duration-300 relative group`}
              >
                {item}
                <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                  location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`}></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar