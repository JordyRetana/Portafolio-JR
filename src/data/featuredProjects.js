const base = import.meta.env.BASE_URL

export const featuredProjects = [
  {
    id: 1,
    key: 'tutoring',
    image: `${base}assets/images/Tutor/Tutor-JR.png`,
    alt: 'Tutorias JR Platform',
    badgeType: 'active',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    statValues: ['01', 'UX', 'Flow'],
    codeUrl: 'https://github.com/JordyRetana/Tutorias-JR',
    liveUrl: 'https://jordyretana.github.io/Tutorias-JR/'
  },
  {
    id: 2,
    key: 'biblioteca',
    image: `${base}assets/images/BibliotecaApp/portfolio-cover.jpg`,
    alt: 'BibliotecaApp library management dashboard',
    badgeType: 'active',
    tech: ['.NET 8', 'PostgreSQL', 'JWT'],
    statValues: ['API', 'Sync', 'QR'],
    codeUrl: 'https://github.com/JordyRetana/BibliotecaApp',
    liveUrl: '#'
  },
  {
    id: 3,
    key: 'mano',
    image: `${base}assets/images/Mano/Mano.png`,
    alt: 'Hand Recognition with Computer Vision',
    badgeType: 'active',
    tech: ['Python', 'OpenCV', 'MediaPipe'],
    statValues: ['AI', 'CV', 'RT'],
    codeUrl: 'https://github.com/JordyRetana/Mano',
    liveUrl: '#'
  }
]
