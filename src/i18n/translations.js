const translations = {
  es: {
    nav: {
      home: 'HOME',
      projects: 'PROYECTOS',
      experience: 'EXPERIENCIA',
      skills: 'HABILIDADES',
      contact: 'CONTACTO',
      download_cv: 'CV',
      logo: 'JR'
    },
    footer: {
      building_solutions:
        'Portafolio personal orientado a experiencias digitales modernas, interfaces cuidadas e integraciones funcionales.',
      navigation: 'NAVEGACIÓN',
      resources: 'RECURSOS',
      contact: 'CONTACTO',
      rights_reserved: 'Todos los derechos reservados'
    },
    hero: {
      dev_mode: 'MODO_DEV',
      greeting: 'Hola, soy',
      role: 'Desarrollador de Software',
      description:
        'Construyo sistemas escalables con código limpio y soluciones innovadoras. Transformo problemas complejos en experiencias digitales eficientes.',
      stats: {
        projects: 'PROYECTOS',
        years: 'AÑOS EXP',
        satisfaction: 'SATISFACCIÓN'
      },
      actions: {
        view_projects: 'Ver proyectos',
        connect: 'Conectar'
      },
      name: 'JORDY RETANA',
      console_code: {
        line1: 'const developer = {',
        line2: '  name: "Jordy Retana",',
        line3: '  stack: ["React", "Node.js", "TypeScript"]',
        line4: '};'
      }
    },
    tech: {
      section_subtitle: 'SPECIALIZATION',
      section_title: 'Tecnologías y stack principal',
      section_description: 'Combinación de frontend, backend e infraestructura para construir productos completos.',
      categories: {
        frontend: 'Frontend / UI',
        backend: 'Backend / Cloud',
        tools: 'Tooling / Deploy'
      }
    },
    home_overview: {
      badge: 'VALOR',
      title: 'Diseño, lógica y experiencia en un solo lugar',
      description:
        'Mi enfoque combina una capa visual sólida, una estructura limpia de componentes y conexiones reales con servicios externos para lograr productos funcionales y profesionales.',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Ir a contacto',
      cards: [
        {
          title: 'Interfaces modernas',
          text: 'Layouts más trabajados, consistencia visual, espaciado y experiencia responsive.'
        },
        {
          title: 'Código organizado',
          text: 'Componentes reutilizables, estructura más clara y mejor mantenimiento a largo plazo.'
        },
        {
          title: 'Integraciones reales',
          text: 'Formulario funcional, alertas en Telegram y envío de correo conectado al backend.'
        }
      ]
    },
    portfolio: {
      section_subtitle: 'FEATURED',
      section_title: 'Proyectos destacados',
      section_description: 'Una selección de proyectos que representan mejor el perfil y la evolución técnica.',
      projects: {
        tutoring: {
          title: 'Tutorías JR Platform',
          description: 'Plataforma educativa con flujo de registro, vistas informativas y experiencia centrada en el usuario.',
          badge: 'Featured',
          primaryActionLabel: 'Demo',
          secondaryActionLabel: 'Code',
          features: ['Experiencia educativa', 'Diseño completo', 'Flujo informativo', 'UI moderna'],
          stats: { users: 'Views', satisfaction: 'UX', uptime: 'Flow' }
        },
        kirby: {
          title: 'Kirby Adventure Game',
          description: 'Juego 2D con físicas, colisiones, enemigos y mecánicas arcade en Canvas.',
          badge: 'Game',
          primaryActionLabel: 'Play',
          secondaryActionLabel: 'Code',
          features: ['Canvas 2D', 'Colisiones', 'Sprites', 'Gameplay'],
          stats: { fps: 'FPS', levels: 'Levels', enemies: 'Enemies', powers: 'Powers' }
        },
        pool: {
          title: 'Pool Game',
          description: 'Simulación visual con físicas, rebotes y cálculo de trayectorias.',
          badge: 'Physics',
          primaryActionLabel: 'View',
          secondaryActionLabel: 'Code',
          features: ['Physics', 'Particles', 'Canvas', 'Precision'],
          stats: { fps: 'FPS', levels: 'Mode', enemies: 'Shots', powers: 'FX' }
        }
      }
    },
    projects_page: {
      badge: 'PORTAFOLIO',
      title: 'Galería de proyectos',
      subtitle: 'Selección más fina de proyectos reales, con mejor presentación visual y foco en las piezas que mejor representan el perfil.',
      filters: { all: 'Todos', web: 'Web', ai: 'IA / Visión', game: 'Juegos' },
      actions: { demo: 'Ver demo', code: 'Ver código' },
      empty: 'No hay proyectos para esta categoría.',
      items: {
        'tutorias-jr': { title: 'Tutorías JR', description: 'Plataforma educativa con reservas, experiencia moderna y estructura clara para estudiantes y tutores.' },
        mano: { title: 'Reconocimiento de mano', description: 'Proyecto de visión por computadora con Python, OpenCV y MediaPipe para detección y seguimiento de mano en tiempo real.' },
        cv: { title: 'Proyecto CV', description: 'Experiencia centrada en CV, búsqueda laboral y presentación de perfil profesional. Próximamente.' },
        'virtual-error-404': { title: 'Virtual Error 404', description: 'Página 404 interactiva con motion, layout experimental y una identidad visual más dinámica.' },
        pool: { title: 'Pool Game', description: 'Simulación de billar con físicas, trayectorias y enfoque en precisión visual.' },
        'reloj-digital': { title: 'Reloj Digital', description: 'Reloj con utilidades basadas en tiempo, diseño simple y múltiples funciones visuales.' },
        snake: { title: 'Snake Classic', description: 'Versión modernizada del clásico Snake con controles responsivos y una interfaz más limpia.' },
        'teclado-virtual': { title: 'Teclado Virtual', description: 'Proyecto interactivo enfocado en eventos de teclado, accesibilidad y respuesta visual.' },
        'ruleta-casino': { title: 'Ruleta Casino', description: 'Juego de probabilidad y estadísticas con animación, canvas y feedback visual.' },
        sc502: { title: 'SC502 1C2025', description: 'Proyecto universitario completo con estructura web, algoritmos y trabajo académico aplicado.' },
        'cliente-servidor': { title: 'Cliente-Servidor', description: 'Trabajo académico alrededor de interacción, flujo de datos y conceptos de networking.' },
        'memory-game': { title: 'Memory Game', description: 'Juego de memoria con lógica simple, feedback visual y enfoque en interacción clásica.' },
        kirby: { title: 'Kirby Adventure', description: 'Juego de plataformas 2D con colisiones, sprites, enemigos y estructura arcade.' }
      }
    },

    skills_page: {
      badge: 'SKILLS',
      title: 'Habilidades y stack creativo',
      subtitle: 'Combino desarrollo frontend, integraciones funcionales y criterios visuales para construir productos más completos y mejor presentados.',
      tools_title: 'Herramientas, flujo y soporte',
      categories: {
        frontend: {
          title: 'Frontend principal',
          description: 'Tecnologías base con las que construyo interfaces, navegación y estructura reusable.'
        },
        backend: {
          title: 'Backend e integraciones',
          description: 'Conexiones reales con formularios, correo, alertas y servicios externos.'
        },
        ui: {
          title: 'UI, motion y experiencia',
          description: 'Criterios visuales, microinteracciones y decisiones de interfaz para que el producto se sienta mejor.'
        },
        data: {
          title: 'Deploy, datos y tooling',
          description: 'Capas de soporte que permiten mantener, publicar y evolucionar el proyecto con orden.'
        }
      }
    },
    experience_page: {
      badge: 'EXPERIENCIA',
      title: 'Experiencia y evolución',
      subtitle: 'Una línea de tiempo enfocada en proyectos, construcción visual y evolución técnica a través de productos interactivos y web.',
      achievements_title: 'Aportes principales',
      items: {
        'product-builder': {
          role: 'Product Builder / Frontend Developer',
          company: 'Proyectos personales y producto digital',
          description: 'Construcción de experiencias visuales más completas, refactor de componentes, mejoras de UX y consolidación del portafolio como producto real.',
          achievements: [
            'Refactor de secciones visuales a componentes reutilizables',
            'Mejora de jerarquía visual, espaciado y consistencia global',
            'Integración de formulario funcional con correo y alertas',
            'Diseño de páginas con una estética más premium y moderna'
          ]
        },
        'interactive-dev': {
          role: 'Interactive Developer',
          company: 'Experimentos canvas y proyectos visuales',
          description: 'Desarrollo de juegos y prototipos interactivos centrados en física, animación, lógica y respuesta visual del usuario.',
          achievements: [
            'Creación de experiencias 2D con lógica arcade y físicas',
            'Trabajo con movimiento, colisiones y efectos visuales',
            'Exploración de interfaces lúdicas e interactivas',
            'Mejora progresiva del detalle visual y del feedback del usuario'
          ]
        },
        'web-builder': {
          role: 'Web Builder',
          company: 'Sitios, portafolios y soluciones web',
          description: 'Desarrollo de sitios web informativos y visuales con foco en estructura, claridad de navegación y presentación profesional.',
          achievements: [
            'Construcción de layouts completos y páginas responsivas',
            'Implementación de secciones visuales reutilizables',
            'Trabajo con formularios, navegación y componentes comunes',
            'Evolución continua del diseño hacia una identidad más sólida'
          ]
        }
      }
    },
    contact: {
      badge: 'CONTACTO DIRECTO',
      title: 'Conectemos',
      title_accent: 'Ideas',
      subtitle: 'Disponible para proyectos, colaboraciones técnicas y mejoras visuales o funcionales de productos web.',
      stats: { response_hours: 'Horas respuesta', success_rate: '% éxito', projects: 'Proyectos' },
      info: {
        title: 'Información de contacto', subtitle: 'Canales directos y disponibilidad actual',
        email_title: 'Email principal', email_note: 'Canal recomendado para propuestas, ideas y consultas generales.',
        phone_title: 'WhatsApp', phone_note: 'Disponible para contacto directo y seguimiento rápido.',
        location_title: 'Ubicación', location_value: 'San José, Costa Rica', location_note: 'Trabajo remoto disponible.',
        availability_title: 'Disponibilidad', availability_status: 'Abierto a nuevos proyectos', availability_note: 'Respuesta habitual entre 24 y 48 horas.',
        social_title: 'Perfiles y redes', github_desc: 'Repositorios, código y proyectos.', linkedin_desc: 'Perfil profesional y trayectoria.',
        active: 'Activo', remote: 'Remoto', open: 'Open'
      },
      form: {
        title: 'Envíame un mensaje', subtitle: 'Contame sobre tu proyecto o idea.',
        name_label: 'Nombre completo *', name_placeholder: 'Tu nombre',
        email_label: 'Email *', email_placeholder: 'tu@email.com',
        subject_label: 'Tipo de consulta *', subject_placeholder: 'Selecciona una opción',
        project_option: 'Propuesta de proyecto', collaboration_option: 'Colaboración técnica', consulting_option: 'Consultoría / asesoría', job_option: 'Oportunidad laboral', other_option: 'Otra consulta',
        budget_label: 'Presupuesto estimado', budget_placeholder: 'Podemos discutirlo después',
        message_label: 'Mensaje *', message_placeholder: 'Describe tu necesidad, objetivo o idea...',
        privacy_text: 'Acepto la política de privacidad y autorizo el tratamiento de mis datos *',
        newsletter_text: 'Deseo recibir novedades o mejoras del portafolio',
        send_button: 'Enviar mensaje'
      },
      faq: {
        title: 'Preguntas frecuentes', subtitle: 'Respuestas rápidas antes de escribir',
        items: [
          { question: '¿Qué tipo de proyectos aceptas?', answer: 'Portafolios, landing pages, mejoras visuales, integración de formularios, proyectos React y trabajos interactivos.' },
          { question: '¿Trabajas remoto?', answer: 'Sí. El trabajo remoto forma parte natural del flujo del proyecto.' },
          { question: '¿Puedes mejorar un proyecto ya existente?', answer: 'Sí. Puedo tomar una base existente y mejorar estructura, estilos, experiencia y funcionalidades.' },
          { question: '¿Cuánto tardas en responder?', answer: 'Usualmente entre 24 y 48 horas hábiles.' }
        ]
      },
      cta: {
        title: '¿Listo para empezar?',
        subtitle: 'Si ya tenés una idea o un proyecto en mente, este es un buen momento para hablarlo.',
        primary: 'Escribirme por email', secondary: 'Ver proyectos'
      }
    }
  },
  en: {
    nav: { home: 'HOME', projects: 'PROJECTS', experience: 'EXPERIENCE', skills: 'SKILLS', contact: 'CONTACT', download_cv: 'CV', logo: 'JR' },
    footer: {
      building_solutions: 'Personal portfolio focused on modern digital experiences, polished interfaces and working integrations.',
      navigation: 'NAVIGATION', resources: 'RESOURCES', contact: 'CONTACT', rights_reserved: 'All rights reserved'
    },
    hero: {
      dev_mode: 'DEV_MODE', greeting: 'Hello, I’m', role: 'Software Developer',
      description: 'Building scalable systems with clean code and innovative solutions. Transforming complex problems into efficient digital experiences.',
      stats: { projects: 'PROJECTS', years: 'YEARS EXP', satisfaction: 'SATISFACTION' },
      actions: { view_projects: 'View Projects', connect: 'Connect' }, name: 'JORDY RETANA',
      console_code: { line1: 'const developer = {', line2: '  name: "Jordy Retana",', line3: '  stack: ["React", "Node.js", "TypeScript"]', line4: '};' }
    },
    tech: {
      section_subtitle: 'SPECIALIZATION', section_title: 'Core technologies and stack', section_description: 'A balanced mix of frontend, backend and infrastructure to build complete products.',
      categories: { frontend: 'Frontend / UI', backend: 'Backend / Cloud', tools: 'Tooling / Deploy' }
    },
    home_overview: {
      badge: 'VALUE', title: 'Design, logic and experience in one place',
      description: 'My approach combines a stronger visual layer, clean component structure and real external integrations to deliver professional digital products.',
      ctaPrimary: 'View projects', ctaSecondary: 'Go to contact',
      cards: [
        { title: 'Modern interfaces', text: 'Cleaner layouts, stronger hierarchy, spacing and responsive experience.' },
        { title: 'Organized code', text: 'Reusable components, clearer structure and better long-term maintenance.' },
        { title: 'Real integrations', text: 'Working form, Telegram alerts and email sending connected to the backend.' }
      ]
    },
    portfolio: {
      section_subtitle: 'FEATURED', section_title: 'Featured projects', section_description: 'A curated set of projects that best represent the profile and technical growth.',
      projects: {
        tutoring: { title: 'Tutorías JR Platform', description: 'Educational platform with informative flow, polished views and modern user-oriented design.', badge: 'Featured', primaryActionLabel: 'Demo', secondaryActionLabel: 'Code', features: ['Educational UX', 'Complete design', 'Informative flow', 'Modern UI'], stats: { users: 'Views', satisfaction: 'UX', uptime: 'Flow' } },
        kirby: { title: 'Kirby Adventure Game', description: '2D platform game with physics, collisions, enemies and arcade mechanics.', badge: 'Game', primaryActionLabel: 'Play', secondaryActionLabel: 'Code', features: ['Canvas 2D', 'Collisions', 'Sprites', 'Gameplay'], stats: { fps: 'FPS', levels: 'Levels', enemies: 'Enemies', powers: 'Powers' } },
        pool: { title: 'Pool Game', description: 'Visual simulation project with physics, rebounds and trajectory calculations.', badge: 'Physics', primaryActionLabel: 'View', secondaryActionLabel: 'Code', features: ['Physics', 'Particles', 'Canvas', 'Precision'], stats: { fps: 'FPS', levels: 'Mode', enemies: 'Shots', powers: 'FX' } }
      }
    },
    projects_page: {
      badge: 'PORTFOLIO',
      title: 'Projects gallery',
      subtitle: 'A more refined selection of real projects, presented with cleaner visuals and a stronger focus on the work that best represents the profile.',
      filters: { all: 'All', web: 'Web', ai: 'AI / Vision', game: 'Games' },
      actions: { demo: 'Live demo', code: 'Source code' },
      empty: 'There are no projects in this category.',
      items: {
        'tutorias-jr': { title: 'Tutorías JR', description: 'Educational platform with bookings, a modern experience, and a clear structure for students and tutors.' },
        mano: { title: 'Hand Recognition', description: 'Computer vision project with Python, OpenCV, and MediaPipe for real-time hand detection and tracking.' },
        cv: { title: 'CV Project', description: 'Experience focused on CV presentation, job search, and professional profile display. Coming soon.' },
        'virtual-error-404': { title: 'Virtual Error 404', description: 'Interactive 404 page with motion, experimental layout, and a more dynamic visual identity.' },
        pool: { title: 'Pool Game', description: 'Pool simulation with physics, trajectories, and a strong focus on visual precision.' },
        'reloj-digital': { title: 'Digital Clock', description: 'Clock utility with time-based features, clean design, and multiple visual functions.' },
        snake: { title: 'Snake Classic', description: 'Modern take on the classic Snake game with responsive controls and a cleaner interface.' },
        'teclado-virtual': { title: 'Virtual Keyboard', description: 'Interactive project focused on keyboard events, accessibility, and visual response.' },
        'ruleta-casino': { title: 'Casino Roulette', description: 'Probability and statistics game with animation, canvas, and visual feedback.' },
        sc502: { title: 'SC502 1C2025', description: 'Complete university project with web structure, algorithms, and applied academic work.' },
        'cliente-servidor': { title: 'Client-Server', description: 'Academic work around interaction, data flow, and networking concepts.' },
        'memory-game': { title: 'Memory Game', description: 'Memory game with simple logic, visual feedback, and classic interaction focus.' },
        kirby: { title: 'Kirby Adventure', description: '2D platform game with collisions, sprites, enemies, and arcade structure.' }
      }
    },

    skills_page: {
      badge: 'SKILLS',
      title: 'Creative skills and stack',
      subtitle: 'I combine frontend development, functional integrations and visual criteria to build fuller, better presented digital products.',
      tools_title: 'Tools, workflow and support',
      categories: {
        frontend: {
          title: 'Core frontend',
          description: 'Main technologies I use to build interfaces, navigation and reusable structure.'
        },
        backend: {
          title: 'Backend and integrations',
          description: 'Real connections for forms, email, alerts and external services.'
        },
        ui: {
          title: 'UI, motion and experience',
          description: 'Visual decisions, microinteractions and interface thinking that make the product feel better.'
        },
        data: {
          title: 'Deploy, data and tooling',
          description: 'Support layers that help maintain, ship and evolve the project with structure.'
        }
      }
    },
    experience_page: {
      badge: 'EXPERIENCE',
      title: 'Experience and evolution',
      subtitle: 'A timeline focused on projects, visual building and technical growth through interactive and web-based products.',
      achievements_title: 'Key contributions',
      items: {
        'product-builder': {
          role: 'Product Builder / Frontend Developer',
          company: 'Personal projects and digital product work',
          description: 'Built more complete visual experiences, refactored reusable components, improved UX and consolidated the portfolio as a real product.',
          achievements: [
            'Refactored visual sections into reusable components',
            'Improved hierarchy, spacing and global consistency',
            'Integrated working forms with email and alert flows',
            'Designed pages with a more premium and modern aesthetic'
          ]
        },
        'interactive-dev': {
          role: 'Interactive Developer',
          company: 'Canvas experiments and visual projects',
          description: 'Developed games and interactive prototypes focused on physics, animation, logic and visual response.',
          achievements: [
            'Built 2D experiences with arcade logic and physics',
            'Worked with motion, collisions and visual effects',
            'Explored playful and interactive interface patterns',
            'Improved visual detail and user feedback over time'
          ]
        },
        'web-builder': {
          role: 'Web Builder',
          company: 'Websites, portfolios and web solutions',
          description: 'Created informative and polished websites focused on structure, navigation clarity and professional presentation.',
          achievements: [
            'Built complete layouts and responsive pages',
            'Implemented reusable visual sections',
            'Worked with forms, navigation and common UI components',
            'Continuously evolved design toward a stronger identity'
          ]
        }
      }
    },
    contact: {
      badge: 'DIRECT CONTACT', title: 'Let’s connect', title_accent: 'Ideas', subtitle: 'Available for projects, technical collaborations and visual or functional improvements for web products.',
      stats: { response_hours: 'Response hours', success_rate: '% success', projects: 'Projects' },
      info: {
        title: 'Contact information', subtitle: 'Direct channels and current availability', email_title: 'Primary email', email_note: 'Recommended channel for proposals, ideas and general inquiries.', phone_title: 'WhatsApp', phone_note: 'Available for direct contact and quick follow-up.', location_title: 'Location', location_value: 'San José, Costa Rica', location_note: 'Remote work available.', availability_title: 'Availability', availability_status: 'Open to new projects', availability_note: 'Typical response time between 24 and 48 hours.', social_title: 'Profiles and networks', github_desc: 'Repositories, code and projects.', linkedin_desc: 'Professional profile and background.', active: 'Active', remote: 'Remote', open: 'Open'
      },
      form: {
        title: 'Send me a message', subtitle: 'Tell me about your project or idea.', name_label: 'Full name *', name_placeholder: 'Your name', email_label: 'Email *', email_placeholder: 'your@email.com', subject_label: 'Inquiry type *', subject_placeholder: 'Select an option', project_option: 'Project proposal', collaboration_option: 'Technical collaboration', consulting_option: 'Consulting / advisory', job_option: 'Job opportunity', other_option: 'Other inquiry', budget_label: 'Estimated budget', budget_placeholder: 'We can discuss it later', message_label: 'Message *', message_placeholder: 'Describe your need, goal or idea...', privacy_text: 'I accept the privacy policy and authorize the processing of my data *', newsletter_text: 'I want to receive updates or portfolio improvements', send_button: 'Send message'
      },
      faq: {
        title: 'Frequently asked questions', subtitle: 'Quick answers before reaching out',
        items: [
          { question: 'What kind of projects do you take?', answer: 'Portfolios, landing pages, visual improvements, form integrations, React projects and interactive work.' },
          { question: 'Do you work remotely?', answer: 'Yes. Remote work is part of the normal project flow.' },
          { question: 'Can you improve an existing project?', answer: 'Yes. I can take an existing base and improve structure, styles, experience and functionality.' },
          { question: 'How fast do you reply?', answer: 'Usually within 24 to 48 business hours.' }
        ]
      },
      cta: { title: 'Ready to get started?', subtitle: 'If you already have an idea or project in mind, this is a good moment to talk about it.', primary: 'Email me', secondary: 'View projects' }
    }
  }
}

export default translations
