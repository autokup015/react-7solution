import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig, configDefaults } from "vitest/config";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
  ],

  test: {
    ...configDefaults,
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    coverage: {
      exclude: [
        "**/__tests__/**",
        "public",
        "src/routes",
        "src/main.tsx",
        "src/App.tsx",
        "eslint.config.js",
        "vite.config.ts",
        "src/types",
      ],
    },
  },
  server: {
    port: 8080,
  },
});
