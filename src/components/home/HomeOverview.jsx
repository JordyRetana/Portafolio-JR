import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'

function HomeOverview() {
  const { t } = useLanguage()
  const content = t('home_overview')

  return (
    <section className="home-overview-section">
      <div className="container">
        <div className="home-overview-card">
          <div className="home-overview-content">
            <span className="home-overview-badge reveal-up">{content.badge}</span>
            <h2 className="home-overview-title reveal-up delay-1">{content.title}</h2>
            <p className="home-overview-description reveal-up delay-2">{content.description}</p>
            <div className="home-overview-actions reveal-up delay-3">
              <a href="#projects" className="btn btn-primary">{content.ctaPrimary}</a>
              <Link to="/contacto" className="btn btn-secondary">{content.ctaSecondary}</Link>
            </div>
          </div>
          <div className="home-overview-grid stagger-children">
            {content.cards.map((card) => (
              <article className="home-overview-item" key={card.title}>
                <div className="home-overview-icon"></div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeOverview
