import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { projects } from '../../data/projects'
import { skillCategories, additionalTools } from '../../data/skills'
import { experienceItems } from '../../data/experience'

const STORAGE_KEY = 'portfolio-chat-history'

const profile = {
  name: 'Jordy Jesus Retana Mendez',
  shortName: 'Jordy',
  role: {
    es: 'Desarrollador Full Stack y estudiante avanzado de Ingenieria en Sistemas',
    en: 'Full Stack Developer and advanced Systems Engineering student'
  },
  location: {
    es: 'Hatillo, San Jose, Costa Rica',
    en: 'Hatillo, San Jose, Costa Rica'
  },
  email: 'jretanamendez@gmail.com',
  phone: '+506 8713-8971',
  whatsapp: 'https://wa.me/50687138971?text=Hola%20Jordy,%20vi%20tu%20portafolio%20y%20me%20gustaria%20contactarte',
  github: 'https://github.com/JordyRetana',
  linkedin: 'https://www.linkedin.com/in/jordyretana',
  portfolio: 'https://jordyretana.github.io/Portafolio-JR/',
  cv: `${import.meta.env.BASE_URL}assets/docs/Espa%C3%B1ol/Jordy%20Retana%20CV.pdf`
}

const cvKnowledge = {
  summary: {
    es:
      'Jordy es estudiante avanzado de Ingenieria en Sistemas con experiencia en desarrollo Full Stack. Ha trabajado con aplicaciones web usando .NET, React y Spring Boot, diseno de APIs REST, bases de datos relacionales, arquitectura por capas, OOP, Git y flujos colaborativos agiles.',
    en:
      'Jordy is an advanced Systems Engineering student with Full Stack development experience. He has built web applications with .NET, React and Spring Boot, designed REST APIs, worked with relational databases, layered architecture, OOP, Git and Agile collaboration.'
  },
  education: {
    es:
      'Estudia Bachillerato en Ingenieria en Sistemas en Universidad Fidelitas. Segun su CV, esta en cuarto ano y cursa desde 2023.',
    en:
      'He studies a Bachelor Degree in Systems Engineering at Universidad Fidelitas. According to his CV, he is a fourth-year student and has been studying there since 2023.'
  },
  work: {
    es:
      'Tambien tiene experiencia profesional en CooperVision como asistente del Departamento de Calidad, de abril de 2022 a enero de 2023. Trabajo con procesos de esterilizacion, control de calidad, verificacion de muestras, identificacion de desviaciones y apoyo como Buddy Trainer para nuevos colaboradores.',
    en:
      'He also has professional experience at CooperVision as a Quality Department Assistant from April 2022 to January 2023. He worked with sterilization processes, quality control, sample verification, deviation identification and supported new employees as a Buddy Trainer.'
  },
  stack: {
    es:
      'Su stack fuerte combina C#, Java, JavaScript, SQL, React, .NET, Spring Boot, Node.js, APIs REST, PostgreSQL, Oracle, Git y Docker basico.',
    en:
      'His strongest stack combines C#, Java, JavaScript, SQL, React, .NET, Spring Boot, Node.js, REST APIs, PostgreSQL, Oracle, Git and basic Docker.'
  },
  strengths: {
    es:
      'Sus puntos fuertes son construir interfaces claras, conectar frontend con backend, disenar APIs REST, ordenar codigo con OOP y arquitectura por capas, validar datos, depurar errores y convertir necesidades del negocio en soluciones mantenibles.',
    en:
      'His strengths are building clear interfaces, connecting frontend and backend, designing REST APIs, organizing code with OOP and layered architecture, validating data, debugging issues and turning business needs into maintainable software.'
  }
}

const tutoringKnowledge = {
  summary: {
    es:
      'Jordy tambien da tutorias personalizadas de programacion 1 a 1. Ayuda a aprender desde cero, reforzar cursos de la U, preparar examenes, mejorar proyectos y avanzar con rutas practicas.',
    en:
      'Jordy also gives personalized 1-on-1 programming tutoring. He helps students start from zero, reinforce university courses, prepare for exams, improve projects and follow practical learning paths.'
  },
  topics: {
    es:
      'Enseña logica de programacion, Python, JavaScript, Java, C# .NET, SQL, React, Node.js, desarrollo web, APIs y bases de datos.',
    en:
      'He teaches programming logic, Python, JavaScript, Java, C# .NET, SQL, React, Node.js, web development, APIs and databases.'
  },
  levels: {
    es:
      'Trabaja con principiantes, nivel intermedio, personas avanzadas y grupos pequenos de 2 a 4 personas.',
    en:
      'He works with beginners, intermediate learners, advanced students and small groups of 2 to 4 people.'
  },
  prices: {
    es:
      'Los precios dependen del lenguaje, nivel y horas. En Tutorías JR aparecen referencias desde 6000 CRC por hora para temas iniciales, con descuentos para estudiantes, referidos y grupos.',
    en:
      'Prices depend on the language, level and hours. Tutorias JR includes references starting around 6000 CRC per hour for beginner topics, with discounts for students, referrals and groups.'
  },
  booking: {
    es:
      'Para agendar, lo mejor es escribirle por WhatsApp y contarle que queres aprender, tu nivel y horarios disponibles.',
    en:
      'To book, the best option is to message him on WhatsApp and share what you want to learn, your level and available times.'
  }
}

const quickActions = {
  es: ['Perfil', 'Clases', 'Lenguajes', 'Contacto'],
  en: ['Profile', 'Classes', 'Languages', 'Contact']
}

const copy = {
  es: {
    title: 'Asistente de Jordy',
    eyebrow: 'Portfolio concierge',
    status: 'Listo para conversar',
    placeholder: 'Preguntame algo...',
    open: 'Abrir asistente',
    close: 'Cerrar',
    send: 'Enviar',
    typing: 'Pensando una respuesta...',
    clear: 'Reiniciar',
    online: 'Online',
    welcome:
      'Hola, soy el asistente de Jordy. Puedo responder sobre su perfil, proyectos, clases, lenguajes, CV y contacto. Escribime natural, aunque se te vaya algun typo.',
    fallback:
      'Te entiendo. Puedo responder sobre perfil, proyectos, clases, lenguajes, precios, CV o contacto. Probame con una pregunta corta.',
    greeting:
      'Hola. Soy el asistente de Jordy; preguntame por su perfil, proyectos, lenguajes o contacto.',
    thanks:
      'Con gusto. Puedo darte un resumen corto o recomendarte un proyecto para revisar.',
    contact:
      'Claro. Lo mejor es escribirle por correo o WhatsApp. Esta abierto a proyectos y oportunidades Full Stack.',
    tutoring:
      'Si. Jordy da tutorias de programacion 1 a 1 y tambien puede apoyar grupos pequenos. Enseña logica, Python, JavaScript, Java, C#, SQL, React, Node.js y desarrollo web.',
    availability:
      'Jordy esta abierto a nuevos proyectos y oportunidades. Por su perfil, encaja bien en roles junior o trainee Full Stack, frontend React, backend .NET/Spring Boot, integraciones API y proyectos web con bases de datos.',
    cv:
      'Su CV destaca Ingenieria en Sistemas, React, .NET, Spring Boot, APIs REST, SQL, PostgreSQL, Oracle, Git y Docker basico.',
    profileLabel: 'Perfil',
    navLabel: 'Abrir seccion'
  },
  en: {
    title: 'Jordy Assistant',
    eyebrow: 'Portfolio concierge',
    status: 'Ready to talk',
    placeholder: 'Ask me anything...',
    open: 'Open assistant',
    close: 'Close',
    send: 'Send',
    typing: 'Thinking through an answer...',
    clear: 'Reset',
    online: 'Online',
    welcome:
      'Hi, I am Jordy assistant. I can answer about his profile, projects, classes, languages, CV and contact. Write naturally, even with typos.',
    fallback:
      'I follow you. I can answer about profile, projects, classes, languages, prices, CV or contact. Try a short question.',
    greeting:
      'Hi. I am Jordy assistant; ask me about his profile, projects, languages or contact.',
    thanks:
      'Gladly. I can give you a short summary or recommend one project to review.',
    contact:
      'Sure. Email and WhatsApp are the best channels. He is open to Full Stack projects and opportunities.',
    tutoring:
      'Yes. Jordy gives 1-on-1 programming tutoring and can also support small groups. He teaches logic, Python, JavaScript, Java, C#, SQL, React, Node.js and web development.',
    availability:
      'Jordy is open to new projects and opportunities. His profile fits junior or trainee Full Stack roles, React frontend, .NET/Spring Boot backend, API integrations and database-backed web projects.',
    cv:
      'His CV highlights Systems Engineering, React, .NET, Spring Boot, REST APIs, SQL, PostgreSQL, Oracle, Git and basic Docker.',
    profileLabel: 'Profile',
    navLabel: 'Open section'
  }
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s+#.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function hasAny(text, words) {
  return words.some((word) => text.includes(word))
}

