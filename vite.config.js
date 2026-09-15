import { defineConfig } from "vite";

// Minimal config — this is a plain static HTML/CSS/JS app with no
// framework and no special build requirements. Adjust here if you later
// add a base path (e.g. for GitHub Pages) or other build options.
export default defineConfig({
  build: {
    outDir: "dist",
  },
});
