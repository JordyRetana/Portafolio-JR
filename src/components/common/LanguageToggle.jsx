import { useLanguage } from '../../i18n/LanguageContext'

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button type="button" className="language-toggle" onClick={toggleLanguage}>
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  )
}

export default LanguageToggle
