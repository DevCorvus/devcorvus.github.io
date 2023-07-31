<script lang="ts">
    import layeredWaves from '/images/layered-waves.svg';
    import flag from '/images/flag.svg';
    import satelliteImage from '/images/satellite.png';
    import { onMount } from 'svelte';
    import { i18n } from '../utils/i18n';

    let satellite: HTMLDivElement;

    onMount(() => {
        if (satellite instanceof HTMLDivElement) {
            let interval: number;

            setTimeout(() => {
                satellite.hidden = false;
                interval = setInterval(() => {
                    satellite.hidden = !satellite.hidden;
                }, 5000);
            }, 2000);

            return () => clearInterval(interval);
        }
    });
</script>

<footer
    class="w-screen h-60 relative md:absolute bottom-0 left-0 pointer-events-none"
>
    <span
        class="absolute bottom-0 inline-block w-full h-24 blur-3xl bg-violet-200 opacity-50"
    />
    <img
        class="absolute w-screen h-80 bottom-0"
        src={layeredWaves}
        alt="Surface"
    />
    <img
        class="absolute bottom-32 invert w-12 rotate-12 left-1/2 -translate-x-1/2"
        src={flag}
        alt="DevCorvus's Flag"
    />
    <div
        bind:this={satellite}
        hidden
        class="satellite-orbit absolute bottom-60"
    >
        <div class="absolute w-32 left-6 -top-8">
            <span
                class="py-1 px-2 text-violet-200 bg-violet-400 bg-opacity-25 rounded-xl rounded-bl-none text-sm"
            >
                {$i18n.t('satellite')}
            </span>
        </div>
        <img
            class="satellite-rotate w-6 brightness-0 invert"
            src={satelliteImage}
            alt="Satellite"
        />
    </div>
    <p
        class="absolute bottom-0 left-0 w-full text-center text-xs text-violet-300"
    >
        {$i18n.t('message')}
    </p>
</footer>

<style>
    .satellite-orbit {
        animation: satelliteOrbit 5s linear infinite;
    }
    .satellite-rotate {
        animation: satelliteRotation 5s linear infinite;
    }
    @keyframes satelliteOrbit {
        0% {
            left: 0;
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            left: 100%;
            opacity: 0;
        }
    }
    @keyframes satelliteRotation {
        0% {
            transform: rotate(20deg);
        }
        25% {
            transform: rotate(45deg);
        }
        50% {
            transform: rotate(90deg);
        }
        75% {
            transform: rotate(135deg);
        }
        100% {
            transform: rotate(160deg);
        }
    }
</style>
