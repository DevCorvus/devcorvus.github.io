<script lang="ts">
    import SectionWrapper from './SectionWrapper.svelte';
    import ProjectCard from '../ProjectCard.svelte';
    import {
        projectsWithPreview,
        projectsWithoutPreview,
    } from '../../data/projects';
    import LightProjectCard from '../LightProjectCard.svelte';

    function alternateProjectsReverse() {
        let reverse = false;

        return projectsWithPreview.map((project) => {
            const out = { ...project, reverse };
            reverse = !reverse;
            return out;
        });
    }

    const projectsWithPreviewAndAlternateReverse = alternateProjectsReverse();
</script>

<SectionWrapper
    id="showcase"
    flexible
    next={{ id: 'contact', text: 'Contact' }}
>
    <header class="text-2xl font-nunito font-bold">
        <h2>✨ Projects</h2>
    </header>
    <div class="flex flex-col items-center gap-8 md:gap-10 xl:gap-16">
        {#each projectsWithPreviewAndAlternateReverse as project}
            <ProjectCard {...project} />
        {/each}
    </div>
    <section class="flex flex-col gap-10">
        <header class="text-xl font-nunito font-bold">
            <h3>Others</h3>
        </header>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each projectsWithoutPreview as project}
                <LightProjectCard {...project} />
            {/each}
        </div>
    </section>
    <footer>
        <p class="text-center text-slate-300">
            You can check out even more projects on
            <a
                href="#"
                class="text-violet-300 font-semibold hover:text-violet-200 focus:text-violet-300 transition"
                target="_blank"
            >
                my GitHub!
            </a>
        </p>
    </footer>
</SectionWrapper>
