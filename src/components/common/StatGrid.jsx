function StatGrid({ items = [], className = '', itemClass = 'stat-card' }) {
  return (
    <div className={`${className} stagger-children`}>
      {items.map((item) => (
        <div className={itemClass} key={item.label}>
          <div className="stat-number">{item.value}</div>
          <div className="stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  )
}

export default StatGrid
