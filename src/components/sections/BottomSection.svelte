<script lang="ts">
    import SectionWrapper from './SectionWrapper.svelte';
    import Tech from '../Tech.svelte';
    import { t } from 'i18next';
</script>

<SectionWrapper id="contact">
    <div
        class="flex flex-col items-center gap-10 md:flex-row-reverse md:mt-[10vh] xl:mt-[25vh]"
    >
        <div class="flex-1 flex flex-col gap-8">
            <div class="flex items-center justify-between">
                <header class="text-2xl font-nunito font-bold">
                    <h2>✨ {t('sections.bottom.title')}</h2>
                </header>
                <ul class="flex items-center gap-2 sm:gap-4 text-slate-400">
                    <li>
                        <a
                            href="#"
                            class="flex items-center hover:text-violet-300 focus:text-violet-300 hover:scale-110 focus:scale-110 transition"
                        >
                            <i
                                class="fa-solid fa-envelope w-5 h-5 sm:w-6 md:h-6"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex items-center hover:text-violet-300 focus:text-violet-300 hover:scale-110 focus:scale-110 transition"
                        >
                            <i
                                class="fa-brands fa-github w-5 h-5 sm:w-6 md:h-6"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex items-center hover:text-violet-300 focus:text-violet-300 hover:scale-110 focus:scale-110 transition"
                        >
                            <i
                                class="fa-brands fa-linkedin w-5 h-5 md:w-6 md:h-6"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex items-center hover:text-violet-300 focus:text-violet-300 hover:scale-110 focus:scale-110 transition"
                        >
                            <i
                                class="fa-brands fa-discord w-5 h-5 md:w-6 md:h-6"
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <p>{t('sections.bottom.content')}</p>
            </div>
        </div>
        <div class="flex-1 flex justify-center">
            <div class="grid grid-cols-5 gap-2">
                <Tech icon="devicon-html5-plain" />
                <Tech icon="devicon-css3-plain" />
                <Tech icon="devicon-javascript-plain" />
                <Tech icon="devicon-typescript-plain" />
                <Tech icon="devicon-nextjs-plain" />
                <Tech icon="devicon-react-plain" />
                <Tech icon="devicon-vuejs-plain" />
                <Tech icon="devicon-svelte-plain" />
                <Tech icon="devicon-tailwindcss-plain" />
                <Tech icon="devicon-nodejs-plain" />
                <Tech icon="devicon-express-original" />
                <Tech icon="devicon-nestjs-plain" />
                <Tech icon="devicon-python-plain" />
                <Tech icon="devicon-django-plain" />
                <Tech icon="devicon-php-plain" />
                <Tech icon="devicon-laravel-plain" />
                <Tech icon="devicon-go-plain" />
                <Tech icon="devicon-rust-plain" />
                <Tech icon="devicon-postgresql-plain" />
                <Tech icon="devicon-mongodb-plain" />
                <Tech icon="devicon-mysql-plain" />
                <Tech icon="devicon-sqlite-plain" />
                <Tech icon="devicon-docker-plain" />
                <Tech icon="devicon-linux-plain" />
                <Tech icon="devicon-git-plain" />
            </div>
        </div>
    </div>
</SectionWrapper>
