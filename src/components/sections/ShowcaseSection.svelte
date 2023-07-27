<script lang="ts">
    import SectionWrapper from './SectionWrapper.svelte';
    import ProjectCard from '../ProjectCard.svelte';
    import LightProjectCard from '../LightProjectCard.svelte';
    import { t } from 'i18next';
</script>

<SectionWrapper
    id="showcase"
    flexible
    next={{ id: 'contact', text: t('sections.showcase.next') }}
>
    <header class="text-2xl font-nunito font-bold">
        <h2>✨ {t('sections.showcase.title')}</h2>
    </header>
    <div class="flex flex-col items-center gap-8 md:gap-10 xl:gap-16">
        <ProjectCard
            reverse={false}
            title="DevCorvus (Old)"
            description={t('sections.showcase.projects.old-portfolio')}
            stack={['TypeScript', 'Next.js', 'TailwindCSS']}
            favicon="devcorvus-favicon.png"
            preview="devcorvus.webp"
        />
        <ProjectCard
            reverse={true}
            title="Pictery"
            description={t('sections.showcase.projects.pictery')}
            stack={[
                'TypeScript',
                'Vue.js',
                'TailwindCSS',
                'Express',
                'Prisma',
                'PostgreSQL',
            ]}
            favicon="pictery-favicon.png"
            preview="pictery.webp"
        />
        <ProjectCard
            reverse={false}
            title="Relyn App"
            description={t('sections.showcase.projects.relyn')}
            stack={[
                'JavaScript',
                'TypeScript',
                'React.js',
                'TailwindCSS',
                'Express',
                'MongoDB',
            ]}
            favicon="relyn-favicon.png"
            preview="relyn.webp"
        />
        <ProjectCard
            reverse={true}
            title="Baibai"
            description={t('sections.showcase.projects.baibai')}
            stack={[
                'TypeScript',
                'React.js',
                'TailwindCSS',
                'daisyUI',
                'Nest.js',
                'Sequelize',
                'SQLite',
            ]}
            favicon="baibai-favicon.png"
            preview="baibai.webp"
        />
        <ProjectCard
            reverse={false}
            title="Pigeon Club"
            description={t('sections.showcase.projects.pigeon-club')}
            stack={[
                'JavaScript',
                'TypeScript',
                'React.js',
                'TailwindCSS',
                'Express',
                'Socket.IO',
                'TypeScript',
                'PostgreSQL',
            ]}
            favicon="pigeonclub-favicon.png"
            preview="pigeonclub.webp"
        />
        <ProjectCard
            reverse={true}
            title="Django Todo App"
            description={t('sections.showcase.projects.django-todo-app')}
            stack={['Python', 'Django', 'TailwindCSS', 'PostgreSQL']}
            favicon="djangotodoapp-favicon.png"
            preview="djangotodoapp.webp"
        />
        <ProjectCard
            reverse={false}
            title="DevBanner"
            description={t('sections.showcase.projects.devbanner')}
            stack={[
                'PHP',
                'Laravel',
                'JavaScript',
                'TailwindCSS',
                'PostgreSQL',
            ]}
            favicon="devbanner-favicon.png"
            preview="devbanner.webp"
        />
        <ProjectCard
            reverse={true}
            title="Flask Animals"
            description={t('sections.showcase.projects.flask-animals')}
            stack={['Python', 'Flask', 'Bootstrap', 'SQLite']}
            favicon="flaskanimals-favicon.png"
            preview="flaskanimals.webp"
        />
    </div>
    <section class="flex flex-col gap-10">
        <header class="text-xl font-nunito font-bold">
            <h3>{t('sections.showcase.subtitle')}</h3>
        </header>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LightProjectCard
                title="Rusty demo"
                description={t('sections.showcase.projects.rusty')}
                stack={['Rust', 'Actix Web', 'Tauri', 'Yew', 'SQLite']}
                colorClass="text-orange-500"
            />
            <LightProjectCard
                title="Goty"
                description={t('sections.showcase.projects.goty')}
                stack={['Go', 'SQLite']}
                colorClass="text-sky-500"
            />
            <LightProjectCard
                title="Nest GraphQL demo"
                description={t('sections.showcase.projects.nest-graphql-demo')}
                stack={['TypeScript', 'Nest.js', 'TypeORM', 'SQLite']}
                colorClass="text-rose-500"
            />
            <LightProjectCard
                title="Next tRPC demo"
                description={t('sections.showcase.projects.next-trpc-demo')}
                stack={['TypeScript', 'Nest.js', 'tRPC', 'Prisma', 'SQLite']}
                colorClass="text-blue-500"
            />
        </div>
    </section>
    <footer>
        <p class="text-center text-slate-300">
            {t('sections.showcase.message')}
            <a
                href="#"
                class="text-violet-300 font-semibold hover:text-violet-200 focus:text-violet-300 transition"
                target="_blank"
            >
                GitHub!
            </a>
        </p>
    </footer>
</SectionWrapper>
