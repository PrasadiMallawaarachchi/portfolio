import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with product management, shopping cart, payment integration, and order tracking.',
    role: 'Full Stack Developer',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express.js'],
    startDate: '2024-01',
    endDate: '2024-06',
    achievements: [
      'Implemented secure payment processing using Stripe',
      'Built responsive UI with React and Tailwind CSS',
      'Developed RESTful APIs for product and order management',
      'Integrated real-time order tracking system'
    ],
    links: {
      github: 'https://github.com/example/ecommerce',
      live: 'https://example-ecommerce.com'
    }
  },
  {
    id: 'proj-2',
    title: 'Task Management Application',
    description: 'A collaborative task management tool with team workspaces, real-time updates, and productivity analytics.',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    startDate: '2023-08',
    endDate: '2023-12',
    achievements: [
      'Designed and implemented intuitive drag-and-drop interface',
      'Integrated Firebase for real-time collaboration',
      'Built analytics dashboard with charts and insights',
      'Achieved 95+ Lighthouse performance score'
    ],
    links: {
      github: 'https://github.com/example/task-manager',
      demo: 'https://example-tasks.vercel.app'
    }
  },
  {
    id: 'proj-3',
    title: 'Weather Forecast Dashboard',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
    role: 'Frontend Developer',
    technologies: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js', 'CSS Modules'],
    startDate: '2023-05',
    endDate: '2023-07',
    achievements: [
      'Integrated multiple weather APIs for accurate forecasts',
      'Created interactive weather maps with Mapbox',
      'Implemented location search and favorites feature',
      'Added weather alert notifications'
    ],
    links: {
      github: 'https://github.com/example/weather-app',
      live: 'https://example-weather.netlify.app'
    }
  },
  {
    id: 'proj-4',
    title: 'Blog Content Management System',
    description: 'A headless CMS for blog management with markdown support, SEO optimization, and multi-author capabilities.',
    role: 'Full Stack Developer',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth', 'TinyMCE'],
    startDate: '2023-01',
    endDate: '2023-04',
    achievements: [
      'Built rich text editor with markdown support',
      'Implemented role-based access control',
      'Added SEO optimization tools',
      'Created responsive admin dashboard'
    ],
    links: {
      github: 'https://github.com/example/blog-cms'
    }
  }
];
