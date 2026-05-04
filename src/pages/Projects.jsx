import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import PageHero from '../components/common/PageHero'
import GlowBackground from '../components/common/GlowBackground'

function PlaceholderProject({ title, category }) {
  const meta =
    category === 'backend'
      ? { label: 'BACKEND / ARCHITECTURE', text: 'API / Security / Data' }
      : category === 'mobile'
      ? { label: 'ANDROID / MOBILE', text: 'Kotlin / Compose / Room' }
      : category === 'ai'
      ? { label: 'PYTHON / VISION', text: 'OpenCV / MediaPipe / Tracking' }
      : category === 'game'
      ? { label: 'GAME / INTERACTIVE', text: 'Gameplay / Canvas / Effects' }
      : { label: 'WEB / INTERACTIVE', text: 'UI / Interaction / Web' }

  return (
    <div className={`projects-page-image placeholder ${category}`}>
      <div className="project-placeholder-content">
        <span>{meta.label}</span>
        <strong>{title}</strong>
        <p>{meta.text}</p>
      </div>
    </div>
  )
}

function Projects() {
  const { t, language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { key: 'all', label: t('projects_page.filters.all') },
    { key: 'web', label: t('projects_page.filters.web') },
    { key: 'backend', label: t('projects_page.filters.backend') },
    { key: 'mobile', label: t('projects_page.filters.mobile') },
    { key: 'ai', label: t('projects_page.filters.ai') },
    { key: 'game', label: t('projects_page.filters.game') }
  ]

  const filteredProjects = useMemo(() => {
    const visibleProjects =
      activeFilter === 'all'
        ? projects
        : projects.filter((project) => project.category === activeFilter)

    return [...visibleProjects].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
  }, [activeFilter])

  return (
    <main className="projects-page">
      <PageHero
        badge={t('projects_page.badge')}
        title={t('projects_page.title')}
        subtitle={t('projects_page.subtitle')}
      >
        <GlowBackground className="projects-hero-background" />
        <div className="projects-filters compact-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={`projects-filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="projects-page-grid-section">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="projects-page-grid compact-grid stagger-children">
              {filteredProjects.map((project, index) => {
                const title = t(`projects_page.items.${project.key}.title`)
                const description = t(`projects_page.items.${project.key}.description`)
                return (
                  <article className={`projects-page-card compact-card ${index === 0 ? 'featured' : ''}`} key={project.id}>
                    <div className="projects-page-image-wrap compact-media">
                      {project.image ? (
                        <div className="projects-page-image">
                          <img src={project.image} alt={title} loading="lazy" decoding="async" />
                        </div>
                      ) : (
                        <PlaceholderProject title={title} category={project.category} />
                      )}

                      <div className="projects-card-badges compact-badges">
                        <span className={`project-category-badge ${project.category}`}>
                          {t(`projects_page.filters.${project.category}`)}
                        </span>
                        <span className="project-index-badge">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {project.upcoming ? (
                          <span className="project-upcoming-badge">
                            {language === 'en' ? 'Coming soon' : 'Proximamente'}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="projects-page-content compact-content">
                      <div className="projects-page-heading compact-heading">
                        <h2>{title}</h2>
                        <p>{description}</p>
                      </div>

                      <div className="project-metrics-row">
                        {project.metrics?.map((metric) => (
                          <span key={metric} className="project-metric-pill">{metric}</span>
                        ))}
                      </div>

                      <div className="projects-page-tech compact-tech">
                        {project.tech.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>

                      <div className="projects-page-actions compact-actions">
                        <a href={project.codeUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                          {t('projects_page.actions.code')}
                        </a>
                        {project.liveUrl && project.liveUrl !== '#' ? (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                            {t('projects_page.actions.demo')}
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="projects-empty-state">
              <p>{t('projects_page.empty')}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Projects
