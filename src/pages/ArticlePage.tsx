import { useParams, Link } from 'react-router-dom'
import { getArticleBySlug } from '../data/articles'
import './ArticlePage.css'

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = getArticleBySlug(slug ?? '')

  if (!article) {
    return (
      <div className="not-found container">
        <h1>Article not found.</h1>
        <Link to="/journal" className="btn btn-ghost">Back to journal</Link>
      </div>
    )
  }

  return (
    <>
      <section className="article-hero">
        <img src={article.image} alt={article.title} />
        <div className="article-hero__overlay" />
        <div className="article-hero__content container">
          <span className="overline">{article.category} · {article.readTime} · {article.date}</span>
          <h1>{article.title}</h1>
          <p className="article-hero__subtitle">{article.subtitle}</p>
          <p className="article-hero__author">By {article.author}</p>
        </div>
      </section>

      <article className="section container article-body">
        {article.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <div className="article-back">
          <Link to="/journal" className="btn btn-ghost">← Back to journal</Link>
        </div>
      </article>
    </>
  )
}
