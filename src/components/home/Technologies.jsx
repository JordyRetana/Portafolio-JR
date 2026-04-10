import { technologies } from '../../data/technologies'
import { useLanguage } from '../../i18n/LanguageContext'
import SectionHeading from '../common/SectionHeading'

function Technologies() {
  const { t } = useLanguage()

  return (
    <section className="technologies-section" id="technologies">
      <div className="container">
        <SectionHeading
          badge={t('tech.section_subtitle')}
          title={t('tech.section_title')}
          description={t('tech.section_description')}
        />

        <div className="tech-grid stagger-children">
          {technologies.map((category) => (
            <article
              className={`tech-category-card ${category.id === 3 ? 'tech-category-card-wide' : ''}`}
              key={category.id}
            >
              <div className="tech-category-header">
                <div className="tech-category-icon">{category.icon}</div>
                <h3>{t(category.titleKey)}</h3>
              </div>

              <div className={`tech-list ${category.id === 3 ? 'tech-list-inline' : ''}`}>
                {category.items.map((tech) => (
                  <div
                    className={`tech-item-card ${category.id === 3 ? 'tech-item-card-inline' : ''}`}
                    key={tech.name}
                  >
                    <div className="tech-item-top">
                      <div className="tech-item-info">
                        <span className="tech-item-icon">{tech.icon}</span>
                        <h4>{tech.name}</h4>
                      </div>
                      <span className="tech-level">{tech.level}%</span>
                    </div>

                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies