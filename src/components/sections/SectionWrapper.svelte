<script lang="ts">
    import { onMount } from 'svelte';

    export let id: string;
    export let flexible = false;

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
                { threshold: 0.4 }
            );

            observer.observe(element);
            return () => observer.unobserve(element);
        }
    });
</script>

<section
    bind:this={element}
    {id}
    class={`relative w-full ${flexible ? 'h-auto' : 'h-screen'} p-10 `}
>
    <div
        class={`w-full h-full flex flex-col gap-10 transition duration-1000 ${
            intersecting ? '' : 'opacity-0 scale-90'
        }`}
    >
        <slot />
    </div>
</section>
