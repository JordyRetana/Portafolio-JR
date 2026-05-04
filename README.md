# Portafolio JR

Portafolio personal de Jordy Retana, construido con React y Vite. Presenta proyectos destacados, experiencia, habilidades y un formulario de contacto conectado a servicios externos.

## Caracteristicas

- Interfaz responsive con modo claro/oscuro.
- Soporte de idioma en espanol e ingles.
- Galeria de proyectos organizada por prioridad profesional.
- Home con tres proyectos destacados.
- Formulario de contacto conectado al backend.
- Portadas de proyectos en `public/assets/images`.

## Stack

- React
- Vite
- React Router
- CSS modular por secciones
- JavaScript

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Luego abre:

```text
http://127.0.0.1:5173
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Estructura

```text
src/
  components/
  data/
  i18n/
  pages/
  routes/
  services/
  styles/
  theme/
public/
  assets/
    images/
    docs/
```

## Proyectos

Los proyectos principales se configuran en:

```text
src/data/projects.js
```

Los tres proyectos destacados del Home se configuran en:

```text
src/data/featuredProjects.js
```

Las traducciones se mantienen en:

```text
src/i18n/translations.js
```

## Portadas

Cada proyecto puede tener su propia carpeta de imagen en:

```text
public/assets/images/NOMBRE_DEL_PROYECTO/
```

La portada recomendada es:

```text
portfolio-cover.jpg
```

Usa imagenes livianas y en formato 16:9 para que la galeria cargue rapido y mantenga una presentacion profesional.

## Notas

El proyecto usa `HashRouter`, por lo que funciona bien en GitHub Pages sin configuracion adicional de rutas del servidor.
