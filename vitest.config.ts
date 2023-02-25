import { UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svg from 'vite-plugin-svgr';
import { checker } from 'vite-plugin-checker';

export default {
	test: {
		globals: true, // for @testing-library
		environment: 'jsdom',
		include: ['src/**/*.(spec|test).{ts,cts,mts,tsx}'],
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
			include: ['src/**/*.{ts,cts,mts,tsx}'],
			exclude: [
				'**/main.tsx',
				'**/index.{ts,cts,mts}',
				'**/*.d.ts',
				'**/*.mock.{ts,cts,mts,tsx}',
				'**/*.config.{ts,cts,mts}',
				'**/__tests__',
				'**/__mocks__',
				'**/__fixtures__'
			]
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
		svg()
	]
} satisfies UserConfigExport;
