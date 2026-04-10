import { experienceItems } from '../data/experience'
import { useLanguage } from '../i18n/LanguageContext'
import PageHero from '../components/common/PageHero'
import GlowBackground from '../components/common/GlowBackground'

function Experience() {
  const { t } = useLanguage()

  return (
    <main className="experience-page">
      <PageHero
        badge={t('experience_page.badge')}
        title={t('experience_page.title')}
        subtitle={t('experience_page.subtitle')}
      >
        <GlowBackground className="experience-hero-background" />
      </PageHero>

      <section className="experience-timeline-section">
        <div className="container">
          <div className="experience-track"></div>

          <div className="experience-timeline stagger-children">
            {experienceItems.map((item, index) => {
              const baseKey = `experience_page.items.${item.key}`
              const achievements = t(`${baseKey}.achievements`)

              return (
                <article className={`experience-node ${index % 2 ? 'right' : 'left'}`} key={item.id}>
                  <div className="experience-pin"></div>
                  <div className="experience-card-shell">
                    <div className="experience-top">
                      <div>
                        <span className="experience-period">{item.period}</span>
                        <h2>{t(`${baseKey}.role`)}</h2>
                        <h3>{t(`${baseKey}.company`)}</h3>
                      </div>
                      <span className="experience-type">{item.type}</span>
                    </div>

                    <p className="experience-description">{t(`${baseKey}.description`)}</p>

                    <div className="experience-highlights-grid">
                      {Array.isArray(achievements) && achievements.map((achievement) => (
                        <div className="experience-achievement" key={achievement}>
                          <span className="achievement-icon">✓</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="experience-tech">
                      {item.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Experience
