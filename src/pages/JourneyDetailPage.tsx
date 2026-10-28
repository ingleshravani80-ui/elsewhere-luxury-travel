import { useParams, Link } from 'react-router-dom'
import { getJourneyBySlug } from '../data/journeys'
import ImageGallery from '../components/Gallery/ImageGallery'
import './DetailPage.css'

export default function JourneyDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const journey = getJourneyBySlug(slug ?? '')

  if (!journey) {
    return (
      <div className="not-found container">
        <h1>Journey not found.</h1>
        <Link to="/journeys" className="btn btn-ghost">Back to journeys</Link>
      </div>
    )
  }

  return (
    <>
      <section className="detail-hero">
        <img src={journey.image} alt={journey.title} />
        <div className="detail-hero__overlay" />
        <div className="detail-hero__content container">
          <span className="overline">{journey.duration} · {journey.subtitle}</span>
          <h1>{journey.title}</h1>
          <p className="detail-hero__tagline">{journey.description}</p>
        </div>
      </section>

      <section className="section container detail-body">
        <div className="detail-body__main">
          <p className="detail-intro">{journey.longDescription}</p>

          <div className="detail-meta">
            <div><span className="overline">Duration</span><p>{journey.duration}</p></div>
            <div><span className="overline">Group size</span><p>{journey.groupSize}</p></div>
            <div><span className="overline">From</span><p>{journey.startingFrom}</p></div>
          </div>

          <h2 className="detail-section-title">Sample itinerary</h2>
          <div className="itinerary">
            {journey.itinerary.map((day) => (
              <div key={day.day} className="itinerary-day">
                <span className="itinerary-day__num">{day.day}</span>
                <div>
                  <p className="itinerary-day__title">{day.title}</p>
                  <p className="itinerary-day__desc">{day.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="detail-section-title">What's included</h2>
          <ul className="detail-highlights" style={{ marginBottom: '2rem' }}>
            {journey.includes.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <div className="detail-gallery">
            <ImageGallery images={journey.galleryImages} />
          </div>

          <div className="detail-cta">
            <Link to={`/contact?journey=${journey.slug}`} className="btn btn-primary">
              Enquire about this journey
            </Link>
            <Link to="/journeys" className="btn btn-ghost">All journeys</Link>
          </div>
        </div>
      </section>
    </>
  )
}
