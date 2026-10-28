import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/destinations', label: 'Destinations' },
  { to: '/journeys', label: 'Journeys' },
  { to: '/journal', label: 'Journal' },
  { to: '/about', label: 'About' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`} role="banner">
      <div className="header__inner">
        <Link to="/" className="header__logo" aria-label="ELSEWHERE — Home">
          ELSEWHERE
        </Link>

        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="header__cta btn btn-primary">
            Enquire
          </Link>
        </nav>

        <button
          className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`header__mobile${menuOpen ? ' header__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `header__mobile-link${isActive ? ' header__mobile-link--active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
        <Link to="/contact" className="header__mobile-link header__mobile-link--cta">
          Enquire
        </Link>
      </div>
    </header>
  )
}
