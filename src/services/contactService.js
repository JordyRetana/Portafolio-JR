import { BACKEND_BASE_URL } from './backendWarmup'

export const sendContactMessage = async (payload) => {
  const response = await fetch(`${BACKEND_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  let data = null

  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok) {
    return {
      ok: false,
      message: data?.message || 'Request failed'
    }
  }

  return data || { ok: true }
}