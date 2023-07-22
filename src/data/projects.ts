type Tech =
    | 'JavaScript'
    | 'TypeScript'
    | 'TailwindCSS'
    | 'daisyUI'
    | 'Bootstrap'
    | 'React.js'
    | 'Next.js'
    | 'Vue.js'
    | 'tRPC'
    | 'Express'
    | 'Nest.js'
    | 'Socket.IO'
    | 'Prisma'
    | 'TypeORM'
    | 'Sequelize'
    | 'PostgreSQL'
    | 'SQLite'
    | 'MongoDB'
    | 'Rust'
    | 'Actix Web'
    | 'Tauri'
    | 'Yew'
    | 'Go'
    | 'Python'
    | 'Flask'
    | 'Django'
    | 'PHP'
    | 'Laravel';

interface ProjectWithPreview {
    title: string;
    description: string;
    stack: Tech[];
    favicon: string;
    preview: string;
}

interface ProjectWithoutPreview {
    title: string;
    description: string;
    stack: Tech[];
    colorClass: string;
}

export const projectsWithPreview: ProjectWithPreview[] = [
    {
        title: 'DevCorvus (Old)',
        description: 'Personal website and portfolio',
        stack: ['TypeScript', 'Next.js', 'TailwindCSS'],
        favicon: 'devcorvus-favicon.png',
        preview: 'devcorvus.webp',
    },
    {
        title: 'Pictery',
        description: 'Gallery management app',
        stack: [
            'TypeScript',
            'Vue.js',
            'TailwindCSS',
            'Express',
            'Prisma',
            'PostgreSQL',
        ],
        favicon: 'pictery-favicon.png',
        preview: 'pictery.webp',
    },
    {
        title: 'Relyn App',
        description: 'Social media app',
        stack: [
            'JavaScript',
            'TypeScript',
            'React.js',
            'TailwindCSS',
            'Express',
            'MongoDB',
        ],
        favicon: 'relyn-favicon.png',
        preview: 'relyn.webp',
    },
    {
        title: 'Baibai',
        description: 'E-Commerce and API (demo)',
        stack: [
            'TypeScript',
            'React.js',
            'TailwindCSS',
            'daisyUI',
            'Nest.js',
            'Sequelize',
            'SQLite',
        ],
        favicon: 'baibai-favicon.png',
        preview: 'baibai.webp',
    },
    {
        title: 'Pigeon Club',
        description: 'Real-time chat (demo)',
        stack: [
            'JavaScript',
            'TypeScript',
            'React.js',
            'TailwindCSS',
            'Express',
            'Socket.IO',
            'TypeORM',
            'PostgreSQL',
        ],
        favicon: 'pigeonclub-favicon.png',
        preview: 'pigeonclub.webp',
    },
    {
        title: 'Django Todo App',
        description: 'Group-based todo app',
        stack: ['Python', 'Django', 'TailwindCSS', 'PostgreSQL'],
        favicon: 'djangotodoapp-favicon.png',
        preview: 'djangotodoapp.webp',
    },
    {
        title: 'DevBanner',
        description: 'Personal tech blog',
        stack: ['PHP', 'Laravel', 'TailwindCSS', 'PostgreSQL'],
        favicon: 'devbanner-favicon.png',
        preview: 'devbanner.webp',
    },
    {
        title: 'Flask Animals',
        description: 'Flask CRUD and API (demo)',
        stack: ['Python', 'Flask', 'Bootstrap', 'PostgreSQL'],
        favicon: 'flaskanimals-favicon.png',
        preview: 'flaskanimals.webp',
    },
];

export const projectsWithoutPreview: ProjectWithoutPreview[] = [
    {
        title: 'Rusty demo',
        description: 'Desktop app and API with authentication',
        stack: ['Rust', 'Actix Web', 'Tauri', 'Yew', 'SQLite'],
        colorClass: 'text-orange-500',
    },
    {
        title: 'Goty',
        description: 'Go API with authentication (demo)',
        stack: ['Go', 'SQLite'],
        colorClass: 'text-sky-500',
    },
    {
        title: 'Nest GraphQL demo',
        description: 'Simple todo API with authentication',
        stack: ['TypeScript', 'Nest.js', 'TypeORM', 'SQLite'],
        colorClass: 'text-rose-500',
    },
    {
        title: 'Next tRPC demo',
        description: 'Simple CRUD with authentication',
        stack: ['TypeScript', 'Next.js', 'tRPC', 'Prisma', 'SQLite'],
        colorClass: 'text-blue-500',
    },
];
