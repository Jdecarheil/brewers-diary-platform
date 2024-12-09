import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig as defineVitestConfig } from "vitest/config";

// https://vite.dev/config/
const viteConfig = defineViteConfig({
	plugins: [
		react({
			babel: {
				plugins: [["module:@preact/signals-react-transform"]],
			},
		}),
		tsconfigPaths(),
		ViteImageOptimizer({
			png: { quality: 80 },
			jpeg: { quality: 75 },
			webp: { quality: 80 },
			avif: { quality: 70 },
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		host: "127.0.0.1",
		port: 3000,
	},
});

const vitestConfig = defineVitestConfig({
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setup.ts",
	},
});

export default mergeConfig(vitestConfig, viteConfig);
