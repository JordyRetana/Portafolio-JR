import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'

function ContactCta() {
  const { t } = useLanguage()
  return (
    <section className="contact-cta-section">
      <div className="container">
        <div className="contact-cta-card reveal-up">
          <span className="premium-pill">NEXT STEP</span>
          <h2>{t('contact.cta.title')}</h2>
          <p>{t('contact.cta.subtitle')}</p>
          <div className="contact-cta-actions">
            <a href="mailto:Jretanamendez@gmail.com" className="btn btn-primary">{t('contact.cta.primary')}</a>
            <Link to="/proyectos" className="btn btn-secondary">{t('contact.cta.secondary')}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCta
