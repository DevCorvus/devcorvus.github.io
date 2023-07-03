<script lang="ts">
    export let to: string;
    export let visible = false;

    let show = false;

    $: if (visible) {
        setTimeout(() => {
            show = true;
        }, 3 * 1000);
    }
</script>

<div
    class={`absolute left-0 bottom-5 w-full transition duration-700 ${
        show ? '' : 'opacity-0'
    }`}
>
    <div class="flex justify-center items-center gap-10">
        <a
            href={`#${to}`}
            class="flex flex-col items-center gap-1 transition duration-300 text-violet-200 scale-90 hover:scale-100 focus:scale-100 animate-pulse hover:animate-none focus:animate-none"
        >
            <span class="font-nunito font-semibold tracking-widest">
                <slot />
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>
        </a>
    </div>
</div>
