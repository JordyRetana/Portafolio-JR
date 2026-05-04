import { featuredProjects } from '../../data/featuredProjects'
import { useLanguage } from '../../i18n/LanguageContext'
import SectionHeading from '../common/SectionHeading'

function FeaturedProjects() {
  const { t } = useLanguage()

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <SectionHeading
          badge={t('portfolio.section_subtitle')}
          title={t('portfolio.section_title')}
          description={t('portfolio.section_description')}
        />

        <div className="projects-grid stagger-children">
          {featuredProjects.map((project) => {
            const baseKey = `portfolio.projects.${project.key}`
            const features = t(`${baseKey}.features`)
            const statLabels = t(`${baseKey}.stats`)
            const stats = project.key === 'kirby'
              ? [
                  { value: project.statValues[0], label: statLabels.fps },
                  { value: project.statValues[1], label: statLabels.levels },
                  { value: project.statValues[2], label: statLabels.enemies },
                  { value: project.statValues[3], label: statLabels.powers }
                ]
              : project.key === 'pool'
              ? [
                  { value: project.statValues[0], label: statLabels.fps },
                  { value: project.statValues[1], label: statLabels.levels },
                  { value: project.statValues[2], label: statLabels.enemies },
                  { value: project.statValues[3], label: statLabels.powers }
                ]
              : [
                  { value: project.statValues[0], label: statLabels.users },
                  { value: project.statValues[1], label: statLabels.satisfaction },
                  { value: project.statValues[2], label: statLabels.uptime }
                ]
            return (
              <article className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
                  <div className="project-overlay"><span className={`project-badge ${project.badgeType}`}>{t(`${baseKey}.badge`)}</span></div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3>{t(`${baseKey}.title`)}</h3>
                    <div className="project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                  <p className="project-description">{t(`${baseKey}.description`)}</p>
                  <div className="project-features">{Array.isArray(features) && features.map((feature) => <div className="feature" key={feature}><span className="feature-icon">✓</span><span>{feature}</span></div>)}</div>
                  <div className="project-stats">{stats.map((stat) => <div className="project-stat" key={`${project.id}-${stat.label}`}><div className="stat-value">{stat.value}</div><div className="stat-label">{stat.label}</div></div>)}</div>
                  <div className="project-actions">
                    <a href={project.codeUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">{t(`${baseKey}.secondaryActionLabel`)}</a>
                    <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noreferrer">{t(`${baseKey}.primaryActionLabel`)}</a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
