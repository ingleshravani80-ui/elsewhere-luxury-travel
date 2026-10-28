import PageHero from '../components/PageHero/PageHero'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1800&q=80"
        overline="Our story"
        title="About ELSEWHERE"
        subtitle="A travel company built on the belief that the world rewards attention."
        tall
      />

      <section className="section container about-body">
        <div className="about-text">
          <span className="overline">Who we are</span>
          <h2>We exist for<br /><em>the unhurried.</em></h2>
          <p>ELSEWHERE was founded on a simple idea: that the best travel is not about seeing the most places in the least time. It is about arriving somewhere and staying long enough to understand it — even slightly.</p>
          <p>We work with a small, carefully chosen roster of destinations. We know these places deeply: the right time of year, the right guides, the restaurants with no name on the door. We do not list everywhere. We list the places we believe in.</p>
        </div>

        <div className="about-values">
          {[
            { title: 'Depth over breadth', body: 'Three days in one neighbourhood, not three neighbourhoods in one day.' },
            { title: 'Local knowledge', body: 'Every destination is curated with someone who lives there.' },
            { title: 'No unnecessary fuss', body: 'Luxury, to us, is attention to detail — not size or spectacle.' },
            { title: 'Transparency', body: 'We tell you what your journey includes, and what it does not.' },
          ].map((v) => (
            <div key={v.title} className="about-value">
              <div className="divider" />
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>

        <div className="about-image-block">
          <img
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1400&q=80"
            alt="Lone traveller on a mountain trail at sunrise"
            loading="lazy"
          />
          <blockquote className="about-quote">
            <p>"Travel is not about escape. It is about arriving more fully in the world."</p>
          </blockquote>
        </div>
      </section>
    </>
  )
}
