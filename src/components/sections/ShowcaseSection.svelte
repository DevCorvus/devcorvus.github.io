<script lang="ts">
    import SectionWrapper from './SectionWrapper.svelte';
    import ProjectCard from '../ProjectCard.svelte';
    import projects from '../../data/projects.json';

    function alternateProjectsReverse() {
        let reverse = false;

        return projects.map((project) => {
            const out = { ...project, reverse };
            reverse = !reverse;
            return out;
        });
    }

    const projectsWithAlternateReverse = alternateProjectsReverse();
</script>

<SectionWrapper
    id="showcase"
    flexible
    next={{ id: 'contact', text: 'Contact' }}
>
    <header class="text-2xl font-nunito font-bold">
        <h2>Projects</h2>
    </header>
    <div class="flex flex-col items-center gap-8 md:gap-10 xl:gap-16">
        {#each projectsWithAlternateReverse as project}
            <ProjectCard {...project} />
        {/each}
    </div>
</SectionWrapper>
