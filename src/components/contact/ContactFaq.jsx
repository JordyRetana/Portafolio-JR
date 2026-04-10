import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import SectionHeading from '../common/SectionHeading'

function ContactFaq() {
  const { t } = useLanguage()
  const items = t('contact.faq.items')
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="contact-faq-section">
      <div className="container">
        <SectionHeading badge="FAQ" title={t('contact.faq.title')} description={t('contact.faq.subtitle')} />
        <div className="faq-list stagger-children">
          {Array.isArray(items) && items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <article className={`faq-item ${isOpen ? 'open' : ''}`} key={item.question}>
                <button type="button" className="faq-question" onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span>{item.question}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen ? <div className="faq-answer"><p>{item.answer}</p></div> : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactFaq
