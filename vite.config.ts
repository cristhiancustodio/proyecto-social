import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path";
import { fileURLToPath } from "url";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
const __filename = fileURLToPath(import.meta.url);


const __dirname = path.dirname(__filename);
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	optimizeDeps: {
		include: ['@chakra-ui/react'],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"), // Configura "@" como alias de "src"
		},
		extensions: ['.tsx', '.ts', '.jsx', '.js']
	},
})