function getWords(text) {
  return text.split(' ').filter(Boolean)
}

function editDistance(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, index) => [index])

  for (let index = 0; index <= a.length; index += 1) {
    matrix[0][index] = index
  }

  for (let row = 1; row <= b.length; row += 1) {
    for (let col = 1; col <= a.length; col += 1) {
      matrix[row][col] =
        b[row - 1] === a[col - 1]
          ? matrix[row - 1][col - 1]
          : Math.min(
              matrix[row - 1][col - 1] + 1,
              matrix[row][col - 1] + 1,
              matrix[row - 1][col] + 1
            )
    }
  }

  return matrix[b.length][a.length]
}

function fuzzyIncludes(text, terms) {
  const words = getWords(text)

  return terms.some((term) => {
    const cleanTerm = normalize(term)
    if (text.includes(cleanTerm)) return true
    if (cleanTerm.includes(' ')) return false

    return words.some((word) => {
      if (word.length < 4 || cleanTerm.length < 4) return false
      const distance = editDistance(word, cleanTerm)
      const allowedDistance = cleanTerm.length > 8 ? 3 : 2
      return distance <= allowedDistance || (cleanTerm.length >= 7 && word === cleanTerm.slice(0, 5))
    })
  })
}

function isDetailedQuestion(text) {
  return fuzzyIncludes(text, [
    'detalle',
    'detallado',
    'explica',
    'explicame',
    'cuentame',
    'profundiza',
    'completo',
    'detail',
    'explain',
    'full',
    'complete'
  ])
}

function wantsLanguages(text) {
  return fuzzyIncludes(text, [
    'lenguaje',
    'lenguajes',
    'lenguage',
    'lenguaje manea',
    'lenguaje maneja',
    'lenguaje usa',
    'idioma',
    'idiomas',
    'language',
    'languages',
    'programming language',
    'tech language'
  ])
}

function wantsTutoring(text) {
  return fuzzyIncludes(text, [
    'clase',
    'clases',
    'curso',
    'cursos',
    'tutoria',
    'tutorias',
    'ensenar',
    'enseña',
    'aprender',
    'programacion',
    'profesor',
    'teacher',
    'classes',
    'course',
    'courses',
    'tutoring',
    'teach',
    'learn',
    'lesson'
  ])
}

function wantsPricing(text) {
  return fuzzyIncludes(text, [
    'precio',
    'precios',
    'costo',
    'cuanto cobra',
    'cuanto vale',
    'tarifa',
    'pago',
    'price',
    'pricing',
    'cost',
    'rate',
    'payment'
  ])
}

function wantsBooking(text) {
  return fuzzyIncludes(text, [
    'agendar',
    'agenda',
    'reservar',
    'clase gratis',
    'horario',
    'coordinar',
    'book',
    'schedule',
    'reserve',
    'availability',
    'time'
  ])
}

function wantsEducation(text) {
  return fuzzyIncludes(text, [
    'donde estudio',
    'donde estudia',
    'donde estudio jordy',
    'que estudio',
    'que estudia',
    'estudio',
    'estudia',
    'educacion',
    'universidad',
    'fidelitas',
    'carrera',
    'bachillerato',
    'where study',
    'where did he study',
    'where does he study',
    'education',
    'university',
    'degree',
    'college'
  ])
}

function wantsExperience(text) {
  return fuzzyIncludes(text, [
    'cuanto tiempo tiene de experiencia',
    'cuanto tiempo de experiencia',
    'anos de experiencia',
    'años de experiencia',
    'experiencia',
    'trayectoria',
    'trabajo',
    'trabajado',
    'coopervision',
    'calidad',
    'quality',
    'experience',
    'career',
    'work history',
    'how much experience',
    'how long experience'
  ])
}

function wantsLocation(text) {
  return fuzzyIncludes(text, [
    'donde vive',
    'donde esta',
    'ubicacion',
    'pais',
    'ciudad',
    'costa rica',
    'san jose',
    'hatillo',
    'location',
    'where is he',
    'where live',
    'country',
    'city'
  ])
}

function wantsAvailability(text) {
  return fuzzyIncludes(text, [
    'disponible',
    'disponibilidad',
    'contratar',
    'contratacion',
    'oportunidad',
    'empleo',
    'trabajo remoto',
    'freelance',
    'hire',
    'available',
    'availability',
    'job',
    'opportunity',
    'remote',
    'freelancer'
  ])
}

