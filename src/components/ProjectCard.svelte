<script lang="ts">
    export let title: string;
    export let description: string;
    export let stack: string[];
</script>

<div class="group bg-transparent h-40 md:48 lg:h-56 [perspective:1000px]">
    <div
        class="relative w-full h-full transition duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
    >
        <div
            class="p-4 rounded bg-slate-100 text-slate-900 absolute inset-0 [backface-visibility:hidden]"
        >
            <h3>{title}</h3>
        </div>
        <div
            class="p-4 rounded bg-slate-700 absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
            <div class="flex flex-col justify-between h-full">
                <p>{description}</p>

                <div class="flex gap-2 flex-wrap">
                    {#each stack as tech}
                        <span
                            class="text-xs px-2 py-0.5 rounded-xl bg-slate-500"
                        >
                            {tech}
                        </span>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
