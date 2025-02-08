import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		include: ['@chakra-ui/react'],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"), // Configura "@" como alias de "src"
		},
	},
})