import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LanguageToggle from '../common/LanguageToggle'
import { useLanguage } from '../../i18n/LanguageContext'
import { useTheme } from '../../theme/ThemeContext'
import { scheduleBackendWarmup, warmupBackend } from '../../services/backendWarmup'

function Navbar() {
  const { t, language } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    scheduleBackendWarmup()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const base = import.meta.env.BASE_URL

  const cvHref = useMemo(() => {
    return language === 'en'
      ? `${base}assets/docs/Ingles/Jordy%20Retana%20Mendez%20CV.pdf`
      : `${base}assets/docs/Español/Jordy%20Retana%20CV.pdf`
  }, [language, base])

  const cvDownloadName =
    language === 'en'
      ? 'Jordy-Retana-Mendez-CV-EN.pdf'
      : 'Jordy-Retana-CV-ES.pdf'

  const handleWarmup = () => {
    warmupBackend()
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar">
        <Link to="/" className="logo logo-mark" onClick={closeMenu}>
          <span className="logo-dot"></span>
          <span className="logo-text">JR</span>
        </Link>

        <button
          type="button"
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-panel ${isOpen ? 'open' : ''}`}>
          <nav className="nav-menu">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {t('nav.home')}
            </NavLink>

            <NavLink
              to="/proyectos"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {t('nav.projects')}
            </NavLink>

            <NavLink
              to="/experiencia"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {t('nav.experience')}
            </NavLink>

            <NavLink
              to="/habilidades"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {t('nav.skills')}
            </NavLink>

            <NavLink
              to="/contacto"
              onClick={closeMenu}
              onMouseEnter={handleWarmup}
              onFocus={handleWarmup}
              onTouchStart={handleWarmup}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {t('nav.contact')}
            </NavLink>
          </nav>

          <div className="nav-actions">
            <a
              href={cvHref}
              download={cvDownloadName}
              className="btn btn-secondary nav-cv-btn"
            >
              CV
            </a>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
            </button>

            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
