const BACKEND_BASE_URL =
  import.meta.env.VITE_BACKEND_BASE_URL || 'https://portafolio-jr-backend.onrender.com'

let warmupPromise = null
let lastWarmupTime = 0
let warmupIntervalId = null
const WARMUP_COOLDOWN_MS = 10 * 60 * 1000
const WARMUP_INTERVAL_MS = 4 * 60 * 1000

function runWhenIdle(callback) {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, { timeout: 3000 })
  }

  return window.setTimeout(callback, 1200)
}

export async function warmupBackend(force = false) {
  const now = Date.now()

  if (!force && warmupPromise && now - lastWarmupTime < WARMUP_COOLDOWN_MS) {
    return warmupPromise
  }

  lastWarmupTime = now

  warmupPromise = Promise.allSettled([
    fetch(`${BACKEND_BASE_URL}/api/health`, {
      method: 'GET',
      cache: 'no-store'
    }),
    fetch(`${BACKEND_BASE_URL}/api/chat/warmup`, {
      method: 'GET',
      cache: 'no-store'
    })
  ])
    .then((results) => {
      const healthOk = results[0].status === 'fulfilled' && results[0].value.ok
      const chatWarmupOk = results[1].status === 'fulfilled' && results[1].value.ok

      if (!healthOk && !chatWarmupOk) {
        throw new Error('Warmup failed')
      }

      return { healthOk, chatWarmupOk }
    })
    .catch((error) => {
      console.error('Backend warmup error:', error)
      return null
    })

  return warmupPromise
}

export function scheduleBackendWarmup() {
  runWhenIdle(() => {
    warmupBackend(true)
  })

  if (!warmupIntervalId) {
    warmupIntervalId = window.setInterval(() => {
      warmupBackend(true)
    }, WARMUP_INTERVAL_MS)
  }
}

export { BACKEND_BASE_URL }
