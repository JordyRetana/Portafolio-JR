function SectionHeading({ badge, title, description }) {
  return (
    <div className="section-header reveal-up">
      {badge ? <span className="section-subtitle">{badge}</span> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
