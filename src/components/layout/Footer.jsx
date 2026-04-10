import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-dot"></span>
              <span className="footer-logo-text">{t('nav.logo')}</span>
            </div>
            <p className="footer-description">{t('footer.building_solutions')}</p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h3>{t('footer.navigation')}</h3>
              <div className="footer-links">
                <Link to="/">{t('nav.home')}</Link>
                <Link to="/proyectos">{t('nav.projects')}</Link>
                <Link to="/experiencia">{t('nav.experience')}</Link>
                <Link to="/habilidades">{t('nav.skills')}</Link>
                <Link to="/contacto">{t('nav.contact')}</Link>
              </div>
            </div>
            <div className="footer-column">
              <h3>{t('footer.resources')}</h3>
              <div className="footer-links">
                <a href="/assets/docs/CV-Jordy-Retana.pdf" target="_blank" rel="noreferrer">{t('nav.download_cv')}</a>
                <a href="https://github.com/JordyRetana" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/jordy-retana-553632164/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
            <div className="footer-column">
              <h3>{t('footer.contact')}</h3>
              <div className="footer-links">
                <a href="mailto:Jretanamendez@gmail.com">Jretanamendez@gmail.com</a>
                <a href="https://wa.me/50687138971" target="_blank" rel="noreferrer">WhatsApp</a>
                <span>San José, Costa Rica</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 {t('nav.logo')} · {t('footer.rights_reserved')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
