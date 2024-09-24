import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/sass/app.scss",
                "resources/js/app.js",
                "resources/css/style.css", // Tambahkan file CSS yang baru
                "resources/js/script.js", // Tambahkan file JS yang baru
            ],
            refresh: true,
        }),
    ],
});
