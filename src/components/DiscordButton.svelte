<script lang="ts">
    import { copy } from 'svelte-copy';
    import { fade } from 'svelte/transition';
    import { i18n } from '../utils/i18n';
    import { links } from '../constants';

    let tooltip = false;
    let timeoutId: number;

    function showTooltip() {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        tooltip = true;
        timeoutId = setTimeout(() => {
            tooltip = false;
        }, 3000);
    }
</script>

<div class="relative">
    <button
        use:copy={links.DISCORD}
        on:svelte-copy={showTooltip}
        class="flex items-center justify-center p-4 outline-none bg-slate-100 transition duration-300 hover:text-violet-600 focus:text-violet-600 rounded-xl w-12 h-12"
    >
        <i class="fa-brands fa-discord w-8 h-8" />
    </button>
    {#if tooltip}
        <span
            transition:fade
            class="absolute -bottom-8 left-0 w-full flex items-center justify-center text-base text-slate-300"
        >
            {$i18n.t('copy')}
        </span>
    {/if}
</div>

<style>
    button:hover,
    button:focus {
        box-shadow: 0 0 25px rgba(139, 92, 246, 0.75);
    }
</style>
