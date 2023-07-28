<script lang="ts">
    import SectionWrapper from './SectionWrapper.svelte';
    import Logo from '../Logo.svelte';
    import DiscordButton from '../DiscordButton.svelte';
    import { screenSize, links } from '../../constants';
    import { t } from 'i18next';
    import { fade } from 'svelte/transition';

    let innerWidth: number;
    let showAlterName = false;

    setInterval(() => {
        showAlterName = true;
        setTimeout(() => {
            showAlterName = false;
        }, 2000);
    }, 6000);
</script>

<svelte:window bind:innerWidth />

<SectionWrapper
    id="main"
    next={{ id: 'showcase', text: t('sections.main.next') }}
>
    <div
        class="flex flex-col md:flex-row-reverse md:my-auto gap-10 text-center md:text-left"
    >
        {#if innerWidth < screenSize.MEDIUM}
            <Logo />
        {/if}
        <div class="flex-1 flex flex-col gap-8">
            <header class="flex flex-col gap-2">
                <span class="ml-1">{t('sections.main.greet')}</span>
                <div
                    class="relative font-nunito uppercase tracking-wide font-black text-4xl"
                >
                    <h1>
                        {#if !showAlterName}
                            <span in:fade>Luis Portillo</span>
                        {:else}
                            <span in:fade>DevCorvus</span>
                        {/if}
                    </h1>
                    {#if !showAlterName}
                        <span
                            class="absolute left-0.5 top-0.5 w-full text-slate-500 -z-10 pointer-events-none"
                        >
                            Luis Portillo
                        </span>
                    {:else}
                        <span
                            class="absolute left-0.5 top-0.5 w-full text-slate-500 -z-10 pointer-events-none"
                        >
                            DevCorvus
                        </span>
                    {/if}
                </div>
                <span
                    class="font-semibold font-nunito uppercase bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-slate-100"
                >
                    {t('sections.main.subtitle')}
                </span>
            </header>
            <div class="leading-relaxed">
                <p>{t('sections.main.content')}</p>
            </div>
        </div>
        <div class="flex-1 flex flex-col items-center justify-around">
            {#if innerWidth >= screenSize.MEDIUM}
                <Logo />
            {/if}
            <div
                class="flex w-full max-w-sm md:max-w-none justify-around md:justify-center md:gap-10 text-slate-900"
            >
                <a
                    href={'mailto:' + links.EMAIL}
                    target="_blank"
                    class="flex items-center justify-center p-4 outline-none bg-slate-100 transition duration-300 hover:text-violet-600 focus:text-violet-600 rounded-xl w-12 h-12"
                >
                    <i class="fa-solid fa-envelope w-8 h-8" />
                </a>
                <a
                    href={links.GITHUB}
                    target="_blank"
                    class="flex items-center justify-center p-4 outline-none bg-slate-100 transition duration-300 hover:text-violet-600 focus:text-violet-600 rounded-xl w-12 h-12"
                >
                    <i class="fa-brands fa-github w-8 h-8" />
                </a>
                <a
                    href={links.LINKEDIN}
                    target="_blank"
                    class="flex items-center justify-center p-4 outline-none bg-slate-100 transition duration-300 hover:text-violet-600 focus:text-violet-600 rounded-xl w-12 h-12"
                >
                    <i class="fa-brands fa-linkedin w-8 h-8" />
                </a>
                <DiscordButton />
            </div>
        </div>
    </div>
</SectionWrapper>
