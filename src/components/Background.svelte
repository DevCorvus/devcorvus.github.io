<script lang="ts">
    import { onMount } from 'svelte';

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;

    function getRandomNumberUpTo(max: number) {
        return Math.round(Math.random() * max);
    }

    function drawStar(
        cx: number,
        cy: number,
        spikes: number,
        outerRadius: number,
        innerRadius: number
    ) {
        let rot = (Math.PI / 2) * 3;
        let x = canvas.width;
        let y = canvas.height;
        const step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);

        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }

        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgb(196 181 253)';
        ctx.stroke();
        ctx.fillStyle = 'white';
        ctx.fill();
    }

    function renderStarsOnCanvas(size: number, amount: number) {
        for (let i = 0; i < amount; i++) {
            const x = getRandomNumberUpTo(canvas.width);
            const y = getRandomNumberUpTo(canvas.height);
            const innerRadius = getRandomNumberUpTo(size);
            const outerRadius = innerRadius / 2;
            drawStar(x, y, 4, innerRadius, outerRadius);
        }
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function resizeCanvasAndDrawStars() {
        resizeCanvas();
        renderStarsOnCanvas(4, 20);
    }

    onMount(() => {
        ctx = canvas.getContext('2d')!; // I know this is bad but trust me
        resizeCanvasAndDrawStars();
    });
</script>

<svelte:window on:resize={resizeCanvasAndDrawStars} />

<div class="w-screen h-screen fixed top-0 left-0 rotate-scene">
    <div class="opacity-50">
        <canvas
            bind:this={canvas}
            id="canvas-bg"
            class="absolute inset-0 animate-pulse"
        />
    </div>
    <div class="w-full h-full paper-grid opacity-5 -rotate-12" />
</div>

<style>
    .rotate-scene {
        animation: rotateScene 2s ease-in-out;
    }

    @keyframes rotateScene {
        from {
            transform: rotateY(45deg) rotateX(80deg);
        }
    }

    .paper-grid {
        --grid-color: rgb(196 181 253);
        background-size: 100px 100px;
        background-image: linear-gradient(
                to right,
                var(--grid-color) 1px,
                transparent 1px
            ),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
    }
</style>
