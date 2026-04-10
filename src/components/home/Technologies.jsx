import { useLanguage } from '../../i18n/LanguageContext'

function Technologies() {
  const { language } = useLanguage()

  const content =
    language === 'es'
      ? {
          badge: 'STACK',
          title: 'Tecnologías y capacidades',
          description:
            'Tecnologías principales, experiencia visual y herramientas de despliegue para construir productos modernos.',
          groups: [
            {
              id: 'frontend',
              title: 'Frontend',
              icon: '⚛️',
              type: 'circles',
              items: [
                { name: 'React', value: '95%', progress: '95%' },
                { name: 'JavaScript', value: '93%', progress: '93%' },
                { name: 'TypeScript', value: '86%', progress: '86%' },
                { name: 'React Router', value: '90%', progress: '90%' }
              ]
            },
            {
              id: 'ui',
              title: 'UI, motion and experience',
              icon: '✨',
              type: 'columns',
              items: [
                { name: 'Responsive Systems', value: '96%', height: '96%' },
                { name: 'Microinteractions', value: '90%', height: '90%' },
                { name: 'Animations', value: '88%', height: '88%' },
                { name: 'Visual Hierarchy', value: '92%', height: '92%' }
              ]
            },
            {
              id: 'backend',
              title: 'Backend / APIs',
              icon: '🧩',
              type: 'rows',
              items: [
                { name: 'Node.js', value: '88%' },
                { name: 'Express', value: '84%' },
                { name: 'REST APIs', value: '91%' },
                { name: 'Integrations', value: '86%' }
              ]
            },
            {
              id: 'tooling',
              title: 'Tooling / Deploy',
              icon: '🚀',
              type: 'horizontal',
              items: [
                {
                  name: 'Git / GitHub',
                  description: 'Versionado, ramas, manejo de repos y workflow',
                  value: '92%'
                },
                {
                  name: 'Vite / Build',
                  description: 'Build rápido, estructura limpia y deploy estático',
                  value: '90%'
                },
                {
                  name: 'Render / Pages',
                  description: 'Deploy de frontend y backend en servicios separados',
                  value: '87%'
                }
              ]
            }
          ]
        }
      : {
          badge: 'STACK',
          title: 'Technologies and capabilities',
          description:
            'Core technologies, visual experience, and deployment tooling to build modern products.',
          groups: [
            {
              id: 'frontend',
              title: 'Frontend',
              icon: '⚛️',
              type: 'circles',
              items: [
                { name: 'React', value: '95%', progress: '95%' },
                { name: 'JavaScript', value: '93%', progress: '93%' },
                { name: 'TypeScript', value: '86%', progress: '86%' },
                { name: 'React Router', value: '90%', progress: '90%' }
              ]
            },
            {
              id: 'ui',
              title: 'UI, motion and experience',
              icon: '✨',
              type: 'columns',
              items: [
                { name: 'Responsive Systems', value: '96%', height: '96%' },
                { name: 'Microinteractions', value: '90%', height: '90%' },
                { name: 'Animations', value: '88%', height: '88%' },
                { name: 'Visual Hierarchy', value: '92%', height: '92%' }
              ]
            },
            {
              id: 'backend',
              title: 'Backend / APIs',
              icon: '🧩',
              type: 'rows',
              items: [
                { name: 'Node.js', value: '88%' },
                { name: 'Express', value: '84%' },
                { name: 'REST APIs', value: '91%' },
                { name: 'Integrations', value: '86%' }
              ]
            },
            {
              id: 'tooling',
              title: 'Tooling / Deploy',
              icon: '🚀',
              type: 'horizontal',
              items: [
                {
                  name: 'Git / GitHub',
                  description: 'Versioning, branches, repo management and workflow',
                  value: '92%'
                },
                {
                  name: 'Vite / Build',
                  description: 'Fast build, clean structure and static deployment',
                  value: '90%'
                },
                {
                  name: 'Render / Pages',
                  description: 'Frontend and backend deployment in separate services',
                  value: '87%'
                }
              ]
            }
          ]
        }

  return (
    <section className="technologies-section">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-subtitle">{content.badge}</span>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-description">{content.description}</p>
        </div>

        <div className="tech-grid">
          {content.groups.map((group) => (
            <article className="tech-category-card reveal-up" key={group.id}>
              <div className="tech-category-header">
                <div className="tech-category-icon">{group.icon}</div>
                <h3>{group.title}</h3>
              </div>

              {group.type === 'circles' && (
                <div className="skills-circles">
                  {group.items.map((item) => (
                    <div className="skill-circle-card" key={item.name}>
                      <div className="skill-circle" style={{ '--value': item.progress }}>
                        <span>{item.value}</span>
                      </div>
                      <h3>{item.name}</h3>
                    </div>
                  ))}
                </div>
              )}

              {group.type === 'columns' && (
                <div className="skills-columns">
                  {group.items.map((item) => (
                    <div className="skill-column-card" key={item.name}>
                      <div className="skill-column-head">
                        <h3>{item.name}</h3>
                        <strong>{item.value}</strong>
                      </div>
                      <div className="skill-column-visual" style={{ '--bar-height': item.height }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {group.type === 'rows' && (
                <div className="skills-list">
                  {group.items.map((item) => (
                    <div className="skill-row" key={item.name}>
                      <div className="skill-row-top">
                        <span>{item.name}</span>
                        <strong>{item.value}</strong>
                      </div>
                      <div className="skill-row-bar">
                        <div className="skill-row-progress" style={{ width: item.value }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {group.type === 'horizontal' && (
                <div className="skills-horizontal-list">
                  {group.items.map((item) => (
                    <div className="skill-horizontal-card" key={item.name}>
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                      </div>
                      <span className="skill-horizontal-value">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies