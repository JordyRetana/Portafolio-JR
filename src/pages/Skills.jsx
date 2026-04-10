import { additionalTools, skillCategories } from '../data/skills'
import { useLanguage } from '../i18n/LanguageContext'
import PageHero from '../components/common/PageHero'
import GlowBackground from '../components/common/GlowBackground'

function Skills() {
  const { t } = useLanguage()

  const frontend = skillCategories.find((c) => c.key === 'frontend')
  const backend = skillCategories.find((c) => c.key === 'backend')
  const ui = skillCategories.find((c) => c.key === 'ui')
  const data = skillCategories.find((c) => c.key === 'data')

  return (
    <main className="skills-page">
      <PageHero
        badge={t('skills_page.badge')}
        title={t('skills_page.title')}
        subtitle={t('skills_page.subtitle')}
      >
        <GlowBackground className="skills-hero-background" />
      </PageHero>

      <section className="skills-section">
        <div className="container">
          <div className="skills-layout">
            <article className="skills-panel skills-panel-feature reveal-up">
              <div className="skills-panel-header">
                <div>
                  <span className="skills-panel-kicker">01 · Core</span>
                  <h2>{t(frontend.titleKey)}</h2>
                  <p>{t(frontend.descriptionKey)}</p>
                </div>
              </div>

              <div className="skills-orbit-grid stagger-children">
                {frontend.items.map((skill) => (
                  <div className="skills-orbit-card" key={skill.name}>
                    <div
                      className="skills-orbit-ring"
                      style={{ '--value': `${skill.level}%` }}
                      aria-hidden="true"
                    >
                      <span>{skill.level}%</span>
                    </div>
                    <strong>{skill.name}</strong>
                  </div>
                ))}
              </div>
            </article>

            <article className="skills-panel skills-panel-ui reveal-up delay-1">
              <div className="skills-panel-header">
                <div>
                  <span className="skills-panel-kicker">02 · Motion</span>
                  <h2>{t(ui.titleKey)}</h2>
                  <p>{t(ui.descriptionKey)}</p>
                </div>
              </div>

              <div className="skills-ui-grid stagger-children">
                {ui.items.map((skill) => (
                  <div className="skills-ui-card" key={skill.name}>
                    <div className="skills-ui-top">
                      <strong>{skill.name}</strong>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skills-signal">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className="active"></span>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="skills-panel skills-panel-backend reveal-up delay-2">
              <div className="skills-panel-header">
                <div>
                  <span className="skills-panel-kicker">03 · Logic</span>
                  <h2>{t(backend.titleKey)}</h2>
                  <p>{t(backend.descriptionKey)}</p>
                </div>
              </div>

              <div className="skills-stack-list stagger-children">
                {backend.items.map((skill) => (
                  <div className="skills-stack-item" key={skill.name}>
                    <div>
                      <strong>{skill.name}</strong>
                      <small>{skill.level >= 88 ? 'Advanced' : skill.level >= 84 ? 'Strong' : 'Solid'}</small>
                    </div>
                    <div className="skills-inline-track">
                      <div className="skills-inline-fill backend-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="skills-panel skills-panel-data reveal-up delay-3">
              <div className="skills-panel-header">
                <div>
                  <span className="skills-panel-kicker">04 · Support</span>
                  <h2>{t(data.titleKey)}</h2>
                  <p>{t(data.descriptionKey)}</p>
                </div>
              </div>

              <div className="skills-support-grid stagger-children">
                {data.items.map((skill) => (
                  <div className="skills-support-card" key={skill.name}>
                    <div className="skills-support-head">
                      <strong>{skill.name}</strong>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skills-inline-track">
                      <div className="skills-inline-fill support-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="skills-tools-section">
        <div className="container">
          <div className="skills-tools-card reveal-up">
            <div className="skills-tools-header">
              <span className="skills-tools-badge">EXTRA</span>
              <h2>{t('skills_page.tools_title')}</h2>
            </div>

            <div className="skills-tools-list stagger-children">
              {additionalTools.map((tool) => (
                <span className="skills-tool-pill" key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Skills
