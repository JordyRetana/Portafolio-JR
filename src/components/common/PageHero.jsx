function PageHero({ badge, title, subtitle, className = '', children }) {
  return (
    <section className={`page-hero ${className}`}>
      <div className="container page-hero-inner reveal-up">
        {badge ? <div className="page-hero-badge">{badge}</div> : null}
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-subtitle">{subtitle}</p>
        {children}
      </div>
    </section>
  )
}

export default PageHero
