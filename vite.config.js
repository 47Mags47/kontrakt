import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';

const env = loadEnv('all', process.cwd());

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
    ],

    css: {
        preprocessorOptions: {
            sass: {
                api: 'modern-compiler',
            }
        }
    },

    server: {
        host: true,
        port: 5173,
        strictPort: true,
        hmr: {
            host: env.APP_HOST,
            port: 5173,
        },
    },
});