function wantsRecommendation(text) {
  return fuzzyIncludes(text, [
    'recomienda',
    'recomendacion',
    'mejor proyecto',
    'proyecto principal',
    'cual proyecto',
    'que proyecto veo',
    'recommend',
    'best project',
    'main project',
    'which project'
  ])
}

function wantsFit(text) {
  return fuzzyIncludes(text, [
    'por que contratar',
    'porque contratar',
    'vale la pena',
    'por que elegir',
    'que aporta',
    'empresa',
    'equipo',
    'rol',
    'puesto',
    'why hire',
    'why choose',
    'what can he bring',
    'team',
    'company',
    'role'
  ])
}

function wantsSoftSkills(text) {
  return fuzzyIncludes(text, [
    'habilidades blandas',
    'soft skills',
    'comunicacion',
    'equipo',
    'agile',
    'scrum',
    'colaboracion',
    'responsable',
    'communication',
    'teamwork',
    'collaboration'
  ])
}

function wantsLinks(text) {
  return fuzzyIncludes(text, [
    'github',
    'linkedin',
    'redes',
    'links',
    'enlaces',
    'repos',
    'repositorios',
    'social',
    'profiles'
  ])
}

function wantsUnknownPersonal(text) {
  return fuzzyIncludes(text, [
    'edad',
    'cuantos anos tiene',
    'cuantos años tiene',
    'fecha nacimiento',
    'age',
    'birthday',
    'birth date'
  ])
}

function shouldSearchProject(text) {
  return fuzzyIncludes(text, [
    'proyecto',
    'projects',
    'project',
    'portafolio',
    'portfolio',
    'demo',
    'github',
    'repositorio',
    'repository',
    'codigo',
    'code'
  ])
}

function getMatchedProject(text, translatedProjects) {
  if (!shouldSearchProject(text)) return null

  const words = new Set(getWords(text))
  const ignoredTokens = new Set([
    'project',
    'proyecto',
    'portfolio',
    'portafolio',
    'studio',
    'profile',
    'game',
    'app',
    'web',
    'demo',
    'github',
    'code',
    'codigo'
  ])

  return translatedProjects.find((project) => {
    const directName = normalize(project.title)
    const directKey = normalize(project.key).replaceAll('-', ' ')
    if (text.includes(directName) || text.includes(directKey)) return true

    const tokens = normalize(`${project.key} ${project.title} ${project.tech.join(' ')}`)
      .split(' ')
      .filter((part) => part.length > 4 && !ignoredTokens.has(part))

    return tokens.some((part) => words.has(part))
  })
}

function getTranslatedProject(t, project) {
  const title = t(`projects_page.items.${project.key}.title`)
  const description = t(`projects_page.items.${project.key}.description`)

  return {
    ...project,
    title: title.includes('projects_page.items') ? project.key : title,
    description: description.includes('projects_page.items') ? project.metrics.join(', ') : description
  }
}

function buildProjectAnswer(projectList, language, detailed = false) {
  const intro =
    language === 'es'
      ? 'Yo empezaria por estos proyectos:'
      : 'I would start with these projects:'

  if (!detailed) {
    return `${intro} ${projectList
      .slice(0, 3)
      .map((project) => project.title)
      .join(', ')}.`
  }

  return `${intro}\n${projectList
    .slice(0, 4)
    .map((project) => `- ${project.title}: ${project.description}`)
    .join('\n')}`
}

function buildLanguageAnswer(language, detailed = false) {
  const shortAnswer =
    language === 'es'
      ? 'Maneja principalmente JavaScript, C#, Java y SQL. Tambien trabaja con React, .NET, Spring Boot, Node.js, PostgreSQL y Oracle.'
      : 'He mainly uses JavaScript, C#, Java and SQL. He also works with React, .NET, Spring Boot, Node.js, PostgreSQL and Oracle.'

  if (!detailed) return shortAnswer

  return `${shortAnswer}\n\n${cvKnowledge.stack[language]}`
}

function buildSkillsAnswer(t, language, detailed = false) {
  if (!detailed) return buildLanguageAnswer(language)

  const categories = skillCategories
    .map((category) => {
      const title = t(category.titleKey)
      const items = category.items.map((item) => item.name).join(', ')
      return `- ${title}: ${items}`
    })
    .join('\n')

  const intro =
    language === 'es'
      ? `${cvKnowledge.stack.es} En el portafolio tambien se ve esta mezcla:`
      : `${cvKnowledge.stack.en} The portfolio also shows this mix:`

  return `${intro}\n${categories}\n${language === 'es' ? 'Herramientas adicionales' : 'Additional tools'}: ${additionalTools.join(', ')}.`
}

