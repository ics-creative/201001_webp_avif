import { defineConfig } from "vite";
import { generateFormats } from "./plugins/generate-formats.js";

export default defineConfig({
  plugins: [
    generateFormats({
      srcDir: "public/img",
      webp: { quality: 80 },
      avif: { quality: 50 },
    }),
  ],
});
