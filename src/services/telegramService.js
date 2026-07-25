const TELEGRAM_WORKER_URL = 'https://portafolio-telegram.jretanamendez.workers.dev'
const VISITOR_ID_KEY = 'portfolio_visitor_id'
const LAST_NOTIFICATION_KEY = 'portfolio_last_visit_notification'
const VISIT_COUNT_KEY = 'portfolio_visit_count'
const NOTIFICATION_COOLDOWN_MS = 6 * 60 * 60 * 1000

const safeStorage = {
  get(key) {
    try {
      return window.localStorage.getItem(key)
    } catch {
      return null
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value)
    } catch {
      // La visita sigue funcionando aunque el navegador bloquee localStorage.
    }
  }
}

const getVisitorId = () => {
  const storedId = safeStorage.get(VISITOR_ID_KEY)
  if (storedId) return storedId

  const newId = globalThis.crypto?.randomUUID?.()
    || `visitor-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`

  safeStorage.set(VISITOR_ID_KEY, newId)
  return newId
}

const getTrafficSource = () => {
  if (!document.referrer) return 'Acceso directo'

  try {
    const referrer = new URL(document.referrer)
    if (referrer.hostname === window.location.hostname) return 'Navegacion interna'
    if (referrer.hostname.includes('google.')) return 'Google'
    if (referrer.hostname.includes('linkedin.')) return 'LinkedIn'
    if (referrer.hostname.includes('github.')) return 'GitHub'
    if (referrer.hostname.includes('facebook.') || referrer.hostname.includes('instagram.')) {
      return 'Meta / redes sociales'
    }
    return referrer.hostname.replace(/^www\./, '')
  } catch {
    return 'Referencia externa'
  }
}

const buildVisitPayload = () => {
  const previousVisitCount = Number.parseInt(safeStorage.get(VISIT_COUNT_KEY) || '0', 10)
  const visitCount = Number.isFinite(previousVisitCount) ? previousVisitCount + 1 : 1
  safeStorage.set(VISIT_COUNT_KEY, String(visitCount))

  return {
    visitorId: getVisitorId(),
    visitorType: visitCount === 1 ? 'new' : 'returning',
    visitCount,
    page: `${window.location.pathname}${window.location.hash}`,
    source: getTrafficSource(),
    referrer: document.referrer || '',
    language: navigator.language || '',
    userAgent: navigator.userAgent || '',
    platform: navigator.platform || '',
    screen: `${window.screen?.width || 0}x${window.screen?.height || 0}`,
    viewport: `${window.innerWidth || 0}x${window.innerHeight || 0}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
    title: document.title || 'Portafolio JR'
  }
}

export const notifyVisitToTelegram = async () => {
  const response = await fetch(TELEGRAM_WORKER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(buildVisitPayload()),
    keepalive: true
  })

  if (!response.ok) {
    throw new Error(`Telegram visit notification failed: ${response.status}`)
  }
}

export const scheduleVisitNotification = () => {
  const lastNotification = Number.parseInt(safeStorage.get(LAST_NOTIFICATION_KEY) || '0', 10)
  const hasRecentNotification = Number.isFinite(lastNotification)
    && Date.now() - lastNotification < NOTIFICATION_COOLDOWN_MS

  if (hasRecentNotification) return

  // Se marca antes del request para evitar duplicados por React StrictMode o recargas rapidas.
  safeStorage.set(LAST_NOTIFICATION_KEY, String(Date.now()))

  const notify = () => {
    notifyVisitToTelegram().catch((error) => {
      safeStorage.set(LAST_NOTIFICATION_KEY, '0')
      console.error('Error enviando alerta a Telegram:', error)
    })
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(notify, { timeout: 4000 })
    return
  }

  window.setTimeout(notify, 1600)
}
