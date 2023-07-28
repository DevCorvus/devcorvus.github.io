<script lang="ts">
    import { screenSize } from '../constants';
    import type { Tech } from '../types';

    export let reverse: boolean;
    export let title: string;
    export let description: string;
    export let stack: Tech[];
    export let favicon: string;
    export let preview: string;
    export let repo: string;
    export let site = '';

    let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<section
    class="relative w-full h-full md:h-48 lg:h-56 xl:h-72 bg-slate-800 bg-opacity-75 backdrop-blur-[2px] shadow-md shadow-slate-800 rounded-lg overflow-hidden"
>
    <div
        class={`h-full flex flex-col justify-between gap-2 md:gap-8 ${
            reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
    >
        <div class="flex-1 flex flex-col gap-4 p-4">
            <div class="flex justify-between items-center">
                <header class="flex items-center gap-2">
                    <img
                        class="w-8 md:w-10"
                        src={'/images/projects/' + favicon}
                        alt={title + ' favicon'}
                    />
                    <h3 class="text-xl md:text-3xl font-bold drop-shadow">
                        {title}
                    </h3>
                </header>
                <div class="flex gap-2">
                    {#if site}
                        <a
                            href={site}
                            target="_blank"
                            class="flex item-center bg-slate-500 bg-opacity-50 hover:text-slate-100 focus:text-slate-100 hover:scale-110 focus:scale-110 transition p-1.5 rounded-full shadow-md"
                        >
                            <i class="fa-solid fa-link w-6 h-6" />
                        </a>
                    {/if}
                    <a
                        href={repo}
                        target="_blank"
                        class="flex item-center bg-slate-500 bg-opacity-50 hover:text-slate-100 focus:text-slate-100 hover:scale-110 focus:scale-110 transition p-1.5 rounded-full shadow-md"
                    >
                        <i class="fa-brands fa-github w-6 h-6" />
                    </a>
                </div>
            </div>
            <p class="text-slate-200 drop-shadow">{description}</p>
            <div class="hidden md:visible md:flex gap-2 flex-wrap mt-auto">
                {#each stack as tech}
                    <span
                        class="text-xs font-semibold px-2 py-0.5 rounded-xl bg-slate-500 bg-opacity-50 shadow-md"
                    >
                        {tech}
                    </span>
                {/each}
            </div>
        </div>
        {#if innerWidth >= screenSize.MEDIUM}
            <div
                class="w-[40%] h-full bg-cover bg-center bg-no-repeat border border-slate-700 rounded-lg"
                style={`background-image: url(/images/projects/${preview})`}
            />
        {:else}
            <img
                src={`/images/projects/${preview}`}
                class="w-full h-auto border border-slate-700"
                alt={`${title} preview`}
            />
        {/if}
        <div class="p-4 md:hidden flex gap-2 flex-wrap mt-auto">
            {#each stack as tech}
                <span
                    class="text-xs font-semibold px-2 py-0.5 rounded-xl bg-slate-500 bg-opacity-50 shadow-md"
                >
                    {tech}
                </span>
            {/each}
        </div>
    </div>
</section>
