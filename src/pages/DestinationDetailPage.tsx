import { useParams, Link } from 'react-router-dom'
import { getDestinationBySlug } from '../data/destinations'
import ImageGallery from '../components/Gallery/ImageGallery'
import './DetailPage.css'

export default function DestinationDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const dest = getDestinationBySlug(slug ?? '')

  if (!dest) {
    return (
      <div className="not-found container">
        <h1>Destination not found.</h1>
        <Link to="/destinations" className="btn btn-ghost">Back to destinations</Link>
      </div>
    )
  }

  return (
    <>
      <section className="detail-hero">
        <img src={dest.image} alt={dest.name} />
        <div className="detail-hero__overlay" />
        <div className="detail-hero__content container">
          <span className="overline">{dest.region} · {dest.country}</span>
          <h1>{dest.name}</h1>
          <p className="detail-hero__tagline">{dest.tagline}</p>
        </div>
      </section>

      <section className="section container detail-body">
        <div className="detail-body__main">
          <p className="detail-intro">{dest.longDescription}</p>

          <div className="detail-meta">
            <div><span className="overline">Best time</span><p>{dest.bestTime}</p></div>
            <div><span className="overline">Climate</span><p>{dest.climate}</p></div>
          </div>

          <h2 className="detail-section-title">Highlights</h2>
          <ul className="detail-highlights">
            {dest.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>

          <div className="detail-gallery">
            <ImageGallery images={dest.galleryImages} />
          </div>

          <div className="detail-cta">
            <Link to={`/contact?destination=${dest.slug}`} className="btn btn-primary">
              Enquire about {dest.name}
            </Link>
            <Link to="/destinations" className="btn btn-ghost">All destinations</Link>
          </div>
        </div>
      </section>
    </>
  )
}
