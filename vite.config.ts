import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const srcRoot = fileURLToPath(new URL("./src", import.meta.url));
const appRoot = fileURLToPath(new URL("./src/app", import.meta.url));

function figmaAssetResolver(): Plugin {
  return {
    name: "figma-asset-resolver",

    resolveId(id: string) {
      if (id.startsWith("figma:asset/")) {
        const filename = id.replace("figma:asset/", "");
        return resolve(projectRoot, "src/assets", filename);
      }

      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],

  server: {
    host: "0.0.0.0",
    port: 6666,
    strictPort: true,
  },


  resolve: {
    alias: {
      // Alias @ to the src/ dir
      // Alias @app to the app/src/ dir
      "@": srcRoot,
      "@app": appRoot,
    },
  },
  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ["**/*.svg", "**/*.csv"],
});