<script lang="ts">
    import { onMount } from 'svelte';
    import NextSectionLink from './NextSectionLink.svelte';

    interface NextSectionProps {
        id: string;
        text: string;
    }

    export let id: string;
    export let flexible = false;
    export let next: NextSectionProps | null = null;

    let element: HTMLElement;
    let intersecting = false;

    onMount(() => {
        if (element instanceof HTMLElement) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        intersecting = true;
                        observer.unobserve(element);
                    }
                },
                { threshold: 0.1 }
            );

            observer.observe(element);
            return () => observer.unobserve(element);
        }
    });
</script>

<section
    bind:this={element}
    {id}
    class={`relative w-full min-h-screen ${
        flexible ? 'h-auto' : 'h-auto sm:h-screen'
    } p-10`}
>
    <div
        class={`
            w-full h-full flex flex-col gap-10 transition duration-1000
            ${intersecting ? '' : 'opacity-0 scale-90'}
            ${next && !flexible ? 'pb-32 md:pb-0' : ''}
            ${next && flexible ? 'pb-32' : ''}
        `}
    >
        <slot />
    </div>
    {#if next}
        <NextSectionLink to={next.id} visible={intersecting}>
            {next.text}
        </NextSectionLink>
    {/if}
</section>
