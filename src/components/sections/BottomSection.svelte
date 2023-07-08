<script lang="ts">
    import SectionWrapper from './SectionWrapper.svelte';
    import Tech from '../Tech.svelte';
</script>

<SectionWrapper id="contact">
    <div
        class="flex flex-col items-center gap-10 md:flex-row md:mt-[10vh] xl:mt-[25vh]"
    >
        <div class="flex-1 flex flex-col gap-8">
            <header class="text-2xl font-nunito font-bold">
                <h2>Let's make it!</h2>
            </header>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    excepturi repellendus voluptatibus corporis nesciunt quod,
                    dolorum odio error commodi alias!
                </p>
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
