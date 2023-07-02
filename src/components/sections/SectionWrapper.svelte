<script lang="ts">
    export let id: string;
</script>

<section {id} class="relative w-full h-screen p-10">
    <div class="w-full h-full flex flex-col gap-10 fade-in">
        <slot />
    </div>
</section>

<style>
    .fade-in {
        animation: fadeIn 1s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
    }
</style>
