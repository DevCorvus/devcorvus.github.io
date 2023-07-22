<script lang="ts">
    import SectionWrapper from './SectionWrapper.svelte';
    import Logo from '../Logo.svelte';
    import { screenSize } from '../../constants';

    let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<SectionWrapper id="main" next={{ id: 'showcase', text: 'Experience' }}>
    <div class="flex flex-col md:flex-row md:my-auto gap-8 md:gap-10">
        {#if innerWidth < screenSize.MEDIUM}
            <Logo />
        {/if}
        <div class="flex-1 flex flex-col gap-8">
            <header class="flex flex-col gap-2">
                <span class="ml-1">Hi I'm</span>
                <div
                    class="relative font-nunito uppercase tracking-wide font-black text-4xl"
                >
                    <h1>Luis Portillo</h1>
                    <span
                        class="absolute left-0.5 top-0.5 w-full text-slate-500 -z-10 pointer-events-none"
                    >
                        Luis Portillo
                    </span>
                </div>
            </header>
            <div class="leading-relaxed">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam minus veritatis architecto nobis amet sapiente
                    fugit incidunt quod aspernatur qui ipsam quidem error ut,
                    dicta voluptatibus minima delectus! Officia repellendus
                    dolorem quos eaque! Repellendus blanditiis incidunt minus
                    reiciendis aut molestias.
                </p>
            </div>
        </div>
        <div class="flex-1 flex flex-col items-center justify-around">
            {#if innerWidth >= screenSize.MEDIUM}
                <Logo />
            {/if}
            <div
                class="flex justify-between md:justify-center md:gap-8 text-slate-900 w-full"
            >
                <button
                    class="flex items-center justify-center p-4 outline-none bg-slate-100 transition duration-300 hover:text-violet-600 focus:text-violet-600 rounded-xl w-12 h-12"
                >
                    <i class="fa-solid fa-envelope w-8 h-8" />
                </button>
                <button
                    class="flex items-center justify-center p-4 outline-none bg-slate-100 transition duration-300 hover:text-violet-600 focus:text-violet-600 rounded-xl w-12 h-12"
                >
                    <i class="fa-brands fa-github w-8 h-8" />
                </button>
                <button
                    class="flex items-center justify-center p-4 outline-none bg-slate-100 transition duration-300 hover:text-violet-600 focus:text-violet-600 rounded-xl w-12 h-12"
                >
                    <i class="fa-brands fa-linkedin w-8 h-8" />
                </button>
                <button
                    class="flex items-center justify-center p-4 outline-none bg-slate-100 transition duration-300 hover:text-violet-600 focus:text-violet-600 rounded-xl w-12 h-12"
                >
                    <i class="fa-brands fa-discord w-8 h-8" />
                </button>
            </div>
        </div>
    </div>
</SectionWrapper>

<style>
    button:hover,
    button:focus {
        box-shadow: 0 0 25px rgba(139, 92, 246, 0.75);
    }
</style>
