export const notifyVisitToTelegram = async () => {
  try {
    await fetch('https://portafolio-telegram.jretanamendez.workers.dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userAgent: navigator.userAgent,
        language: navigator.language,
        page: window.location.href
      })
    })
  } catch (error) {
    console.error('Error enviando alerta a Telegram:', error)
  }
}

export const scheduleVisitNotification = () => {
  const notify = () => {
    notifyVisitToTelegram()
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(notify, { timeout: 4000 })
    return
  }

  window.setTimeout(notify, 1600)
}
