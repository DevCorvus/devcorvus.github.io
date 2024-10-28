<script lang="ts">
    import SectionWrapper from './SectionWrapper.svelte';
    import ProjectCard from '../ProjectCard.svelte';
    import LightProjectCard from '../LightProjectCard.svelte';
    import { links } from '../../constants';
    import { i18n } from '../../utils/i18n';
</script>

<SectionWrapper
    id="showcase"
    flexible
    next={{ id: 'contact', text: $i18n.t('sections.showcase.next') }}
>
    <header class="text-2xl font-nunito font-bold">
        <h2>✨ {$i18n.t('sections.showcase.title')}</h2>
    </header>
    <div class="flex flex-col items-center gap-8 md:gap-10 xl:gap-16">
        <ProjectCard
            reverse={true}
            title="Slangio"
            description={$i18n.t('sections.showcase.projects.slangio')}
            stack={['TypeScript', 'Vue.js', 'TailwindCSS', 'daisyUI']}
            favicon="slangio-favicon.png"
            preview="slangio.webp"
            repo="https://github.com/DevCorvus/slangio"
            site="https://slangio.netlify.app/"
        />
        <ProjectCard
            reverse={false}
            title="Cartago"
            description={$i18n.t('sections.showcase.projects.cartago')}
            stack={[
                'TypeScript',
                'Next.js',
                'TailwindCSS',
                'Prisma',
                'PostgreSQL',
            ]}
            favicon="cartago-favicon.png"
            preview="cartago.webp"
            repo="https://github.com/DevCorvus/cartago"
            site="https://cartago.vercel.app/"
        />
        <ProjectCard
            reverse={true}
            title="Pictery"
            description={$i18n.t('sections.showcase.projects.pictery')}
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
            repo="https://github.com/DevCorvus/pictery"
            site="https://pictery.onrender.com/"
        />
        <ProjectCard
            reverse={false}
            title="DevCorvus (Old)"
            description={$i18n.t('sections.showcase.projects.old-portfolio')}
            stack={['TypeScript', 'Next.js', 'TailwindCSS']}
            favicon="devcorvus-favicon.png"
            preview="devcorvus.webp"
            repo="https://github.com/DevCorvus/old-portfolio"
            site="https://devcorvus.vercel.app"
        />
        <ProjectCard
            reverse={true}
            title="Relyn App"
            description={$i18n.t('sections.showcase.projects.relyn')}
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
            repo="https://github.com/DevCorvus/relyn-app"
        />
        <ProjectCard
            reverse={false}
            title="Baibai"
            description={$i18n.t('sections.showcase.projects.baibai')}
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
            repo="https://github.com/DevCorvus/baibai-client"
        />
        <ProjectCard
            reverse={true}
            title="Pigeon Club"
            description={$i18n.t('sections.showcase.projects.pigeon-club')}
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
            repo="https://github.com/DevCorvus/pigeon-club"
        />
        <ProjectCard
            reverse={false}
            title="Django Todo App"
            description={$i18n.t('sections.showcase.projects.django-todo-app')}
            stack={['Python', 'Django', 'TailwindCSS', 'PostgreSQL']}
            favicon="djangotodoapp-favicon.png"
            preview="djangotodoapp.webp"
            repo="https://github.com/DevCorvus/django-todo-app"
        />
        <ProjectCard
            reverse={true}
            title="DevBanner"
            description={$i18n.t('sections.showcase.projects.devbanner')}
            stack={[
                'PHP',
                'Laravel',
                'JavaScript',
                'TailwindCSS',
                'PostgreSQL',
            ]}
            favicon="devbanner-favicon.png"
            preview="devbanner.webp"
            repo="https://github.com/DevCorvus/devbanner"
        />
        <ProjectCard
            reverse={false}
            title="Flask Animals"
            description={$i18n.t('sections.showcase.projects.flask-animals')}
            stack={['Python', 'Flask', 'Bootstrap', 'SQLite']}
            favicon="flaskanimals-favicon.png"
            preview="flaskanimals.webp"
            repo="https://github.com/DevCorvus/flask-animals"
        />
    </div>
    <section class="flex flex-col gap-10">
        <header class="text-xl font-nunito font-bold">
            <h3>{$i18n.t('sections.showcase.subtitle')}</h3>
        </header>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LightProjectCard
                title="Rusty demo"
                description={$i18n.t('sections.showcase.projects.rusty')}
                stack={['Rust', 'Actix Web', 'Tauri', 'Yew', 'SQLite']}
                colorClass="text-orange-500"
                repo="https://github.com/DevCorvus/rusty-demo"
            />
            <LightProjectCard
                title="Goty"
                description={$i18n.t('sections.showcase.projects.goty')}
                stack={['Go', 'SQLite']}
                colorClass="text-sky-500"
                repo="https://github.com/DevCorvus/goty"
            />
            <LightProjectCard
                title="NestJS GraphQL demo"
                description={$i18n.t(
                    'sections.showcase.projects.nestjs-graphql-demo',
                )}
                stack={['TypeScript', 'Nest.js', 'TypeORM', 'SQLite']}
                colorClass="text-rose-500"
                repo="https://github.com/DevCorvus/nestjs-graphql-demo"
            />
            <LightProjectCard
                title="Next tRPC demo"
                description={$i18n.t(
                    'sections.showcase.projects.next-trpc-demo',
                )}
                stack={['TypeScript', 'Nest.js', 'tRPC', 'Prisma', 'SQLite']}
                colorClass="text-blue-500"
                repo="https://github.com/DevCorvus/next-trpc-demo"
            />
        </div>
    </section>
    <footer>
        <p class="text-center text-slate-300">
            {$i18n.t('sections.showcase.message')}
            <a
                href={links.GITHUB}
                class="text-violet-300 font-semibold hover:text-violet-200 focus:text-violet-300 transition"
                target="_blank"
            >
                GitHub!
            </a>
        </p>
    </footer>
</SectionWrapper>
