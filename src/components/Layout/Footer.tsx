import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">ELSEWHERE</Link>
          <p className="footer__tagline">The world is closer than you think.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <div className="footer__col">
            <span className="footer__col-title overline">Explore</span>
            <Link to="/destinations">Destinations</Link>
            <Link to="/journeys">Journeys</Link>
            <Link to="/journal">Journal</Link>
          </div>
          <div className="footer__col">
            <span className="footer__col-title overline">Company</span>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </div>

      <div className="footer__bottom container">
        <p>© 2024 ELSEWHERE. Portfolio demonstration — no real bookings or enquiries are processed.</p>
      </div>
    </footer>
  )
}
