import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import LanguageToggle from '../common/LanguageToggle'
import ThemeToggle from '../common/ThemeToggle'
import { useLanguage } from '../../i18n/LanguageContext'

function Navbar() {
  const { t } = useLanguage()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => setIsOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar">
        <Link to="/" className="logo logo-mark">
          <span className="logo-dot"></span>
          <span className="logo-text">{t('nav.logo')}</span>
        </Link>

        <button
          type="button"
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-panel ${isOpen ? 'open' : ''}`}>
          <nav className="nav-menu">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/proyectos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {t('nav.projects')}
            </NavLink>
            <NavLink to="/experiencia" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {t('nav.experience')}
            </NavLink>
            <NavLink to="/habilidades" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {t('nav.skills')}
            </NavLink>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {t('nav.contact')}
            </NavLink>
          </nav>

          <div className="nav-actions">
            <a href="/assets/docs/CV-Jordy-Retana.pdf" className="btn btn-secondary nav-cv-btn" target="_blank" rel="noreferrer">
              {t('nav.download_cv')}
            </a>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
