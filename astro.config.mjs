import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  integrations: [icon()],
  vite: {
    plugins: [tailwind()],
  },
});
