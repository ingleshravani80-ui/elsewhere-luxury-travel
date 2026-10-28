import { Link } from 'react-router-dom'
import { articles } from '../data/articles'
import PageHero from '../components/PageHero/PageHero'
import './JournalPage.css'

export default function JournalPage() {
  const [lead, ...rest] = articles

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1800&q=80"
        overline="Travel writing"
        title="The Journal"
        subtitle="Stories, essays, and dispatches from the road."
      />

      <section className="section container journal-page">
        {/* Lead article */}
        <Link to={`/journal/${lead.slug}`} className="journal-lead">
          <div className="journal-lead__img">
            <img src={lead.image} alt={lead.title} />
          </div>
          <div className="journal-lead__body">
            <span className="overline">{lead.category} · {lead.readTime} · {lead.date}</span>
            <h2>{lead.title}</h2>
            <p className="journal-lead__subtitle">{lead.subtitle}</p>
            <p className="journal-lead__excerpt">{lead.excerpt}</p>
            <span className="journal-lead__author">By {lead.author}</span>
          </div>
        </Link>

        {/* Grid */}
        <div className="journal-grid">
          {rest.map((a) => (
            <Link key={a.slug} to={`/journal/${a.slug}`} className="journal-card">
              <div className="journal-card__img">
                <img src={a.image} alt={a.title} loading="lazy" />
              </div>
              <div className="journal-card__body">
                <span className="overline">{a.category} · {a.readTime}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="journal-card__author">By {a.author} · {a.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
