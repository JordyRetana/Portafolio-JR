# Cloudflare Migration Notes

Objetivo: mover el portafolio de Render/GitHub Pages a Cloudflare.

## Repos

- Frontend: https://github.com/JordyRetana/Portafolio-JR
- Backend: https://github.com/JordyRetana/Portafolio-JR-backend

## Cloudflare

- Dashboard: https://dash.cloudflare.com/1f3ced9721f8add504ae942fc9c16fa6/home
- Frontend recomendado: Cloudflare Pages
- Backend recomendado: Cloudflare Workers
- Worker preparado: `portafolio-jr-backend`

## Cambios ya hechos

- Eliminados workflows que mantenian Render despierto.
- Eliminado deploy de GitHub Pages.
- Frontend ya no apunta por defecto a Render.
- `vite.config.js` usa `base: '/'`, listo para Cloudflare Pages.
- Frontend usa `VITE_BACKEND_BASE_URL` para definir el backend.

## Variables necesarias en Cloudflare Pages

Configurar en el proyecto de Pages:

```txt
VITE_BACKEND_BASE_URL=https://TU_WORKER_URL
```

Si el Worker queda en el mismo dominio con ruta `/api`, se puede dejar vacia.

## Backend

El Worker esta preparado en el repo backend, carpeta `backend`.

Rutas esperadas:

- `GET /api/health`
- `POST /api/chat`
- `GET /api/chat/warmup`
- `POST /api/contact`

Variables/secrets necesarias en Cloudflare Workers:

```txt
GROQ_API_KEY=...
RESEND_API_KEY=...
GROQ_MODEL=llama-3.1-8b-instant
RESEND_FROM=Portafolio JR <onboarding@resend.dev>
CONTACT_TO_EMAIL=jretanamendez@gmail.com
```

No subir claves al repo.

## Build Frontend

```txt
npm install
npm run build
```

Cloudflare Pages:

```txt
Build command: npm run build
Build output directory: dist
Root directory: /
```

## Backend Worker

Cloudflare Workers puede desplegar desde el repo backend usando la carpeta `backend`.

```txt
Root directory: backend
Build command: npm install
Deploy command: npm run deploy
```

Tambien se puede desplegar con Wrangler:

```txt
cd backend
npm install
npm run deploy
```