function buildExperienceAnswer(t, language, detailed = false) {
  if (!detailed) {
    return language === 'es'
      ? 'Tiene experiencia Full Stack por proyectos y experiencia profesional previa en CooperVision, dentro del area de calidad.'
      : 'He has Full Stack project experience plus previous professional experience at CooperVision in the quality area.'
  }

  const intro = `${cvKnowledge.summary[language]}\n${cvKnowledge.work[language]}`
  const timeline = experienceItems
    .map((item) => {
      const role = t(`experience_page.items.${item.key}.role`)
      return `- ${item.period}: ${role} (${item.tech.join(', ')})`
    })
    .join('\n')

  return `${intro}\n\n${language === 'es' ? 'En el portafolio se resume asi:' : 'On the portfolio, it is summarized like this:'}\n${timeline}`
}

function buildExperienceDurationAnswer(language) {
  return language === 'es'
    ? 'Jordy viene desarrollando proyectos de software desde 2023 y tiene experiencia profesional previa en CooperVision de abril de 2022 a enero de 2023. En desarrollo, su experiencia se centra en proyectos Full Stack, APIs, React, .NET, Spring Boot y bases de datos.'
    : 'Jordy has been building software projects since 2023 and has previous professional experience at CooperVision from April 2022 to January 2023. In development, his experience focuses on Full Stack projects, APIs, React, .NET, Spring Boot and databases.'
}

function buildProfileAnswer(language) {
  return language === 'es'
    ? 'Jordy es estudiante avanzado de Ingenieria en Sistemas y desarrollador Full Stack. Su fuerte esta en React, .NET, Spring Boot, APIs REST y bases de datos.'
    : 'Jordy is an advanced Systems Engineering student and Full Stack developer. His strengths are React, .NET, Spring Boot, REST APIs and databases.'
}

function buildTutoringAnswer(language, detailed = false) {
  if (!detailed) {
    return language === 'es'
      ? `${copy.es.tutoring} Si queres, le podes escribir por WhatsApp para coordinar.`
      : `${copy.en.tutoring} You can message him on WhatsApp to coordinate.`
  }

  return `${tutoringKnowledge.summary[language]}\n${tutoringKnowledge.topics[language]}\n${tutoringKnowledge.levels[language]}\n${tutoringKnowledge.booking[language]}`
}

function buildRecommendationAnswer(translatedProjects, language) {
  const byKey = new Map(translatedProjects.map((project) => [project.key, project]))
  const picks = [
    byKey.get('biblioteca-app'),
    byKey.get('pulseops-incidenthub'),
    byKey.get('ecotrack-analytics')
  ].filter(Boolean)

  if (!picks.length) return buildProjectAnswer(translatedProjects, language)

  return language === 'es'
    ? `Para evaluar a Jordy rapido, yo veria: ${picks.map((project) => project.title).join(', ')}. Muestran backend, producto web, APIs, datos e interfaces reales.`
    : `To evaluate Jordy quickly, I would review: ${picks.map((project) => project.title).join(', ')}. They show backend, web product work, APIs, data and real interfaces.`
}

function buildFitAnswer(language) {
  return language === 'es'
    ? 'Jordy puede aportar como Full Stack junior/trainee: construye interfaces en React, conecta APIs, trabaja con .NET/Spring Boot, bases de datos y entiende flujos reales de producto. Tambien tiene base de calidad por su experiencia en CooperVision.'
    : 'Jordy can contribute as a junior/trainee Full Stack developer: he builds React interfaces, connects APIs, works with .NET/Spring Boot, databases and understands real product flows. He also has a quality-focused background from CooperVision.'
}

function buildSoftSkillsAnswer(language) {
  return language === 'es'
    ? 'Sus fortalezas blandas son aprendizaje constante, orden, paciencia para explicar, trabajo colaborativo, enfoque en mejora continua y cuidado por la calidad.'
    : 'His soft strengths are continuous learning, organization, patience when explaining, collaboration, continuous improvement and attention to quality.'
}

