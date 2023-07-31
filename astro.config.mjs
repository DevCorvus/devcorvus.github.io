import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';
import i18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), svelte(), i18next()],
    site: 'https://devcorvus.github.io',
});
