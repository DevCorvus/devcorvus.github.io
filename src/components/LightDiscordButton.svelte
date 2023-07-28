<script lang="ts">
    import { copy } from 'svelte-copy';
    import { fade } from 'svelte/transition';
    import { t } from 'i18next';
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
        class="flex items-center hover:text-violet-300 focus:text-violet-300 hover:scale-110 focus:scale-110 transition"
    >
        <i class="fa-brands fa-discord w-5 h-5 md:w-6 md:h-6" />
    </button>
    {#if tooltip}
        <span
            transition:fade
            class="absolute -top-6 left-0 w-full flex items-center justify-center text-sm text-violet-300"
        >
            {t('copy')}
        </span>
    {/if}
</div>
