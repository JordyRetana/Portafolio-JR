const ALLOWED_ORIGINS = new Set([
  'https://portafolio-jr-site.pages.dev',
  'http://localhost:5173',
  'http://127.0.0.1:5173'
])

const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')

const detectClient = (userAgent = '') => {
  const ua = userAgent.toLowerCase()
  const device = /ipad|tablet/.test(ua)
    ? 'Tablet'
    : /mobile|android|iphone/.test(ua)
      ? 'Movil'
      : 'Computadora'

  const browser = ua.includes('edg/')
    ? 'Edge'
    : ua.includes('opr/') || ua.includes('opera')
      ? 'Opera'
      : ua.includes('firefox/')
        ? 'Firefox'
        : ua.includes('chrome/') || ua.includes('crios/')
          ? 'Chrome'
          : ua.includes('safari/')
            ? 'Safari'
            : 'Otro navegador'

  const os = ua.includes('windows')
    ? 'Windows'
    : ua.includes('android')
      ? 'Android'
      : /iphone|ipad|ios/.test(ua)
        ? 'iOS'
        : ua.includes('mac os') || ua.includes('macintosh')
          ? 'macOS'
          : ua.includes('linux')
            ? 'Linux'
            : 'Otro sistema'

  const isBot = /bot|crawler|spider|headless|lighthouse|pagespeed|preview/.test(ua)
  return { device, browser, os, isBot }
}

const formatPage = (page = '/') => {
  const route = String(page).split('?')[0].slice(0, 120)
  const labels = {
    '/#/': 'Inicio',
    '/#/proyectos': 'Proyectos',
    '/#/experiencia': 'Experiencia',
    '/#/habilidades': 'Habilidades',
    '/#/contacto': 'Contacto'
  }
  return labels[route] || route || 'Inicio'
}

const getCorsHeaders = (request) => {
  const origin = request.headers.get('Origin') || ''
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.has(origin) ? origin : 'https://portafolio-jr-site.pages.dev',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
    'Content-Type': 'application/json; charset=utf-8'
  }
}

export default {
  async fetch(request, env) {
    const corsHeaders = getCorsHeaders(request)

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders })
    }

    if (request.method !== 'POST') {
      return Response.json({ ok: false, message: 'Method not allowed' }, { status: 405, headers: corsHeaders })
    }

    const origin = request.headers.get('Origin') || ''
    if (origin && !ALLOWED_ORIGINS.has(origin)) {
      return Response.json({ ok: false, message: 'Origin not allowed' }, { status: 403, headers: corsHeaders })
    }

    if (!env.TELEGRAM_TOKEN || !env.TELEGRAM_CHAT_ID) {
      return Response.json({ ok: false, message: 'Telegram is not configured' }, { status: 500, headers: corsHeaders })
    }

    let data
    try {
      data = await request.json()
    } catch {
      return Response.json({ ok: false, message: 'Invalid JSON' }, { status: 400, headers: corsHeaders })
    }

    const client = detectClient(data.userAgent)
    if (client.isBot) {
      return Response.json({ ok: true, ignored: 'automated-client' }, { status: 202, headers: corsHeaders })
    }

    const cf = request.cf || {}
    const date = new Date().toLocaleString('es-CR', {
      timeZone: 'America/Costa_Rica',
      dateStyle: 'medium',
      timeStyle: 'short'
    })
    const location = [cf.city, cf.region, cf.country].filter(Boolean).join(', ') || 'Ubicacion no disponible'
    const visitorLabel = data.visitorType === 'new' ? 'Primera visita' : `Visitante recurrente (${data.visitCount || 2})`
    const shortVisitorId = String(data.visitorId || 'sin-id').slice(0, 8)

    const message = [
      '<b>👤 Nueva visita al portafolio</b>',
      '',
      `<b>Estado:</b> ${escapeHtml(visitorLabel)}`,
      `<b>Pagina:</b> ${escapeHtml(formatPage(data.page))}`,
      `<b>Origen:</b> ${escapeHtml(data.source || 'Acceso directo')}`,
      `<b>Ubicacion:</b> ${escapeHtml(location)}`,
      `<b>Dispositivo:</b> ${escapeHtml(`${client.device} · ${client.browser} · ${client.os}`)}`,
      `<b>Pantalla:</b> ${escapeHtml(data.screen || 'No disponible')}`,
      `<b>Idioma:</b> ${escapeHtml(data.language || 'No disponible')}`,
      `<b>Hora CR:</b> ${escapeHtml(date)}`,
      '',
      `<i>Visitante ${escapeHtml(shortVisitorId)} · Cloudflare ${escapeHtml(cf.colo || 'edge')}</i>`
    ].join('\n')

    const telegramResponse = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    })

    if (!telegramResponse.ok) {
      console.error('Telegram API error', telegramResponse.status)
      return Response.json({ ok: false, message: 'Telegram delivery failed' }, { status: 502, headers: corsHeaders })
    }

    return Response.json({ ok: true, notified: true }, { headers: corsHeaders })
  }
}