function createBotReply(message, helpers) {
  const { t, language, translatedProjects } = helpers
  const text = normalize(message)
  const ui = copy[language]
  const detailed = isDetailedQuestion(text)

  if (hasAny(text, ['hola', 'buenas', 'hey', 'hello', 'hi ', 'good morning', 'good afternoon'])) {
    return { text: ui.greeting }
  }

  if (hasAny(text, ['gracias', 'thanks', 'thank'])) {
    return { text: ui.thanks }
  }

  if (fuzzyIncludes(text, ['perfil', 'profile', 'resumen', 'summary', 'about', 'quien', 'jordy', 'retana'])) {
    return {
      text: detailed
        ? `${cvKnowledge.summary[language]}\n\n${cvKnowledge.education[language]}\n\n${cvKnowledge.strengths[language]}`
        : buildProfileAnswer(language),
      actions: [{ label: language === 'es' ? 'Ver experiencia' : 'View experience', to: '/experiencia' }]
    }
  }

  if (wantsEducation(text)) {
    return { text: cvKnowledge.education[language] }
  }

  if (wantsExperience(text)) {
    return {
      text: hasAny(text, ['cuanto tiempo', 'anos', 'años', 'how long', 'how much'])
        ? buildExperienceDurationAnswer(language)
        : buildExperienceAnswer(t, language, detailed),
      actions: [{ label: language === 'es' ? 'Ver experiencia' : 'View experience', to: '/experiencia' }]
    }
  }

  if (wantsLocation(text)) {
    return {
      text:
        language === 'es'
          ? `Jordy esta en ${profile.location.es}. Puede trabajar remoto y coordinar por correo o WhatsApp.`
          : `Jordy is based in ${profile.location.en}. He can work remotely and coordinate by email or WhatsApp.`,
      actions: [{ label: 'WhatsApp', href: profile.whatsapp }]
    }
  }

  if (wantsAvailability(text)) {
    return {
      text: ui.availability,
      actions: [
        { label: 'WhatsApp', href: profile.whatsapp },
        { label: 'Email', href: `mailto:${profile.email}` }
      ]
    }
  }

  if (wantsRecommendation(text)) {
    return {
      text: buildRecommendationAnswer(translatedProjects, language),
      actions: [{ label: language === 'es' ? 'Ver proyectos' : 'View projects', to: '/proyectos' }]
    }
  }

  if (wantsFit(text)) {
    return {
      text: buildFitAnswer(language),
      actions: [
        { label: language === 'es' ? 'Ver CV' : 'Open CV', href: profile.cv },
        { label: 'LinkedIn', href: profile.linkedin }
      ]
    }
  }

  if (wantsSoftSkills(text)) {
    return { text: buildSoftSkillsAnswer(language) }
  }

  if (wantsLanguages(text)) {
    return {
      text: buildLanguageAnswer(language, detailed),
      actions: [{ label: language === 'es' ? 'Ver habilidades' : 'View skills', to: '/habilidades' }]
    }
  }

  if (wantsBooking(text)) {
    return {
      text: tutoringKnowledge.booking[language],
      actions: [
        { label: 'WhatsApp', href: profile.whatsapp },
        { label: 'Email', href: `mailto:${profile.email}` }
      ]
    }
  }

  if (wantsPricing(text)) {
    return {
      text: tutoringKnowledge.prices[language],
      actions: [
        { label: 'WhatsApp', href: profile.whatsapp },
        { label: language === 'es' ? 'Contacto' : 'Contact', to: '/contacto' }
      ]
    }
  }

  if (wantsTutoring(text)) {
    return {
      text: buildTutoringAnswer(language, detailed),
      actions: [
        { label: 'WhatsApp', href: profile.whatsapp },
        { label: language === 'es' ? 'Ver proyecto' : 'View project', to: '/proyectos' }
      ]
    }
  }

  if (wantsUnknownPersonal(text)) {
    return {
      text:
        language === 'es'
          ? 'Ese dato personal no aparece en la informacion del portafolio. Lo que si puedo decirte es que Jordy estudia Ingenieria en Sistemas y esta en cuarto ano segun su CV.'
          : 'That personal detail is not listed in the portfolio information. What I can say is that Jordy studies Systems Engineering and is a fourth-year student according to his CV.'
    }
  }

  if (fuzzyIncludes(text, ['contacto', 'contact', 'email', 'correo', 'whatsapp', 'telefono', 'linkedin', 'phone'])) {
    return {
      text: detailed
        ? `${ui.contact}\n\nEmail: ${profile.email}\nWhatsApp: ${profile.phone}\nLinkedIn: ${profile.linkedin}\nGitHub: ${profile.github}`
        : `${ui.contact}\nEmail: ${profile.email}\nWhatsApp: ${profile.phone}`,
      actions: [
        { label: 'WhatsApp', href: profile.whatsapp },
        { label: 'Email', href: `mailto:${profile.email}` },
        { label: language === 'es' ? 'Formulario' : 'Form', to: '/contacto' }
      ]
    }
  }

  if (wantsLinks(text)) {
    return {
      text:
        language === 'es'
          ? 'Claro. Estos son sus enlaces principales.'
          : 'Sure. These are his main links.',
      actions: [
        { label: 'GitHub', href: profile.github },
        { label: 'LinkedIn', href: profile.linkedin },
        { label: language === 'es' ? 'CV' : 'Resume', href: profile.cv }
      ]
    }
  }

  const matchedProject = getMatchedProject(text, translatedProjects)

  if (matchedProject) {
    return {
      text:
        detailed
          ? `${matchedProject.title}\n${matchedProject.description}\n${language === 'es' ? 'Tecnologias' : 'Technologies'}: ${matchedProject.tech.join(', ')}.`
          : `${matchedProject.title}: ${matchedProject.description}`,
      actions: [
        matchedProject.liveUrl && matchedProject.liveUrl !== '#'
          ? { label: language === 'es' ? 'Abrir demo' : 'Open demo', href: matchedProject.liveUrl }
          : null,
        { label: 'GitHub', href: matchedProject.codeUrl }
      ].filter(Boolean)
    }
  }

  if (fuzzyIncludes(text, ['proyecto', 'projects', 'portfolio', 'portafolio', 'demo', 'github', 'trabajos'])) {
    const featured = translatedProjects
      .filter((project) => project.featured)
      .sort((a, b) => b.priority - a.priority)
    return {
      text: buildProjectAnswer(featured, language, detailed),
      actions: [{ label: language === 'es' ? 'Ver proyectos' : 'View projects', to: '/proyectos' }]
    }
  }

  if (fuzzyIncludes(text, ['skill', 'habilidad', 'stack', 'tecnologia', 'technology', 'react', 'node', 'backend', 'frontend', '.net', 'spring', 'java', 'c#', 'sql', 'database', 'base de datos'])) {
    return {
      text: buildSkillsAnswer(t, language, detailed),
      actions: [{ label: language === 'es' ? 'Ver habilidades' : 'View skills', to: '/habilidades' }]
    }
  }

  if (fuzzyIncludes(text, ['cv', 'resume', 'curriculum', 'hoja de vida'])) {
    return {
      text: detailed ? `${ui.cv}\n\n${cvKnowledge.summary[language]}` : ui.cv,
      actions: [{ label: language === 'es' ? 'Abrir CV' : 'Open CV', href: profile.cv }]
    }
  }

  if (fuzzyIncludes(text, ['disponible', 'availability', 'available', 'contratar', 'hire', 'propuesta', 'freelance', 'oportunidad', 'opportunity'])) {
    return {
      text: ui.availability,
      actions: [
        { label: 'WhatsApp', href: profile.whatsapp },
        { label: 'Email', href: `mailto:${profile.email}` }
      ]
    }
  }

  return { text: ui.fallback }
}

