import { useState, useCallback, useEffect, useRef } from 'react'
import './ImageGallery.css'

interface Props {
  images: string[]
  alts?: string[]
  aspectRatio?: string
}

export default function ImageGallery({ images, alts = [], aspectRatio = '16/9' }: Props) {
  const [current, setCurrent] = useState(0)
  const [dragging, setDragging] = useState(false)
  const dragStart = useRef(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prev, next])

  // Touch / drag
  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true)
    dragStart.current = e.clientX
    trackRef.current?.setPointerCapture(e.pointerId)
  }
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging) return
    setDragging(false)
    const delta = dragStart.current - e.clientX
    if (delta > 50) next()
    else if (delta < -50) prev()
  }

  return (
    <div className="gallery" role="region" aria-label="Image gallery" aria-roledescription="carousel">
      <div
        className="gallery__track"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        style={{ cursor: dragging ? 'grabbing' : 'grab' }}
      >
        <div
          className="gallery__slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={src}
              className="gallery__slide"
              style={{ aspectRatio }}
              aria-hidden={i !== current}
            >
              <img
                src={src}
                alt={alts[i] ?? `Gallery image ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                draggable={false}
                onError={(e) => {
                  const t = e.currentTarget
                  t.style.opacity = '0'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            className="gallery__btn gallery__btn--prev"
            onClick={prev}
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            className="gallery__btn gallery__btn--next"
            onClick={next}
            aria-label="Next image"
          >
            →
          </button>

          <div className="gallery__dots" role="tablist" aria-label="Gallery navigation">
            {images.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Image ${i + 1} of ${images.length}`}
                className={`gallery__dot${i === current ? ' gallery__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
