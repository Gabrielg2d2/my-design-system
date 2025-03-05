import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import path from 'path-browserify'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
			rollupTypes: true,
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'MyDesignSystem',
			formats: ['es', 'cjs'],
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
		},
	},
})
