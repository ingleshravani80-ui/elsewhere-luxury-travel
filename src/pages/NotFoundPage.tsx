import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <section className="nf-page">
      <div className="nf-page__content container">
        <span className="overline">404</span>
        <h1>This page doesn't<br /><em>exist.</em></h1>
        <p>The destination you are looking for may have moved, or the address may be wrong.</p>
        <div className="nf-page__links">
          <Link to="/" className="btn btn-primary">Back to home</Link>
          <Link to="/destinations" className="btn btn-ghost">Browse destinations</Link>
        </div>
      </div>
    </section>
  )
}
