import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import PageHero from '../components/common/PageHero'
import GlowBackground from '../components/common/GlowBackground'

function PlaceholderProject({ title, category }) {
  return (
    <div className={`projects-page-image placeholder ${category}`}>
      <div className="project-placeholder-content">
        <span>{category === 'ai' ? 'PYTHON · VISION' : category === 'game' ? 'GAME · INTERACTIVE' : 'WEB · INTERACTIVE'}</span>
        <strong>{title}</strong>
        <p>{category === 'ai' ? 'OpenCV · MediaPipe · Tracking' : category === 'game' ? 'Gameplay · Canvas · Effects' : 'UI · Interaction · Web'}</p>
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
    { key: 'ai', label: t('projects_page.filters.ai') },
    { key: 'game', label: t('projects_page.filters.game') }
  ]

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((project) => project.category === activeFilter)
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
                  <article className={`projects-page-card compact-card ${project.featured ? 'featured' : ''}`} key={project.id}>
                    <div className="projects-page-image-wrap compact-media">
                      {project.image ? (
                        <div className="projects-page-image">
                          <img src={project.image} alt={title} loading="lazy" />
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
                            {language === 'en' ? 'Coming soon' : 'Próximamente'}
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
