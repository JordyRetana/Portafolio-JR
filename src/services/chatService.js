import { BACKEND_BASE_URL } from './backendWarmup'

export async function sendChatMessage({ message, language }) {
  const response = await fetch(`${BACKEND_BASE_URL}/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message, language })
  })

  const data = await response.json().catch(() => null)

  if (!response.ok || !data?.ok || !data?.answer) {
    return {
      ok: false,
      fallback: true,
      message: data?.message || 'AI unavailable'
    }
  }

  return {
    ok: true,
    answer: data.answer,
    provider: data.provider || 'groq'
  }
}
