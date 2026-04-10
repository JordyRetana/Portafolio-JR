import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import GlowBackground from '../common/GlowBackground'
import StatGrid from '../common/StatGrid'

function Hero() {
  const { t, language } = useLanguage()

  const stats = [
    { value: '50+', label: t('hero.stats.projects') },
    { value: '3+', label: t('hero.stats.years') },
    { value: '100%', label: t('hero.stats.satisfaction') }
  ]

  const floating =
    language === 'es'
      ? {
          frontLabel: 'Frontend',
          frontValue: 'React / Sistemas UI',
          backLabel: 'Backend',
          backValue: 'APIs / Integraciones'
        }
      : {
          frontLabel: 'Frontend',
          frontValue: 'React / UI Systems',
          backLabel: 'Backend',
          backValue: 'APIs / Integrations'
        }

  return (
    <section className="hero-section" id="home">
      <GlowBackground className="hero-background" showGrid />
      <div className="hero-particles-layer"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge reveal-up">
            <span className="badge-dot"></span>
            <span className="badge-text">{t('hero.dev_mode')}</span>
          </div>

          <h1 className="hero-title reveal-up delay-1">
            <span className="title-line">{t('hero.greeting')}</span>
            <span className="title-line highlight">{t('hero.name')}</span>
            <span className="title-line">{t('hero.role')}</span>
          </h1>

          <p className="hero-description reveal-up delay-2">{t('hero.description')}</p>

          <StatGrid items={stats} className="hero-stats" />

          <div className="hero-actions reveal-up delay-3">
            <a href="#projects" className="btn btn-primary">{t('hero.actions.view_projects')}</a>
            <Link to="/contacto" className="btn btn-secondary">{t('hero.actions.connect')}</Link>
          </div>

          <div className="tech-scroll stagger-children">
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>PostgreSQL</span>
            <span>AWS</span>
          </div>
        </div>

        <div className="hero-visual reveal-in delay-2">
          <div className="code-window scale-in delay-2">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="window-title">developer.profile</div>
            </div>

            <div className="window-content">
              <pre>
{`${t('hero.console_code.line1')}
${t('hero.console_code.line2')}
${t('hero.console_code.line3')}
${t('hero.console_code.line4')}`}
              </pre>
            </div>
          </div>

          <div className="hero-floating-card hero-floating-card-1 float-soft">
            <span>{floating.frontLabel}</span>
            <strong>{floating.frontValue}</strong>
          </div>

          <div className="hero-floating-card hero-floating-card-2 float-soft">
            <span>{floating.backLabel}</span>
            <strong>{floating.backValue}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