function ChatAction({ action, onClick }) {
  const className = 'portfolio-chat-action'

  if (action.to) {
    return (
      <Link className={className} to={action.to} onClick={onClick}>
        {action.label}
      </Link>
    )
  }

  return (
    <a className={className} href={action.href} target="_blank" rel="noreferrer">
      {action.label}
    </a>
  )
}

function RobotIcon({ compact = false }) {
  return (
    <svg
      className={`portfolio-chat-robot-svg ${compact ? 'compact' : ''}`}
      viewBox="0 0 64 64"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="robot-shell" x1="14" y1="8" x2="50" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#c7d2fe" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="robot-visor" x1="18" y1="24" x2="46" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#07111f" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
        <linearGradient id="robot-accent" x1="18" y1="38" x2="46" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      <path className="robot-glow" d="M12 37c0-12.15 8.97-22 20-22s20 9.85 20 22-8.97 22-20 22-20-9.85-20-22Z" />
      <path className="robot-antenna" d="M32 15V8" />
      <circle className="robot-light" cx="32" cy="6.5" r="3.8" />
      <path className="robot-ear left" d="M12 32c-3.1.5-5 2.7-5 5.5S8.9 42.5 12 43" />
      <path className="robot-ear right" d="M52 32c3.1.5 5 2.7 5 5.5S55.1 42.5 52 43" />
      <rect className="robot-head-shell" x="13" y="17" width="38" height="34" rx="12" />
      <rect className="robot-visor" x="19" y="25" width="26" height="14" rx="7" />
      <circle className="robot-eye" cx="27" cy="32" r="2.6" />
      <circle className="robot-eye" cx="37" cy="32" r="2.6" />
      <path className="robot-smile" d="M26 43c2 2.1 10 2.1 12 0" />
      <path className="robot-body-shell" d="M23 51h18l-2 7H25l-2-7Z" />
      <path className="robot-body-line" d="M28 55h8" />
    </svg>
  )
}

