import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import './JourneyWorkflow.css'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: 'Share Your Vision',
    body: 'Submit an enquiry with your preferred destination, travel dates, interests, and travel style.',
  },
  {
    num: '02',
    title: 'Discover the Possibilities',
    body: 'Explore suggested destinations and experiences aligned with your preferences.',
  },
  {
    num: '03',
    title: 'Shape Your Journey',
    body: 'Refine the proposed itinerary, pace, and experiences to suit your travel vision.',
  },
  {
    num: '04',
    title: 'Review the Details',
    body: 'Review the illustrative itinerary and travel preferences before making any real-world arrangements.',
  },
  {
    num: '05',
    title: 'Get Ready to Explore',
    body: 'Use the finalised plan as your guide to the journey ahead.',
  },
]

export default function JourneyWorkflow() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.workflow-step')
      if (!items) return
      gsap.from(items, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="workflow section" aria-label="How ELSEWHERE works">
      <div className="container">
        <div className="workflow__header">
          <span className="overline">How it works</span>
          <h2>Your journey,<br /><em>thoughtfully planned.</em></h2>
          <p className="workflow__note">
            This is a portfolio demonstration — no real bookings or consultations are provided.
          </p>
        </div>

        <div className="workflow__steps" role="list">
          {steps.map((step, i) => (
            <div key={step.num} className="workflow-step" role="listitem">
              {/* connector line between steps */}
              {i < steps.length - 1 && (
                <div className="workflow-step__connector" aria-hidden="true" />
              )}
              <div className="workflow-step__num" aria-hidden="true">{step.num}</div>
              <h3 className="workflow-step__title">{step.title}</h3>
              <p className="workflow-step__body">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="workflow__cta">
          <Link to="/contact" className="btn btn-primary">Begin your enquiry</Link>
        </div>
      </div>
    </section>
  )
}
