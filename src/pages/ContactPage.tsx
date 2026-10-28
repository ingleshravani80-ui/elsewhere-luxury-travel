import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { destinations } from '../data/destinations'
import { journeys } from '../data/journeys'
import PageHero from '../components/PageHero/PageHero'
import './ContactPage.css'

interface FormState {
  name: string
  email: string
  destination: string
  journey: string
  period: string
  travellers: string
  style: string
  message: string
}

const TRAVEL_STYLES = ['Relaxation', 'Adventure', 'Culture', 'Cuisine', 'Wildlife', 'Romance', 'Family']

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    destination: searchParams.get('destination') ?? '',
    journey: searchParams.get('journey') ?? '',
    period: '',
    travellers: '2',
    style: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setForm((f) => ({
      ...f,
      destination: searchParams.get('destination') ?? f.destination,
      journey: searchParams.get('journey') ?? f.journey,
    }))
  }, [searchParams])

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const validate = (): boolean => {
    const errs: Partial<FormState> = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email.'
    if (!form.message.trim()) errs.message = 'Please tell us a little about your trip.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-success container">
        <h1>Thank you, {form.name}.</h1>
        <p>This is a portfolio demonstration — no enquiry has been sent. In a real booking, our team would be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1800&q=80"
        overline="Start planning"
        title="Enquire"
        subtitle="Tell us about the trip you have in mind."
      />

      <section className="section container contact-page">
        <p className="contact-disclaimer">
          ⚠ Portfolio demonstration — this form does not send real enquiries or store personal information.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name *</label>
              <input id="name" type="text" value={form.name} onChange={set('name')} autoComplete="name" />
              {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="email">Email *</label>
              <input id="email" type="email" value={form.email} onChange={set('email')} autoComplete="email" />
              {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="destination">Destination</label>
              <select id="destination" value={form.destination} onChange={set('destination')}>
                <option value="">Any destination</option>
                {destinations.map((d) => <option key={d.slug} value={d.slug}>{d.name}</option>)}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="journey">Journey</label>
              <select id="journey" value={form.journey} onChange={set('journey')}>
                <option value="">Any journey</option>
                {journeys.map((j) => <option key={j.slug} value={j.slug}>{j.title}</option>)}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="period">Travel period</label>
              <input id="period" type="text" placeholder="e.g. March 2025" value={form.period} onChange={set('period')} />
            </div>
            <div className="form-field">
              <label htmlFor="travellers">Number of travellers</label>
              <select id="travellers" value={form.travellers} onChange={set('travellers')}>
                {['1','2','3','4','5','6','7','8+'].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="style">Travel style</label>
            <select id="style" value={form.style} onChange={set('style')}>
              <option value="">Select a style</option>
              {TRAVEL_STYLES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">Tell us about your trip *</label>
            <textarea id="message" rows={5} value={form.message} onChange={set('message')} placeholder="Where are you dreaming of going, and what matters most to you?" />
            {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary">Send enquiry</button>
        </form>
      </section>
    </>
  )
}
