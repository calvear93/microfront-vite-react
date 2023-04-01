import { UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svg from 'vite-plugin-svgr';

export default {
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{spec,test}.{ts,cts,mts,tsx}'],
		setupFiles: [
			'@testing-library/jest-dom',
			'@testing-library/react/dont-cleanup-after-each'
		],
		reporters: ['junit', 'verbose'],
		outputFile: {
			junit: '.reports/junit.xml'
		},
		testTimeout: 12_000,
		coverage: {
			all: true,
			reportsDirectory: '.reports/coverage',
			reporter: ['text', 'text-summary', 'lcov', 'cobertura', 'json'],
			include: ['src/**/*.{ts,cts,mts,tsx}'],
			exclude: [
				'**/*.d.{ts,cts,mts,tsx}',
				'**/*.mock.{ts,cts,mts,tsx}',
				'**/*.config.{ts,cts,mts,tsx}',
				'**/{index,main}.{ts,cts,mts,tsx}',
				'**/__{tests,mocks,fixtures}__'
			]
		}
	},
	plugins: [react(), svg()]
} satisfies UserConfigExport;
