import { normalizePath, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react-swc';
import css from 'unocss/vite';
import svg from 'vite-plugin-svgr';
import fonts from 'vite-plugin-webfont-dl';
import federation from '@originjs/vite-plugin-federation';
import { createHtmlPlugin as html } from 'vite-plugin-html';
import { dependencies } from './package.json';

const fontFamily = process.env.FONT_FAMILY;
const fontWeight = process.env.FONT_WEIGHTS;

// https://vitejs.dev/config/
export default {
	base: normalizePath(`/${process.env.BASE_URL}`),
	server: {
		open: true,
		https: process.env.HTTPS === 'true',
		port: +process.env.PORT!
	},
	preview: {
		open: true,
		port: +process.env.PORT!,
		cors: true
	},
	build: {
		sourcemap: process.env.SOURCEMAP === 'true',
		minify: true,
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
		react(),
		css(),
		svg(),
		fonts([
			`https://fonts.googleapis.com/css2?family=${fontFamily}:wght@${fontWeight}&display=swap`
		]),
		html({
			inject: {
				data: process.env
			},
			minify: true
		}),
		federation({
			name: process.env.VITE_APP_TITLE,
			remotes: {
				home: `http://localhost:5010/assets/${process.env.VITE_APP_HOME_NAME}.js`
			},
			shared: dependencies
		})
	]
} satisfies UserConfigExport;
