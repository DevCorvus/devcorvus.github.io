<script lang="ts">
    export let id: string;
</script>

<section {id} class="relative w-full h-screen flex flex-col gap-10 p-10">
    <slot />
</section>
