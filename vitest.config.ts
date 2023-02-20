import { UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svg from 'vite-plugin-svgr';
import { checker } from 'vite-plugin-checker';

export default {
	test: {
		globals: true, // for @testing-library
		environment: 'jsdom',
		setupFiles: [
			'@testing-library/jest-dom',
			'@testing-library/react/dont-cleanup-after-each'
		],
		reporters: ['junit', 'verbose'],
		outputFile: {
			junit: '.reports/junit.xml'
		},
		testTimeout: 5000,
		coverage: {
			all: true,
			reportsDirectory: '.reports/coverage',
			reporter: ['text', 'text-summary', 'lcov', 'cobertura', 'json'],
			include: ['src/**/*.{ts,tsx}'],
			exclude: [
				'**/index.ts',
				'**/main.tsx',
				'**/App.tsx',
				'**/*.d.ts',
				'**/*.mock.ts',
				'**/*.mock.tsx',
				'**/*.config.ts',
				'**/__tests__',
				'**/__mocks__',
				'**/__fixtures__'
			]
		}
	},
	plugins: [
		react(),
		svg(),
		checker({
			typescript: true,
			eslint: {
				lintCommand: 'eslint src/**/*.{ts,tsx}',
				dev: { logLevel: ['error'] }
			}
		})
	]
} satisfies UserConfigExport;
