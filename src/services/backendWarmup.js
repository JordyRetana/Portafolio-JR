const BACKEND_BASE_URL = 'https://portafolio-jr-backend.onrender.com'

let warmupPromise = null
let lastWarmupTime = 0
const WARMUP_COOLDOWN_MS = 10 * 60 * 1000

export async function warmupBackend(force = false) {
  const now = Date.now()

  if (!force && warmupPromise && now - lastWarmupTime < WARMUP_COOLDOWN_MS) {
    return warmupPromise
  }

  lastWarmupTime = now

  warmupPromise = fetch(`${BACKEND_BASE_URL}/api/health`, {
    method: 'GET',
    cache: 'no-store'
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Warmup failed')
      }
      return response.json()
    })
    .catch((error) => {
      console.error('Backend warmup error:', error)
      return null
    })

  return warmupPromise
}

export { BACKEND_BASE_URL }