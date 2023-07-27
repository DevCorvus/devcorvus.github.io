<script lang="ts">
    import type { Tech } from '../types';

    export let title: string;
    export let description: string;
    export let stack: Tech[];
    export let colorClass: string;
</script>

<div
    class="flex gap-4 p-4 md:p-6 bg-slate-800 rounded bg-opacity-75 backdrop-blur-[2px] shadow-md shadow-slate-800"
>
    <i class={`self-start fa-solid fa-code w-8 h-8 ${colorClass}`} />
    <div class="w-full flex flex-col justify-between gap-4">
        <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between">
                <span class={`font-bold ${colorClass}`}>{title}</span>
                <a
                    href="#"
                    class="flex item-center bg-slate-500 bg-opacity-50 hover:text-slate-100 focus:text-slate-100 hover:scale-110 focus:scale-110 transition p-1.5 rounded-full shadow-md"
                >
                    <i class="fa-brands fa-github w-6 h-6" />
                </a>
            </div>
            <p class="text-base">{description}</p>
        </div>
        <div class="flex gap-2 flex-wrap">
            {#each stack as tech}
                <span
                    class="text-xs font-semibold px-2 py-0.5 rounded-xl bg-slate-500 bg-opacity-50 shadow-md"
                >
                    {tech}
                </span>
            {/each}
        </div>
    </div>
</div>
