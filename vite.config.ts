import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import TsConfigPaths from "vite-tsconfig-paths";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TsConfigPaths(),
    ViteImageOptimizer(),
    ViteMinifyPlugin({ minifyCSS: true }),
  ],
});
