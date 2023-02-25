import { normalizePath, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react-swc';
import css from 'unocss/vite';
import svg from 'vite-plugin-svgr';
import federation from '@originjs/vite-plugin-federation';
import { createHtmlPlugin as html } from 'vite-plugin-html';
import { checker } from 'vite-plugin-checker';
import { dependencies } from './package.json';

const isDev = process.env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default {
	base: normalizePath(`/${process.env.BASE_URL}`),
	server: {
		open: true,
		https: process.env.HTTPS === 'true',
		port: +process.env.PORT!
	},
	preview: {
		open: false,
		port: +process.env.PORT!,
		cors: true
	},
	build: {
		sourcemap: process.env.SOURCEMAP === 'true',
		minify: true,
		cssCodeSplit: false,
		target: process.env.TARGET,
		rollupOptions: {
			output: {
				manualChunks: {
					react: ['react', 'react-dom']
				}
			}
		}
	},
	plugins: [
		checker({
			typescript: true,
			enableBuild: true,
			eslint: {
				lintCommand: 'eslint src/**/*.{ts,cts,mts,tsx}',
				dev: { logLevel: ['error'] }
			}
		}),
		react(),
		css(),
		svg(),
		html({
			entry: isDev ? 'src/main.tsx' : undefined,
			template: isDev ? 'index.html' : undefined,
			inject: {
				data: process.env
			},
			minify: true
		}),
		federation({
			name: process.env.VITE_APP_TITLE,
			filename: `${process.env.VITE_APP_NAME}.js`,
			exposes: {
				'./MainPage': './src/pages/Main.page.tsx',
				'./DetailPage': './src/pages/Detail.page.tsx'
			},
			shared: dependencies
		})
	]
} satisfies UserConfigExport;
