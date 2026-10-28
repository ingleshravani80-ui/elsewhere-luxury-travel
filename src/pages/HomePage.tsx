import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getFeaturedDestinations } from '../data/destinations'
import { getFeaturedJourneys } from '../data/journeys'
import { getFeaturedArticles } from '../data/articles'
import JourneyWorkflow from '../components/JourneyWorkflow/JourneyWorkflow'
import './HomePage.css'

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const heroCTARef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLElement>(null)
  const journeysRef = useRef<HTMLElement>(null)
  const philosophyRef = useRef<HTMLElement>(null)

  const featured = getFeaturedDestinations()
  const journeys = getFeaturedJourneys()
  const articles = getFeaturedArticles().slice(0, 3)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        // Hero entrance
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from(headlineRef.current, { opacity: 0, y: 60, duration: 1 }, 0.3)
          .from(taglineRef.current, { opacity: 0, y: 30, duration: 0.8 }, 0.8)
          .from(heroCTARef.current, { opacity: 0, y: 20, duration: 0.6 }, 1.1)

        // Hero parallax
        if (heroRef.current) {
          const bg = heroRef.current.querySelector('.hero__bg img')
          if (bg) {
            gsap.to(bg, {
              yPercent: 25,
              ease: 'none',
              scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            })
          }
        }

        // Scroll reveals
        gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          })
        })
      }
    })
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="hero" aria-label="Hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=2000&q=85"
            alt="Aerial view of turquoise water and a small island"
          />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content container">
          <h1 ref={headlineRef} className="hero__headline">
            The world is<br />
            <em>closer than</em><br />
            you think.
          </h1>
          <p ref={taglineRef} className="hero__tagline">
            Rare destinations. Unhurried journeys. Travel edited for those who know what they are looking for.
          </p>
          <div ref={heroCTARef} className="hero__cta">
            <Link to="/destinations" className="btn btn-primary">Explore destinations</Link>
            <Link to="/journeys" className="btn btn-ghost">View journeys</Link>
          </div>
        </div>
        <div className="hero__scroll-indicator" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* Featured destinations */}
      <section ref={featuredRef} className="section home-destinations" aria-label="Featured destinations">
        <div className="container">
          <div className="section-header reveal">
            <span className="overline">Where to go</span>
            <h2>Featured<br /><em>destinations</em></h2>
          </div>
          <div className="home-destinations__grid">
            {featured.slice(0, 4).map((dest) => (
              <Link
                key={dest.slug}
                to={`/destinations/${dest.slug}`}
                className="dest-card reveal"
                aria-label={`${dest.name}, ${dest.country}`}
              >
                <div className="dest-card__img-wrap">
                  <img
                    src={dest.image}
                    alt={`${dest.name} — ${dest.country}`}
                    loading="lazy"
                  />
                </div>
                <div className="dest-card__body">
                  <span className="dest-card__region overline">{dest.region}</span>
                  <h3 className="dest-card__name">{dest.name}</h3>
                  <p className="dest-card__tagline">{dest.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/destinations" className="btn btn-ghost">All destinations</Link>
          </div>
        </div>
      </section>

      {/* Philosophy strip */}
      <section ref={philosophyRef} className="home-philosophy">
        <div className="home-philosophy__inner container">
          <div className="home-philosophy__text reveal">
            <span className="overline">Our approach</span>
            <h2>Travel is not<br /><em>a checklist.</em></h2>
            <p>
              ELSEWHERE exists for travellers who would rather spend three days in one neighbourhood than three days in five cities. We work with a small roster of destinations we know deeply and journey designers who live in the places they guide you through.
            </p>
            <Link to="/about" className="btn btn-ghost">Our philosophy</Link>
          </div>
          <div className="home-philosophy__images reveal">
            <div className="home-philosophy__img home-philosophy__img--top">
              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80"
                alt="Lantern-lit alley in Kyoto at dusk"
                loading="lazy"
              />
            </div>
            <div className="home-philosophy__img home-philosophy__img--bottom">
              <img
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80"
                alt="Blue domed church in Santorini"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <JourneyWorkflow />

      {/* Journeys */}
      <section ref={journeysRef} className="section home-journeys" aria-label="Curated journeys">
        <div className="container">
          <div className="section-header reveal">
            <span className="overline">Curated journeys</span>
            <h2>Each trip<br /><em>is a story.</em></h2>
          </div>
          <div className="home-journeys__grid">
            {journeys.slice(0, 3).map((j) => (
              <Link
                key={j.slug}
                to={`/journeys/${j.slug}`}
                className="journey-card reveal"
              >
                <div className="journey-card__img-wrap">
                  <img src={j.image} alt={j.title} loading="lazy" />
                </div>
                <div className="journey-card__body">
                  <span className="overline">{j.duration} · {j.groupSize}</span>
                  <h3>{j.title}</h3>
                  <p className="journey-card__subtitle">{j.subtitle}</p>
                  <p className="journey-card__desc">{j.description}</p>
                  <span className="journey-card__price">{j.startingFrom}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/journeys" className="btn btn-ghost">All journeys</Link>
          </div>
        </div>
      </section>

      {/* Journal previews */}
      <section className="section home-journal" aria-label="Journal">
        <div className="container">
          <div className="section-header reveal">
            <span className="overline">From the journal</span>
            <h2>Stories<br /><em>from the road.</em></h2>
          </div>
          <div className="home-journal__grid">
            {articles.map((a) => (
              <Link
                key={a.slug}
                to={`/journal/${a.slug}`}
                className="article-card reveal"
              >
                <div className="article-card__img">
                  <img src={a.image} alt={a.title} loading="lazy" />
                </div>
                <div className="article-card__body">
                  <span className="overline">{a.category} · {a.readTime}</span>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="home-cta__bg">
          <img
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1800&q=80"
            alt="Traveller on a mountain ridge at sunrise"
            loading="lazy"
          />
          <div className="home-cta__overlay" />
        </div>
        <div className="home-cta__content container reveal">
          <h2>Begin your<br /><em>journey.</em></h2>
          <p>Every extraordinary trip starts with a single conversation. Tell us where you want to go.</p>
          <Link to="/contact" className="btn btn-primary">Start planning</Link>
        </div>
      </section>
    </>
  )
}
