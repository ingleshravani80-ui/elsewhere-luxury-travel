import { useState } from 'react'
import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import PageHero from '../components/PageHero/PageHero'
import './DestinationsPage.css'

const regions = ['All', ...Array.from(new Set(destinations.map((d) => d.region)))]
const tags = ['All', ...Array.from(new Set(destinations.flatMap((d) => d.tags)))]

export default function DestinationsPage() {
  const [regionFilter, setRegionFilter] = useState('All')
  const [tagFilter, setTagFilter] = useState('All')

  const filtered = destinations.filter((d) => {
    const regionOk = regionFilter === 'All' || d.region === regionFilter
    const tagOk = tagFilter === 'All' || d.tags.includes(tagFilter)
    return regionOk && tagOk
  })

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1800&q=80"
        overline="The world"
        title="Destinations"
        subtitle="Six places we know deeply. More on the way."
      />

      <section className="section destinations-page">
        <div className="container">
          {/* Filters */}
          <div className="destinations-filters">
            <div className="destinations-filters__group">
              <span className="overline">Region</span>
              <div className="destinations-filters__chips" role="group" aria-label="Filter by region">
                {regions.map((r) => (
                  <button
                    key={r}
                    className={`filter-chip${regionFilter === r ? ' filter-chip--active' : ''}`}
                    onClick={() => setRegionFilter(r)}
                    aria-pressed={regionFilter === r}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div className="destinations-filters__group">
              <span className="overline">Style</span>
              <div className="destinations-filters__chips" role="group" aria-label="Filter by style">
                {tags.map((t) => (
                  <button
                    key={t}
                    className={`filter-chip${tagFilter === t ? ' filter-chip--active' : ''}`}
                    onClick={() => setTagFilter(t)}
                    aria-pressed={tagFilter === t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p className="destinations-empty">No destinations match these filters.</p>
          ) : (
            <div className="destinations-grid">
              {filtered.map((dest) => (
                <Link
                  key={dest.slug}
                  to={`/destinations/${dest.slug}`}
                  className="dest-full-card"
                >
                  <div className="dest-full-card__img">
                    <img src={dest.image} alt={`${dest.name}, ${dest.country}`} loading="lazy" />
                  </div>
                  <div className="dest-full-card__body">
                    <span className="overline">{dest.region} · {dest.country}</span>
                    <h2>{dest.name}</h2>
                    <p className="dest-full-card__tagline">{dest.tagline}</p>
                    <p className="dest-full-card__desc">{dest.description}</p>
                    <span className="dest-full-card__link">Explore →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
