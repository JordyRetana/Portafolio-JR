function GlowBackground({ className = '', glow1Class = '', glow2Class = '', showGrid = false }) {
  return (
    <div className={className}>
      <span className={`page-hero-glow page-hero-glow-1 glow-pulse ${glow1Class}`}></span>
      <span className={`page-hero-glow page-hero-glow-2 glow-pulse ${glow2Class}`}></span>
      {showGrid ? <span className="hero-grid-lines"></span> : null}
    </div>
  )
}

export default GlowBackground