function createWelcomeMessage(language) {
  return [{ id: crypto.randomUUID(), role: 'bot', text: copy[language].welcome }]
}

function getStoredMessages(language) {
  const saved = localStorage.getItem(`${STORAGE_KEY}-${language}`)
  if (!saved) return createWelcomeMessage(language)

  try {
    const parsed = JSON.parse(saved)
    return parsed.length ? parsed : createWelcomeMessage(language)
  } catch {
    return createWelcomeMessage(language)
  }
}

function PortfolioChat() {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messagesByLanguage, setMessagesByLanguage] = useState(() => ({
    es: getStoredMessages('es'),
    en: getStoredMessages('en')
  }))
  const listRef = useRef(null)

  const messages = messagesByLanguage[language]
  const translatedProjects = useMemo(
    () => projects.map((project) => getTranslatedProject(t, project)),
    [t]
  )

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}-${language}`, JSON.stringify(messages.slice(-24)))
  }, [language, messages])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping, isOpen])

  const updateMessages = (updater) => {
    setMessagesByLanguage((prev) => ({
      ...prev,
      [language]: typeof updater === 'function' ? updater(prev[language]) : updater
    }))
  }

  const sendMessage = (value = input) => {
    const cleanValue = value.trim()
    if (!cleanValue || isTyping) return

    const userMessage = { id: crypto.randomUUID(), role: 'user', text: cleanValue }
    updateMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    window.setTimeout(() => {
      const reply = createBotReply(cleanValue, { t, language, translatedProjects })
      updateMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'bot',
          text: reply.text,
          actions: reply.actions || []
        }
      ])
      setIsTyping(false)
    }, 540)
  }

  const clearChat = () => {
    updateMessages(createWelcomeMessage(language))
  }

  return (
    <section className={`portfolio-chat ${isOpen ? 'open' : ''}`} aria-label={copy[language].title}>
      {isOpen ? (
        <div className="portfolio-chat-window">
          <div className="portfolio-chat-hero">
            <div className="portfolio-chat-avatar" aria-hidden="true">
              <RobotIcon compact />
            </div>
            <div className="portfolio-chat-heading">
              <span>{copy[language].eyebrow}</span>
              <strong>{copy[language].title}</strong>
              <p>{copy[language].status}</p>
            </div>
            <button type="button" className="portfolio-chat-close" onClick={() => setIsOpen(false)} aria-label={copy[language].close}>
              x
            </button>
          </div>

          <div className="portfolio-chat-messages" ref={listRef}>
            {messages.map((message) => (
              <article className={`portfolio-chat-message ${message.role}`} key={message.id}>
                <p>{message.text}</p>
                {message.actions?.length ? (
                  <div className="portfolio-chat-actions">
                    {message.actions.map((action) => (
                      <ChatAction action={action} key={action.label} onClick={() => setIsOpen(false)} />
                    ))}
                  </div>
                ) : null}
              </article>
            ))}

            {isTyping ? (
              <article className="portfolio-chat-message bot typing">
                <span className="portfolio-chat-dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <p>{copy[language].typing}</p>
              </article>
            ) : null}
          </div>

          <div className="portfolio-chat-prompts">
            {quickActions[language].map((action) => (
              <button type="button" key={action} onClick={() => sendMessage(action)}>
                {action}
              </button>
            ))}
          </div>

          <form
            className="portfolio-chat-form"
            onSubmit={(event) => {
              event.preventDefault()
              sendMessage()
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={copy[language].placeholder}
              aria-label={copy[language].placeholder}
            />
            <button type="submit" aria-label={copy[language].send}>
              <span>{copy[language].send}</span>
            </button>
          </form>

          <button type="button" className="portfolio-chat-reset" onClick={clearChat}>
            {copy[language].clear}
          </button>
        </div>
      ) : null}

      <button
        type="button"
        className="portfolio-chat-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={copy[language].open}
      >
        <RobotIcon />
      </button>
    </section>
  )
}

export default PortfolioChat
