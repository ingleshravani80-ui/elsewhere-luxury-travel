import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './PageHero.css'

interface Props {
  image: string
  overline?: string
  title: string
  subtitle?: string
  tall?: boolean
}

export default function PageHero({ image, overline, title, subtitle, tall }: Props) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const overlineRef = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      if (overlineRef.current) {
        tl.from(overlineRef.current, { opacity: 0, y: 16, duration: 0.6 }, 0.2)
      }
      if (titleRef.current) {
        tl.from(titleRef.current, { opacity: 0, y: 32, duration: 0.8 }, 0.4)
      }
      if (subtitleRef.current) {
        tl.from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.6 }, 0.7)
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className={`page-hero${tall ? ' page-hero--tall' : ''}`}>
      <div className="page-hero__bg">
        <img src={image} alt="" aria-hidden="true" />
        <div className="page-hero__overlay" />
      </div>
      <div className="page-hero__content container">
        {overline && <span ref={overlineRef} className="overline">{overline}</span>}
        <h1 ref={titleRef}>{title}</h1>
        {subtitle && <p ref={subtitleRef} className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}
