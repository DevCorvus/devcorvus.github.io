<script lang="ts">
    import SectionWrapper from './SectionWrapper.svelte';
    import ProjectCard from '../ProjectCard.svelte';
    import projects from '../../data/projects.json';
</script>

<SectionWrapper
    id="showcase"
    flexible
    next={{ id: 'contact', text: 'Contact' }}
>
    <header class="text-2xl font-nunito font-bold">
        <h2>Projects</h2>
    </header>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each projects as project}
            <ProjectCard {...project} />
        {/each}
    </div>
</SectionWrapper>
