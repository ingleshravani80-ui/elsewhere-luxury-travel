import { Link } from 'react-router-dom'
import { journeys } from '../data/journeys'
import PageHero from '../components/PageHero/PageHero'
import './JourneysPage.css'

export default function JourneysPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1800&q=80"
        overline="Curated travel"
        title="Journeys"
        subtitle="Carefully designed trips. Every detail handled."
      />

      <section className="section container">
        <div className="journeys-list">
          {journeys.map((j) => (
            <Link key={j.slug} to={`/journeys/${j.slug}`} className="journey-row">
              <div className="journey-row__img">
                <img src={j.image} alt={j.title} loading="lazy" />
              </div>
              <div className="journey-row__body">
                <span className="overline">{j.duration} · {j.groupSize} people</span>
                <h2>{j.title}</h2>
                <p className="journey-row__sub">{j.subtitle}</p>
                <p className="journey-row__desc">{j.description}</p>
                <div className="journey-row__footer">
                  <span className="journey-row__price">{j.startingFrom}</span>
                  <span className="journey-row__link">View journey →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
