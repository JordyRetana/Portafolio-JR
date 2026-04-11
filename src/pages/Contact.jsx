import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import ContactFaq from '../components/contact/ContactFaq'
import ContactCta from '../components/contact/ContactCta'
import { sendContactMessage } from '../services/contactService'
import GlowBackground from '../components/common/GlowBackground'
import StatGrid from '../components/common/StatGrid'
import InfoBadge from '../components/common/InfoBadge'
import { warmupBackend } from '../services/backendWarmup'

function Contact() {
  const { t, language } = useLanguage()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '',
    message: '',
    privacy: false,
    newsletter: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState(false)

  const stats = [
    { value: '24', label: t('contact.stats.response_hours') },
    { value: '100', label: t('contact.stats.success_rate') },
    { value: '12+', label: t('contact.stats.projects') }
  ]

  useEffect(() => {
    warmupBackend()
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSubmitError(false)
    setSubmitMessage('')

    try {
      await warmupBackend()

      const response = await sendContactMessage(formData)

      if (response.ok) {
        setSubmitMessage(
          language === 'es'
            ? 'Mensaje enviado correctamente.'
            : 'Message sent successfully.'
        )

        setFormData({
          name: '',
          email: '',
          subject: '',
          budget: '',
          message: '',
          privacy: false,
          newsletter: false
        })
      } else {
        setSubmitError(true)
        setSubmitMessage(
          response.message ||
            (language === 'es'
              ? 'No se pudo enviar el mensaje.'
              : 'Message could not be sent.')
        )
      }
    } catch {
      setSubmitError(true)
      setSubmitMessage(
        language === 'es'
          ? 'Hubo un error al enviar el mensaje.'
          : 'There was an error sending the message.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <GlowBackground className="contact-hero-background" />
        <div className="container reveal-up">
          <div className="contact-badge">{t('contact.badge')}</div>
          <h1 className="contact-title">
            {t('contact.title')} <span>{t('contact.title_accent')}</span>
          </h1>
          <p className="contact-subtitle">{t('contact.subtitle')}</p>
          <StatGrid items={stats} className="contact-stats" itemClass="contact-stat" />
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            <article className="contact-card contact-info-card">
              <div className="contact-card-header">
                <InfoBadge className="contact-card-mini-badge">INFO</InfoBadge>
                <h2>{t('contact.info.title')}</h2>
                <p>{t('contact.info.subtitle')}</p>
              </div>

              <div className="contact-info-list">
                {[
                  {
                    title: t('contact.info.email_title'),
                    badge: t('contact.info.active'),
                    value: 'Jretanamendez@gmail.com',
                    href: 'mailto:Jretanamendez@gmail.com',
                    note: t('contact.info.email_note')
                  },
                  {
                    title: t('contact.info.phone_title'),
                    badge: t('contact.info.active'),
                    value: '+506 8713 8971',
                    href: 'https://wa.me/50687138971?text=Hola%20Jordy,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte',
                    note: t('contact.info.phone_note')
                  }
                ].map((item) => (
                  <div className="contact-info-item" key={item.title}>
                    <div className="contact-info-top">
                      <h3>{item.title}</h3>
                      <span className="info-badge">{item.badge}</span>
                    </div>

                    <a
                      href={item.href}
                      className="contact-link"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {item.value}
                    </a>

                    <p>{item.note}</p>
                  </div>
                ))}

                <div className="contact-info-item">
                  <div className="contact-info-top">
                    <h3>{t('contact.info.location_title')}</h3>
                    <span className="info-badge">{t('contact.info.remote')}</span>
                  </div>
                  <span className="contact-text">{t('contact.info.location_value')}</span>
                  <p>{t('contact.info.location_note')}</p>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-top">
                    <h3>{t('contact.info.availability_title')}</h3>
                    <span className="info-badge">{t('contact.info.open')}</span>
                  </div>
                  <span className="contact-text">{t('contact.info.availability_status')}</span>
                  <p>{t('contact.info.availability_note')}</p>
                </div>
              </div>

              <div className="social-block">
                <h3>{t('contact.info.social_title')}</h3>
                <div className="social-grid">
                  <a
                    href="https://github.com/JordyRetana"
                    target="_blank"
                    rel="noreferrer"
                    className="social-card"
                  >
                    <strong>GitHub</strong>
                    <p>{t('contact.info.github_desc')}</p>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jordy-retana-553632164/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-card"
                  >
                    <strong>LinkedIn</strong>
                    <p>{t('contact.info.linkedin_desc')}</p>
                  </a>
                </div>
              </div>
            </article>

            <article className="contact-card contact-form-card">
              <div className="contact-card-header">
                <InfoBadge className="contact-card-mini-badge">FORM</InfoBadge>
                <h2>{t('contact.form.title')}</h2>
                <p>{t('contact.form.subtitle')}</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{t('contact.form.name_label')}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.name_placeholder')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>{t('contact.form.email_label')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.email_placeholder')}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>{t('contact.form.subject_label')}</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        {t('contact.form.subject_placeholder')}
                      </option>
                      <option value="project">{t('contact.form.project_option')}</option>
                      <option value="collaboration">{t('contact.form.collaboration_option')}</option>
                      <option value="consulting">{t('contact.form.consulting_option')}</option>
                      <option value="job">{t('contact.form.job_option')}</option>
                      <option value="other">{t('contact.form.other_option')}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>{t('contact.form.budget_label')}</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">{t('contact.form.budget_placeholder')}</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-30k">$15,000 - $30,000</option>
                      <option value="30k+">$30,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>{t('contact.form.message_label')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.message_placeholder')}
                    rows="7"
                    required
                  />
                </div>

                <div className="form-checks">
                  <label className="checkbox-row">
                    <input
                      type="checkbox"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      required
                    />
                    <span>{t('contact.form.privacy_text')}</span>
                  </label>

                  <label className="checkbox-row">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                    />
                    <span>{t('contact.form.newsletter_text')}</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? language === 'es'
                      ? 'Conectando y enviando...'
                      : 'Connecting and sending...'
                    : t('contact.form.send_button')}
                </button>

                {submitMessage ? (
                  <div className={`form-status ${submitError ? 'error' : 'success'}`}>
                    {submitMessage}
                  </div>
                ) : null}
              </form>
            </article>
          </div>
        </div>
      </section>

      <ContactFaq />
      <ContactCta />
    </main>
  )
}

export default Contact